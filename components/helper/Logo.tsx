import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // standard shadcn/ui helper (clsx + tailwind-merge)

interface LogoProps {
  /**
   * Defines the color scheme:
   * - 'default': Gold mark + Navy text (for light backgrounds)
   * - 'light': Gold mark + White text (for dark headers/footers)
   * - 'monochrome': Follows parent text color
   */
  variant?: "default" | "light" | "monochrome";
  /**
   * Logo sizing preset
   */
  size?: "sm" | "md" | "lg";
  /**
   * Whether to display the text alongside the icon mark
   */
  showText?: boolean;
  /**
   * Optional custom classes
   */
  className?: string;
  /**
   * Make it clickable to home page
   */
  href?: string;
}

export function Logo({
  variant = "default",
  size = "md",
  showText = true,
  className,
  href = "/",
}: LogoProps) {
  // Sizing mapping
  const sizeMap = {
    sm: {
      icon: "w-7 h-7",
      title: "text-xs tracking-[0.18em]",
      subtitle: "text-[9px] tracking-[0.28em]",
      gap: "gap-2",
    },
    md: {
      icon: "w-9 h-9",
      title: "text-sm tracking-[0.2em]",
      subtitle: "text-[10px] tracking-[0.3em]",
      gap: "gap-2.5",
    },
    lg: {
      icon: "w-12 h-12",
      title: "text-lg tracking-[0.22em]",
      subtitle: "text-xs tracking-[0.32em]",
      gap: "gap-3",
    },
  };

  const currentSize = sizeMap[size];

  // Color mapping
  const markColor =
    variant === "monochrome"
      ? "text-current"
      : "text-[#C5A059]"; // Signature Gold color

  const titleColor =
    variant === "light"
      ? "text-white"
      : variant === "monochrome"
      ? "text-current"
      : "text-[#0F172A]"; // Deep Slate Navy

  const subtitleColor =
    variant === "light"
      ? "text-slate-300"
      : variant === "monochrome"
      ? "text-current opacity-80"
      : "text-[#1E293B]";

  const LogoContent = (
    <div className={cn("inline-flex items-center select-none", currentSize.gap, className)}>
      {/* Geometric Architectural Monogram Icon */}
      <div className={cn("relative flex items-center justify-center shrink-0", currentSize.icon)}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer L Frame */}
          <path
            d="M8 8V32H32"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="square"
            className={markColor}
          />
          {/* Inner Intersecting N Element */}
          <path
            d="M16 14V26L26 14V26"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
            strokeLinejoin="miter"
            className={markColor}
          />
          {/* Accent Gold Square Dot */}
          <rect
            x="28"
            y="8"
            width="4"
            height="4"
            fill="currentColor"
            className={markColor}
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={cn(
              "font-semibold uppercase tracking-wider font-serif",
              currentSize.title,
              titleColor
            )}
          >
            Landmark
          </span>
          <span
            className={cn(
              "font-medium uppercase mt-0.5",
              currentSize.subtitle,
              subtitleColor
            )}
          >
            Nexus
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
}