"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, Mail } from "lucide-react";
import { NAV_LINKS } from "@/app/config/navigation";
import { Logo } from "../helper/Logo";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Prevent background scroll when mobile sidebar is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Dark Overlay Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Slide-out Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-slate-900 border-l border-slate-800 text-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Section: Header & Close Button */}
        <div>
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <Logo variant="light" size="sm" />
            <button
              onClick={onClose}
              type="button"
              aria-label="Close navigation"
              className="p-2 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6 text-[#C5A059]" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="p-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose} // Closes sidebar upon clicking a link
                className="block py-3 px-4 text-base font-medium text-slate-200 hover:text-[#C5A059] hover:bg-slate-800/60 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section: CTA & Quick Contact Info */}
        <div className="p-6 border-t border-slate-800 space-y-6 bg-slate-950/40">
          <Button
            asChild
            onClick={onClose}
            className="w-full bg-[#C5A059] hover:bg-[#b08d49] text-slate-950 font-semibold py-6 text-base"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>+234 000 000 0000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#C5A059]" />
              <span>info@landmarknexus.com</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}