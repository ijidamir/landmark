import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, Article } from "@/app/config/insights";
import { ROUTES } from "@/app/config/routes";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article: Article | undefined = ARTICLES.find(
    (item) => item.slug === resolvedParams.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-12 sm:py-20">
      <div className="container-site max-w-4xl space-y-8">
        
        {/* Back Link */}
        <Button asChild variant="ghost" size="sm" className="text-xs gap-2 p-0 hover:bg-transparent text-muted-foreground hover:text-foreground">
          <Link href={ROUTES.INSIGHTS}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>
        </Button>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {article.category}
          </span>

          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
            {article.title}
          </h1>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground border-y border-border py-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              <span className="font-medium text-foreground">{article.author.name}</span>
              <span className="text-slate-500">({article.author.role})</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border shadow-sm bg-muted">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Summary Box */}
        <div className="p-6 bg-card border-l-4 border-accent rounded-r-xl text-foreground font-serif italic text-base sm:text-lg leading-relaxed shadow-sm">
          "{article.summary}"
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {article.content.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </main>
  );
}