"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const STEPS = [
  { num: "01", title: "Discover", text: "Tell us what you're looking for." },
  { num: "02", title: "Consult", text: "Speak with our team for guidance." },
  { num: "03", title: "Inspect", text: "Visit and evaluate the property." },
  { num: "04", title: "Decide", text: "Review and make an informed decision." },
  { num: "05", title: "Acquire", text: "Complete the process with our support." },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div className="container-site space-y-12">
        <div className="space-y-2">
          <span className="text-xs ml-1  uppercase tracking-[0.25em] font-semibold text-accent">
            Our Process
          </span>
          <h2 className="text-3xl mt-2 sm:text-4xl font-serif font-bold text-foreground">
            A simpler way to move into real estate.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((step) => (
            <Card
              key={step.num}
              className="bg-card border-border hover:border-accent transition-colors group"
            >
              <CardHeader className="p-6 pb-2 space-y-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold flex items-center justify-center">
                  {step.num}
                </div>
                <CardTitle className="font-serif font-bold text-base text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}