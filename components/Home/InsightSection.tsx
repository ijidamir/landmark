"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/app/config/routes";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { articles } from "@/app/home/data";
import { ARTICLES } from "@/app/config/insights";


export function InsightsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-site space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em]   font-semibold text-accent">
              Insights
            </span>
            <h2 className="text-3xl pt-3 m sm:text-4xl font-serif font-bold text-foreground">
              The Landmark Journal
            </h2>
          </div>
          <Link
            href={ROUTES.INSIGHTS.LIST}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-foreground hover:text-accent transition-colors"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <Link key={article.slug} href={ROUTES.INSIGHTS.DETAIL(article.slug)}>
              <Card className="group overflow-hidden border-border hover:border-accent/50 transition-all h-full bg-card">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-5 space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {article.category}
                  </span>
                  <CardTitle className="font-serif font-bold text-base text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-[11px] text-muted-foreground pt-1">
                    {article.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}