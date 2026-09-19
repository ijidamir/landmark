"use client";

import React from "react";
import Link from "next/link";
import { ROUTES } from "@/app/config/routes";
import { ArrowUp, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08111f] text-slate-300 border-t border-white/10 pt-16 pb-8">
      <div className="container-site space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Primary Locations */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={ROUTES.HOME} className="inline-block group">
              <div className="font-serif text-xl font-bold tracking-wider text-white uppercase">
                Landmark <span className="text-accent font-sans text-xs block tracking-[0.3em] group-hover:text-accent/80 transition-colors">Nexus</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Real estate and property solutions built on integrity. Connecting clients with premium property and investment opportunities across Nigeria.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Abuja • Lagos • Yola</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                <a href="mailto:info@landmarknexus.com" className="hover:text-accent transition-colors">
                  info@landmarknexus.com
                </a>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href={ROUTES.PROPERTIES.LIST} className="hover:text-accent transition-colors">
                  Featured Properties
                </Link>
              </li>
              <li>
                <Link href={ROUTES.INVESTMENTS} className="hover:text-accent transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link href={ROUTES.INSIGHTS.LIST} className="hover:text-accent transition-colors">
                  Landmark Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href={ROUTES.ABOUT} className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICES} className="hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CONTACT} className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href={ROUTES.LEGAL.PRIVACY} className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={ROUTES.LEGAL.TERMS} className="hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href={ROUTES.LEGAL.DISCLAIMER} className="hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Landmark Nexus Limited. All rights reserved.</p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-xs text-slate-400 hover:text-accent hover:bg-white/5 gap-2 px-3 h-8"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}