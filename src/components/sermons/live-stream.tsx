"use client";

import { useState, useEffect, useCallback } from "react";

/** Hardcoded live stream URL — set to empty string when no live stream is active */
const LIVE_STREAM_URL = "";

/** Next service: Sunday 9:00 AM WAT (UTC+1) */
const SERVICE_DAY = 0; // Sunday
const SERVICE_HOUR = 9; // 9:00 AM
const WAT_OFFSET = 1; // WAT = UTC+1

function getNextServiceDate(): Date {
  const now = new Date();
  // Convert current time to WAT
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  const watNow = new Date(utcMs + WAT_OFFSET * 3600000);

  const watDay = watNow.getDay();
  let daysUntilSunday = SERVICE_DAY - watDay;
  if (daysUntilSunday < 0) daysUntilSunday += 7;
  if (daysUntilSunday === 0 && watNow.getHours() >= SERVICE_HOUR + 2) {
    // Past service window today, go to next Sunday
    daysUntilSunday = 7;
  }

  const nextService = new Date(watNow);
  nextService.setDate(nextService.getDate() + daysUntilSunday);
  nextService.setHours(SERVICE_HOUR, 0, 0, 0);

  // Convert back from WAT to local time
  const nextServiceUtcMs =
    nextService.getTime() -
    WAT_OFFSET * 3600000 -
    now.getTimezoneOffset() * 60000 +
    now.getTimezoneOffset() * 60000;
  // Return the WAT-based target as a UTC timestamp
  return new Date(nextServiceUtcMs - now.getTimezoneOffset() * 60000);
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function computeTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60000;
  const watNow = utcNow + WAT_OFFSET * 3600000;

  // Build target in absolute ms using WAT
  const diff = Math.max(0, target.getTime() - watNow);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-2xl md:text-4xl text-gold tabular-nums font-semibold">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] tracking-[0.2em] uppercase text-ivory/40 mt-1">
        {label}
      </span>
    </div>
  );
}

function TimeSeparator() {
  return (
    <span className="text-gold/30 text-2xl md:text-4xl font-light mx-1 md:mx-2">
      :
    </span>
  );
}

export function LiveStream() {
  const isLive = !!LIVE_STREAM_URL;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  const nextService = useCallback(() => getNextServiceDate(), []);

  useEffect(() => {
    setMounted(true);
    const target = nextService();
    setTimeLeft(computeTimeLeft(target));

    const interval = setInterval(() => {
      setTimeLeft(computeTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [nextService]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {isLive ? (
          /* ---- LIVE MODE ---- */
          <div className="space-y-6">
            {/* LIVE badge */}
            <div className="flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" />
              </span>
              <span className="font-mono text-sm tracking-[0.3em] uppercase text-red-400 font-semibold">
                Live Now
              </span>
            </div>

            {/* Embed */}
            <div className="relative aspect-video max-w-4xl mx-auto border border-gold/20 bg-navy/50 overflow-hidden">
              <iframe
                src={LIVE_STREAM_URL}
                title="JCIM Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        ) : (
          /* ---- COUNTDOWN MODE ---- */
          <div className="text-center space-y-8">
            {/* Cross icon */}
            <div className="flex justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gold/30"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="4" y1="8" x2="20" y2="8" />
              </svg>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-warm-white font-semibold">
                Watch Live This Sunday
              </h2>
              <p className="mt-2 text-sm text-ivory/40 font-[family-name:var(--font-lora)] italic">
                Sunday Service at 9:00 AM WAT
              </p>
            </div>

            {/* Countdown */}
            <div className="inline-flex items-center justify-center gap-1 md:gap-2 border border-gold/15 bg-navy/40 px-6 md:px-10 py-5 md:py-6">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <TimeSeparator />
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <TimeSeparator />
              <CountdownUnit value={timeLeft.minutes} label="Min" />
              <TimeSeparator />
              <CountdownUnit value={timeLeft.seconds} label="Sec" />
            </div>

            <p className="text-xs text-ivory/30 tracking-wide">
              Join us for worship, the Word, and fellowship
            </p>
          </div>
        )}
      </div>

      {/* Bottom border accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
}
