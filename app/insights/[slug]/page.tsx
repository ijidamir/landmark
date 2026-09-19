import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/app/config/insights";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

interface SingleInsightProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes at build time for high performance
export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function SingleInsightPage({ params }: SingleInsightProps) {
  const { slug } = await params;
  
  // Find article by matching slug
  const article = ARTICLES.find((item) => item.slug === slug);

  // Trigger Next.js 404 page if no matching slug is found
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-12 sm:py-20">
      <div className="container-site max-w-4xl space-y-8">
        {/* Back Link */}
        <Button
          asChild
          variant="ghost"
          className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground gap-2 p-0 h-auto"
        >
          <Link href="/insights">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>
        </Button>

        {/* Header Metadata */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-semibold text-accent uppercase tracking-wider">
            <span>{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-foreground leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between border-y border-border/80 py-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">{article.author.name}</p>
                <p className="text-[11px] text-muted-foreground">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Main Banner Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-muted border border-border shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <article className="space-y-6 pt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-light">
          <p className="text-foreground text-base sm:text-lg font-normal leading-relaxed italic border-l-2 border-accent pl-4 py-1">
            {article.summary}
          </p>

          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        {/* Bottom Actions */}
        <div className="p-6 bg-card border border-border rounded-xl flex items-center justify-between mt-12">
          <span className="text-xs font-semibold text-foreground">Enjoyed this analysis?</span>
          <Button variant="outline" size="sm" className="text-xs gap-2">
            <Share2 className="w-3.5 h-3.5 text-accent" />
            <span>Share Article</span>
          </Button>
        </div>
      </div>
    </main>
  );
}