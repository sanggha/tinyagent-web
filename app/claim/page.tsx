import { Suspense } from "react";
import ClaimForm from "@/components/ClaimForm";

export const metadata = {
  title: "Claim Your Suburb — Tiny Agent",
  description: "Lock in your suburb and get your campaign live within 24 hours.",
};

export default function ClaimPage() {
  return (
    <Suspense>
      <ClaimForm />
    </Suspense>
  );
}
