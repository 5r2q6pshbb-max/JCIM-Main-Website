"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

function calculateTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className={cn("flex gap-2 md:gap-3", className)}>
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center border border-gold/20 bg-navy-deep/60 px-3 py-2 min-w-[52px]"
        >
          <span className="font-mono text-lg md:text-xl font-bold text-gold tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] tracking-widest uppercase text-ivory/40 mt-0.5">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
