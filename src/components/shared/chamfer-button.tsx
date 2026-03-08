"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ChamferButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function ChamferButton({
  href,
  onClick,
  children,
  variant = "gold",
  size = "md",
  className,
  type = "button",
  disabled,
}: ChamferButtonProps) {
  const baseStyles =
    "chamfer-clip inline-flex items-center justify-center font-semibold tracking-wider uppercase transition-all duration-300";

  const variants = {
    gold: "bg-gold text-dark-base hover:bg-gold-light",
    outline:
      "bg-transparent border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold",
    ghost: "bg-gold/5 text-gold hover:bg-gold/15",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const styles = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
