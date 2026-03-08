import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4 py-2", className)}
    >
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold/40" />
      <div className="w-2 h-2 rotate-45 border border-gold/40" />
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
