"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import { type UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
  type?: "text" | "email" | "tel" | "url" | "number" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  className?: string;
  children?: React.ReactNode; // for select options
  rows?: number;
}

export function FormField({
  label,
  error,
  registration,
  type = "text",
  placeholder,
  required,
  className,
  children,
  rows = 4,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  const inputClasses = cn(
    "w-full bg-navy-deep/80 border border-gold/15 px-4 py-3 text-sm text-warm-white placeholder:text-ivory/30",
    "focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300",
    error && "border-red-500/50 focus:border-red-500/80 focus:ring-red-500/20"
  );

  const ariaProps = {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  } as const;

  return (
    <div className={cn("space-y-1.5", className)}>
      <label
        htmlFor={id}
        className="block text-xs tracking-wider uppercase text-ivory/60 font-mono"
      >
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          {...registration}
          placeholder={placeholder}
          rows={rows}
          className={cn(inputClasses, "resize-none")}
          {...ariaProps}
        />
      ) : type === "select" ? (
        <select id={id} {...registration} className={inputClasses} {...ariaProps}>
          {placeholder && (
            <option value="" className="bg-navy-deep">
              {placeholder}
            </option>
          )}
          {children}
        </select>
      ) : (
        <input
          id={id}
          {...registration}
          type={type}
          placeholder={placeholder}
          className={inputClasses}
          {...ariaProps}
        />
      )}

      {error && (
        <p id={errorId} className="text-xs text-red-400/80 mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
