"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/app/config/navigation";

import { Button } from "@/components/ui/button"; // shadcn button
import { Logo } from "../helper/Logo";

interface HeaderProps {
  isMobileOpen: boolean;
  onToggleMobile: () => void;
}

export function Header({ isMobileOpen, onToggleMobile }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Logo variant="light" size="md"/>

        {/* Desktop Navigation Links (Hidden on Mobile & Tablet) */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-[#C5A059] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button (Hidden on Mobile & Tablet) */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            className="bg-[#C5A059] hover:bg-[#b08d49] text-slate-950 font-semibold px-6"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Hamburger / Close Icon Toggle Button (Visible ONLY on Mobile & Tablet) */}
        <button
          onClick={onToggleMobile}
          type="button"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          className="lg:hidden p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6 text-[#C5A059]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

      </div>
    </header>
  );
}