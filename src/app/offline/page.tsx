"use client";

import { ChamferButton } from "@/components/shared/chamfer-button";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0F0F1A] px-6 text-center">
      {/* Gold cross icon (pure CSS) */}
      <div className="relative mb-10 h-28 w-28">
        {/* Vertical beam */}
        <div className="absolute left-1/2 top-1/2 h-24 w-5 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[#C7A34F]" />
        {/* Horizontal beam */}
        <div className="absolute left-1/2 top-[36%] h-5 w-16 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[#C7A34F]" />
      </div>

      <h1 className="mb-4 font-[family-name:var(--font-playfair)] text-4xl font-bold tracking-tight text-[#E8D5B7] md:text-5xl">
        You&apos;re Offline
      </h1>

      <p className="mb-10 max-w-md font-[family-name:var(--font-inter)] text-base leading-relaxed text-[#E8D5B7]/70">
        It looks like you&apos;ve lost your internet connection. Please check
        your connection and try again.
      </p>

      <ChamferButton
        variant="gold"
        size="md"
        onClick={() => window.location.reload()}
      >
        Try Again
      </ChamferButton>
    </div>
  );
}
