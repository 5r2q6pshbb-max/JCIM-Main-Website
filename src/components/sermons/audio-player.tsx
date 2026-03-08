"use client";

import { useAudioPlayer } from "@/hooks/use-audio-player";

interface AudioPlayerProps {
  audioUrl: string;
  title: string;
  speaker: string;
}

const SPEED_OPTIONS = [0.5, 1, 1.5, 2] as const;

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

export function AudioPlayer({ audioUrl, title, speaker }: AudioPlayerProps) {
  const {
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    audioRef,
    toggle,
    seek,
    setRate,
  } = useAudioPlayer(audioUrl);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    seek(percent * duration);
  };

  const cycleSpeed = () => {
    const currentIdx = SPEED_OPTIONS.indexOf(
      playbackRate as (typeof SPEED_OPTIONS)[number]
    );
    const nextIdx = (currentIdx + 1) % SPEED_OPTIONS.length;
    setRate(SPEED_OPTIONS[nextIdx]);
  };

  return (
    <div className="bg-navy-deep/60 border border-gold/10 px-3 py-2.5 space-y-2">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Top row: play + info + speed */}
      <div className="flex items-center gap-3">
        {/* Play / Pause button */}
        <button
          onClick={toggle}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:border-gold/60 hover:bg-gold/10 transition-all duration-300"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg
              className="w-3.5 h-3.5 text-gold"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 text-gold ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Title & Speaker */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-warm-white truncate leading-tight">
            {title}
          </p>
          <p className="text-[10px] text-ivory/40 truncate">{speaker}</p>
        </div>

        {/* Speed button */}
        <button
          onClick={cycleSpeed}
          className="flex-shrink-0 text-[10px] font-mono tracking-wider text-gold/60 hover:text-gold border border-gold/15 hover:border-gold/30 px-1.5 py-0.5 transition-colors duration-300"
        >
          {playbackRate}x
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-ivory/30 tabular-nums w-8 text-right">
          {formatTime(currentTime)}
        </span>

        <div
          className="flex-1 h-1 bg-navy/60 cursor-pointer group relative"
          onClick={handleProgressClick}
        >
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/60 to-gold transition-all"
            style={{ width: `${progress}%` }}
          />
          {/* Hover hitzone */}
          <div className="absolute inset-0 -top-1 -bottom-1" />
        </div>

        <span className="text-[10px] font-mono text-ivory/30 tabular-nums w-8">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}
