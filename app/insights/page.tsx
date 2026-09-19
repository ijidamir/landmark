import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "@/app/config/insights";
import { Clock, ArrowRight } from "lucide-react";

export default function InsightsListPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 sm:py-20">
      <div className="container-site space-y-12">
        {/* Page Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] py-3 font-semibold text-accent">
            Insights & Research
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-foreground">
            The Landmark Journal
          </h1>
          <p className="text-sm text-muted-foreground">
            Expert market analysis, legal guidance, and real estate investment strategies.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all shadow-sm flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-accent uppercase tracking-wider">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1 text-muted-foreground font-normal">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-lg text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-foreground group-hover:text-accent transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}