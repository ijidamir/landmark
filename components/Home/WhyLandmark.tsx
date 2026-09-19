"use client";

import React from "react";
import { BRAND_VALUES } from "@/app/config/values";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function WhyLandmark() {
  return (
    <section className="section-padding bg-[#08111f] text-white">
      <div className="container-site space-y-12">
        <div className="max-w-xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
            Why Landmark
          </span>
          <h2 className="text-3xl py-3 sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            Built on knowledge. <br />
            Driven by integrity. <br />
            <span className="text-accent italic font-normal">Focused on value.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_VALUES.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.num}
                className="bg-slate-900/40 border-white/10 text-white hover:border-accent/50 transition-colors group"
              >
                <CardHeader className="p-6 pb-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-lg text-accent group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-accent font-bold">
                      {item.num}
                    </span>
                  </div>
                  <CardTitle className="font-serif font-bold text-lg text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}