"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft, ChevronRight, Play, Heart, MessageCircle, Share2, Bookmark,
  Home, Search, Plus, Send, Bell, Users, ThumbsUp, Menu, MoreHorizontal, Camera,
} from "lucide-react";

type FeedType = "facebook" | "instagram";

type Campaign = {
  agentName: string;
  agency: string;
  suburb: string;
  reach: string;
  leads: string;
  photo: string;
  adCopy: string;
  feedType: FeedType;
};

const campaigns: Campaign[] = [
  {
    agentName: "Sarah Chen",
    agency: "Harcourts",
    suburb: "Brighton, VIC",
    reach: "218,400",
    leads: "64",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=456&h=440&fit=crop&crop=faces&q=80",
    adCopy: "Thinking of selling in Brighton? Meet the agent who has sold more homes here than anyone this year.",
    feedType: "facebook",
  },
  {
    agentName: "Marcus Williams",
    agency: "McGrath",
    suburb: "Bondi, NSW",
    reach: "304,700",
    leads: "91",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=420&fit=crop&crop=faces&q=80",
    adCopy: "Bondi homeowners — find out what your property is worth right now. Free appraisal, no obligation.",
    feedType: "instagram",
  },
  {
    agentName: "Emma Rodriguez",
    agency: "Barry Plant",
    suburb: "St Kilda, VIC",
    reach: "187,200",
    leads: "52",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=456&h=440&fit=crop&crop=faces&q=80",
    adCopy: "St Kilda's most recognised agent. Find out what your home could sell for in today's market.",
    feedType: "facebook",
  },
  {
    agentName: "David Thompson",
    agency: "Ray White",
    suburb: "Toorak, VIC",
    reach: "261,900",
    leads: "78",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=480&h=420&fit=crop&crop=faces&q=80",
    adCopy: "If you're considering a move in Toorak, meet the agent locals trust most for results.",
    feedType: "instagram",
  },
  {
    agentName: "Jessica Park",
    agency: "LJ Hooker",
    suburb: "Manly, NSW",
    reach: "195,600",
    leads: "57",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=456&h=440&fit=crop&crop=faces&q=80",
    adCopy: "Manly homeowners — the market is moving. Get a free, no-obligation appraisal this week.",
    feedType: "facebook",
  },
  {
    agentName: "Ryan O'Brien",
    agency: "Jellis Craig",
    suburb: "South Yarra, VIC",
    reach: "242,100",
    leads: "69",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=480&h=420&fit=crop&crop=faces&q=80",
    adCopy: "South Yarra is one of Melbourne's strongest markets. I can show you exactly what your home is worth.",
    feedType: "instagram",
  },
];

const STORY_GRADIENTS = [
  "from-yellow-400 via-rose-500 to-purple-600",
  "from-blue-400 to-cyan-500",
  "from-green-400 to-emerald-600",
  "from-orange-400 to-rose-500",
];
const STORY_NAMES = ["sarah_h", "melb.prop", "ray_wh", "jane_re"];
const STORY_BG = ["bg-amber-200", "bg-cyan-200", "bg-emerald-200", "bg-rose-200"];

function FacebookFeed({ campaign }: { campaign: Campaign }) {
  return (
    <div className="bg-[#f0f2f5]">
      {/* Facebook header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-white">
        <span className="text-blue-600 font-black text-xl leading-none">f</span>
        <div className="flex items-center gap-1.5">
          {[Search, MessageCircle, Bell].map((Icon, i) => (
            <div key={i} className="w-[26px] h-[26px] bg-gray-100 rounded-full flex items-center justify-center">
              <Icon size={12} className="text-gray-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Main sponsored ad */}
      <div className="bg-white mt-[3px]">
        {/* Post header */}
        <div className="flex items-center gap-2 px-2.5 pt-2 pb-1.5">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 overflow-hidden">
            <Image src="/logo.png" alt="Tiny Agent" width={22} height={22} className="object-contain" />
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-bold text-gray-900">Tiny Agent</p>
            <p className="text-[8px] text-gray-400">Sponsored · 🌐</p>
          </div>
          <MoreHorizontal size={13} className="text-gray-400" />
        </div>

        {/* Ad copy */}
        <p className="px-2.5 pb-1.5 text-[8.5px] text-gray-700 leading-snug">{campaign.adCopy}</p>

        {/* Agent photo — no overlay badges */}
        <div className="relative overflow-hidden" style={{ height: "195px" }}>
          <div className="ken-burns absolute inset-0">
            <Image
              src={campaign.photo}
              alt={campaign.agentName}
              fill
              className="object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Play size={12} fill="white" className="text-white ml-0.5" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <p className="text-white font-bold text-[10px] leading-tight">{campaign.agentName}</p>
            <p className="text-white/70 text-[8px]">{campaign.agency} · {campaign.suburb}</p>
          </div>
        </div>

        {/* URL strip CTA — authentic Facebook style */}
        <div className="bg-gray-50 border-t border-gray-200 px-2.5 py-2 flex items-center justify-between">
          <div className="min-w-0 flex-1 mr-2">
            <p className="text-[6.5px] text-gray-400 uppercase tracking-wide">TINYAGENT.IO</p>
            <p className="text-[8.5px] font-bold text-gray-900">Free Market Appraisal</p>
          </div>
          <button className="bg-blue-600 text-white text-[7.5px] font-bold px-2.5 py-1.5 rounded-md shrink-0">
            Book Now
          </button>
        </div>

        {/* Reactions row */}
        <div className="px-2.5 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[11px]">👍</span>
            <span className="text-[11px] -ml-0.5">❤️</span>
            <span className="text-[7.5px] text-gray-500 ml-0.5">1.4k</span>
          </div>
          <span className="text-[7.5px] text-gray-400 tabular-nums">{campaign.reach} reached</span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center border-t border-gray-100">
          {[ThumbsUp, MessageCircle, Share2].map((Icon, i) => (
            <button key={i} className="flex-1 flex items-center justify-center gap-1 py-1.5 text-gray-500">
              <Icon size={9} />
              <span className="text-[7px]">{["Like", "Comment", "Share"][i]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Facebook bottom nav */}
      <div className="flex items-center justify-around px-3 pt-2 pb-1 bg-white mt-[3px] border-t border-gray-100">
        <Home size={15} className="text-blue-600" />
        <Users size={15} className="text-gray-400" />
        <div className="w-[26px] h-[26px] bg-gray-100 rounded-lg flex items-center justify-center">
          <Plus size={13} className="text-gray-600" />
        </div>
        <Bell size={15} className="text-gray-400" />
        <Menu size={15} className="text-gray-400" />
      </div>

      {/* Home indicator */}
      <div className="flex justify-center py-1.5 bg-white">
        <div className="w-14 h-[3px] bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

function InstagramFeed({ campaign }: { campaign: Campaign }) {
  return (
    <div className="bg-white">
      {/* Instagram header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        <Camera size={17} className="text-gray-900" strokeWidth={1.75} />
        <span
          className="text-[15px] font-semibold text-gray-900"
          style={{ fontFamily: "Georgia, 'Palatino Linotype', serif", fontStyle: "italic" }}
        >
          Instagram
        </span>
        <Send size={16} className="text-gray-900" strokeWidth={1.75} />
      </div>

      {/* Stories row */}
      <div className="flex gap-1.5 px-2 py-2 border-b border-gray-100">
        {/* Your story */}
        <div className="flex flex-col items-center gap-0.5 shrink-0">
          <div className="relative w-[30px] h-[30px] rounded-full bg-gray-100 border border-gray-200 overflow-visible">
            <div className="absolute -bottom-0.5 -right-0.5 w-[12px] h-[12px] bg-blue-600 rounded-full border-[1.5px] border-white flex items-center justify-center z-10">
              <Plus size={6} className="text-white" strokeWidth={3} />
            </div>
          </div>
          <span className="text-[5.5px] text-gray-500 truncate w-[32px] text-center">Your Story</span>
        </div>
        {/* Other stories with gradient rings */}
        {STORY_GRADIENTS.map((grad, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5 shrink-0">
            <div className={`w-[30px] h-[30px] rounded-full p-[1.5px] bg-gradient-to-tr ${grad}`}>
              <div className={`w-full h-full rounded-full ${STORY_BG[i]} border-[1.5px] border-white`} />
            </div>
            <span className="text-[5.5px] text-gray-500 truncate w-[32px] text-center">{STORY_NAMES[i]}</span>
          </div>
        ))}
      </div>

      {/* Sponsored post */}
      <div>
        {/* Post header */}
        <div className="flex items-center gap-2 px-2.5 py-2">
          <div className="w-[28px] h-[28px] rounded-full overflow-hidden bg-blue-600 flex items-center justify-center shrink-0">
            <Image src="/logo.png" alt="Tiny Agent" width={20} height={20} className="object-contain" />
          </div>
          <div className="flex-1">
            <p className="text-[8.5px] font-bold text-gray-900">tinyagent.io</p>
            <p className="text-[7.5px] text-gray-400">Sponsored</p>
          </div>
          <MoreHorizontal size={12} className="text-gray-500" />
        </div>

        {/* Agent photo — no overlays on the photo itself */}
        <div className="relative overflow-hidden" style={{ height: "215px" }}>
          <div className="ken-burns absolute inset-0">
            <Image
              src={campaign.photo}
              alt={campaign.agentName}
              fill
              className="object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-2.5">
            <p className="text-white font-bold text-[10px]">{campaign.agentName}</p>
            <p className="text-white/70 text-[8px]">{campaign.agency} · {campaign.suburb}</p>
          </div>
        </div>

        {/* Full-width CTA card — authentic Instagram ad style */}
        <div className="mx-2 my-1.5 border border-gray-200 rounded-lg flex items-center justify-between px-2.5 py-1.5 bg-gray-50">
          <div className="min-w-0 flex-1 mr-2">
            <p className="text-[6px] text-gray-400 uppercase tracking-wide">TINYAGENT.IO</p>
            <p className="text-[8.5px] font-bold text-gray-900">Free Market Appraisal</p>
          </div>
          <button className="bg-blue-600 text-white text-[7.5px] font-bold px-2.5 py-1.5 rounded-md shrink-0">
            Book Now
          </button>
        </div>

        {/* Engagement icons */}
        <div className="flex items-center gap-2.5 px-2.5 pb-1.5">
          <Heart size={13} className="text-gray-900" />
          <MessageCircle size={13} className="text-gray-900" />
          <Send size={13} className="text-gray-900" />
          <Bookmark size={13} className="text-gray-900 ml-auto" />
        </div>

        {/* Likes + caption */}
        <div className="px-2.5 pb-2">
          <p className="text-[7.5px] font-bold text-gray-900">{campaign.leads},382 likes</p>
          <p className="text-[7px] text-gray-700 mt-0.5 leading-snug">
            <span className="font-bold">tinyagent.io </span>
            {campaign.adCopy.length > 55 ? campaign.adCopy.slice(0, 55) + "…" : campaign.adCopy}
          </p>
          <p className="text-[6.5px] text-gray-400 mt-0.5">View all {campaign.leads} comments</p>
          <p className="text-[6px] text-gray-300 mt-0.5 uppercase tracking-wide">2 hours ago</p>
        </div>
      </div>

      {/* Instagram bottom nav */}
      <div className="flex items-center justify-around px-4 pt-2 pb-1 border-t border-gray-100">
        <Home size={15} className="text-gray-900" />
        <Search size={15} className="text-gray-500" />
        <div className="w-[22px] h-[22px] border-[1.5px] border-gray-900 rounded-[5px] flex items-center justify-center">
          <Plus size={11} className="text-gray-900" strokeWidth={2.5} />
        </div>
        <Heart size={15} className="text-gray-500" />
        <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-amber-400 to-rose-500 border border-white ring-1 ring-gray-200" />
      </div>

      {/* Home indicator */}
      <div className="flex justify-center py-1.5">
        <div className="w-14 h-[3px] bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}

function PhoneCard({ campaign }: { campaign: Campaign }) {
  const isFacebook = campaign.feedType === "facebook";

  return (
    <div className="w-[min(250px,calc(100vw-48px))] sm:w-[260px] lg:w-[270px] flex-shrink-0 flex flex-col items-center">
      {/* Phone with physical side buttons */}
      <div className="relative w-full">
        {/* Silent switch */}
        <div className="absolute -left-[3px] top-[62px] w-[3px] h-[20px] bg-[#2a2a2a] rounded-l-sm z-10" />
        {/* Volume up */}
        <div className="absolute -left-[3px] top-[90px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-sm z-10" />
        {/* Volume down */}
        <div className="absolute -left-[3px] top-[128px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-sm z-10" />
        {/* Power */}
        <div className="absolute -right-[3px] top-[98px] w-[3px] h-[44px] bg-[#2a2a2a] rounded-r-sm z-10" />

        {/* Main phone frame */}
        <div className="relative w-full bg-[#0d0d0d] rounded-[38px] border-[5px] border-[#1c1c1c] shadow-2xl overflow-hidden">
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#0d0d0d] rounded-full z-10" />
          <div className="pt-7">
            {isFacebook ? (
              <FacebookFeed campaign={campaign} />
            ) : (
              <InstagramFeed campaign={campaign} />
            )}
          </div>
        </div>
      </div>

      {/* Stats badge */}
      <div className="mt-4 bg-[#111827] border border-white/10 rounded-xl px-4 py-3 w-full">
        <div className="flex items-center gap-2 mb-2.5">
          {isFacebook ? (
            <span className="text-[9px] font-semibold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">Facebook</span>
          ) : (
            <span className="text-[9px] font-semibold text-pink-400 bg-pink-400/10 px-2 py-0.5 rounded-full">Instagram</span>
          )}
          <span className="text-[9px] text-gray-500 truncate">{campaign.suburb}</span>
        </div>
        <div className="flex justify-around items-center">
          <div className="text-center">
            <p className="text-amber-400 font-bold text-xl tabular-nums">{campaign.leads}</p>
            <p className="text-gray-400 text-[10px]">leads</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-blue-400 font-bold text-sm tabular-nums">{campaign.reach}</p>
            <p className="text-gray-400 text-[10px]">reached</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdShowcase() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visible = 3;
  const total = campaigns.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next, isPaused]);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visible; i++) {
      items.push(campaigns[(current + i) % total]);
    }
    return items;
  };

  return (
    <section id="showcase" className="py-24 lg:py-32 relative overflow-hidden bg-[#070b16]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4"
            >
              Campaign Showcase
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Your ad. <span className="gradient-text">Their feed.</span>
              <br />Every suburb.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-gray-400 text-lg mt-4 max-w-xl"
            >
              Every campaign runs from the Tiny Agent page — delivering your listing agent directly into homeowners&apos; feeds across Australia.
            </motion.p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {campaigns.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-blue-500" : "w-1.5 bg-white/20"}`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="flex gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              {getVisible().map((campaign, i) => (
                <motion.div
                  key={`${campaign.agentName}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={i === 2 ? "hidden lg:block" : i === 1 ? "hidden sm:block" : ""}
                >
                  <PhoneCard campaign={campaign} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 text-xs mt-8"
        >
          All campaigns target homeowners in the agent&apos;s specified suburb. Agent names and campaign data shown are illustrative examples.
        </motion.p>
      </div>
    </section>
  );
}
