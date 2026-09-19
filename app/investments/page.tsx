import { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/app/config/routes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ShieldCheck, Landmark, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Investment | Landmark Nexus",
  description: "Turn real estate into scalable opportunity with strategic advisory and high-yield property assets across Nigeria.",
};

const STRATEGIES = [
  {
    icon: TrendingUp,
    title: "Capital Appreciation",
    yield: "+12%",
    description: "Targeted acquisitions in rapidly expanding urban corridors like Abuja CBD, Victoria Island, and regional trade hubs.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Mitigation",
    yield: "100%",
    description: "Rigorous legal vetting, title verification, and land registry clearance before any asset enters our investor catalog.",
  },
  {
    icon: Landmark,
    title: "Commercial Yields",
    yield: "High ROI",
    description: "Long-term lease structures and high-occupancy residential developments designed for consistent rental cash flows.",
  },
];

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#08111f] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="container-site space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
            Investment Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Turn Real Estate into Opportunity
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Explore carefully selected real estate opportunities and discover structured ways to participate in the property market with greater clarity and confidence.
          </p>
        </div>
      </section>

      {/* Strategies Grid Section */}
      <section className="section-padding bg-background flex-1 pb-20">
        <div className="container-site space-y-16">
          
          {/* Investment Value Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STRATEGIES.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-card border-border p-6 sm:p-8 space-y-4 shadow-sm hover:border-accent/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif font-bold text-xl text-accent">{item.yield}</span>
                  </div>

                  <CardHeader className="p-0">
                    <CardTitle className="font-serif font-bold text-xl text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    {item.description}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Investment Advisory Callout Box */}
          <div className="p-8 sm:p-12 bg-card border border-border rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-accent">
                <BarChart3 className="w-4 h-4" />
                <span>Custom Portfolio Advisory</span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">
                Looking for Institutional or Private Wealth Advisory?
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our investment team designs custom acquisition portfolios tailored to your capital targets, risk tolerance, and time horizon.
              </p>
            </div>

            <Button asChild className="bg-accent hover:bg-accent/90 text-slate-950 font-semibold px-8 py-6 text-xs uppercase tracking-wider shrink-0">
              <Link href={ROUTES.CONTACT} className="flex items-center gap-2">
                <span>Request Advisory Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </main>
  );
}