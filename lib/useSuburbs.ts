"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Suburb = {
  name: string;
  state: string;
  lat: number;
  lng: number;
  id: string;
};

// Raw row shape in /public/data/au-suburbs.json: [name, state, lat, lng]
type Row = [string, string, number, number];

// Module-level cache so the ~150KB (gzipped) dataset is fetched and parsed once,
// no matter how many times the step mounts/unmounts.
let CACHE: Suburb[] | null = null;
let LOADING: Promise<Suburb[]> | null = null;

function load(): Promise<Suburb[]> {
  if (CACHE) return Promise.resolve(CACHE);
  if (LOADING) return LOADING;
  LOADING = fetch("/data/au-suburbs.json")
    .then((r) => r.json() as Promise<Row[]>)
    .then((rows) => {
      CACHE = rows.map(([name, state, lat, lng]) => ({
        name,
        state,
        lat,
        lng,
        id: `${name}|${state}`,
      }));
      return CACHE;
    });
  return LOADING;
}

function haversineKm(aLat: number, aLng: number, bLat: number, bLng: number) {
  const R = 6371;
  const dLat = ((bLat - aLat) * Math.PI) / 180;
  const dLng = ((bLng - aLng) * Math.PI) / 180;
  const la1 = (aLat * Math.PI) / 180;
  const la2 = (bLat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function useSuburbs() {
  const [ready, setReady] = useState(!!CACHE);
  const dataRef = useRef<Suburb[]>(CACHE ?? []);

  useEffect(() => {
    let mounted = true;
    load().then((d) => {
      if (!mounted) return;
      dataRef.current = d;
      setReady(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Prefix matches first (ranked by name length so shorter/closer matches win),
  // then substring matches, capped at `limit`.
  const search = useCallback((query: string, limit = 7): Suburb[] => {
    const data = dataRef.current;
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const starts: Suburb[] = [];
    const contains: Suburb[] = [];
    for (const sub of data) {
      const n = sub.name.toLowerCase();
      if (n.startsWith(q)) starts.push(sub);
      else if (n.includes(q) && contains.length < limit) contains.push(sub);
    }
    starts.sort((a, b) => a.name.length - b.name.length || a.name.localeCompare(b.name));
    return [...starts, ...contains].slice(0, limit);
  }, []);

  // Suburbs closest to ANY already-selected suburb, nearest first.
  const nearby = useCallback(
    (selected: Suburb[], limit = 6, maxKm = 25): Suburb[] => {
      const data = dataRef.current;
      if (!selected.length) return [];
      const chosen = new Set(selected.map((s) => s.id));
      const scored: { sub: Suburb; d: number }[] = [];
      for (const sub of data) {
        if (chosen.has(sub.id)) continue;
        let min = Infinity;
        for (const s of selected) {
          const d = haversineKm(sub.lat, sub.lng, s.lat, s.lng);
          if (d < min) min = d;
        }
        if (min <= maxKm) scored.push({ sub, d: min });
      }
      scored.sort((a, b) => a.d - b.d);
      return scored.slice(0, limit).map((x) => x.sub);
    },
    []
  );

  return { ready, search, nearby };
}
