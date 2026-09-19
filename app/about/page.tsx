import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/app/config/routes";
import { BRAND_VALUES } from "@/app/config/values";
import { LEADERSHIP_TEAM } from "@/app/config/team";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Landmark Nexus",
  description:
    "Learn about Landmark Nexus—our vision, leadership, and commitment to providing exceptional real estate solutions across Nigeria.",
};

const MILESTONES = [
  { metric: "120+", label: "Verified Property Assets" },
  { metric: "3+", label: "Key Urban Hubs (Abuja, Lagos, Yola)" },
  { metric: "100%", label: "Client Satisfaction & Integrity" },
  { metric: "+12%", label: "Average Annual Portfolio Growth" },
];

// Reliable inline LinkedIn icon component
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Banner Section */}
      <section className="relative bg-[#08111f] text-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="container-site relative z-10 space-y-6 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
            About Us
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            More than property. <br />
            <span className="text-accent italic font-normal">We build pathways</span> to opportunity.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            Landmark Nexus provides real estate solutions designed to help individuals, businesses, and investors make informed property decisions with absolute confidence.
          </p>
        </div>
      </section>

      {/* Story & Brand Purpose */}
      <section className="section-padding bg-background">
        <div className="container-site space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Stack */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Landmark Nexus Architecture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-border text-white p-6 rounded-xl hidden sm:block max-w-xs shadow-2xl">
                <div className="text-accent font-serif font-bold text-2xl">Abuja • Lagos • Yola</div>
                <p className="text-xs text-slate-400 mt-1">
                  Connecting clients to strategic real estate hubs across Nigeria.
                </p>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
                Redefining Real Estate Excellence across Nigeria
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  At Landmark Nexus, we bridge the gap between aspirational real estate vision and practical investment outcome. Founded with a commitment to integrity and strategic clarity, we curate high-value residential, commercial, and investment assets.
                </p>
                <p>
                  Whether you are seeking a modern family estate, establishing a business footprint, or expanding an institutional investment portfolio, our team provides trusted advisory at every step.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-accent hover:bg-accent/90 text-slate-950 font-semibold px-6 py-5 text-xs uppercase tracking-wider"
                >
                  <Link href={ROUTES.PROPERTIES.LIST} className="flex items-center gap-2">
                    <span>Explore Our Properties</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="px-6 py-5 text-xs uppercase tracking-wider border-border hover:bg-secondary"
                >
                  <Link href={ROUTES.CONTACT}>Speak with an Expert</Link>
                </Button>
              </div>
            </div>

          </div>

          {/* Metrics Counter Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
            {MILESTONES.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground">
                  {item.metric}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-secondary/40 border-y border-border">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Mission */}
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="space-y-3 p-6 sm:p-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Target className="w-5 h-5" />
              </div>
              <CardTitle className="font-serif font-bold text-2xl text-foreground">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 text-sm text-muted-foreground leading-relaxed">
              To connect people and institutions with exceptional property opportunities through trusted expertise, strategic market insight, and an unyielding commitment to long-term value creation.
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="space-y-3 p-6 sm:p-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Eye className="w-5 h-5" />
              </div>
              <CardTitle className="font-serif font-bold text-2xl text-foreground">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0 text-sm text-muted-foreground leading-relaxed">
              To be West Africa's premier real estate nexus—recognized for transforming property landscapes, fostering transparent investor confidence, and building lasting legacies.
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-[#08111f] text-white">
        <div className="container-site space-y-12">
          <div className="max-w-xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
              Built on Knowledge. Driven by Integrity.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="p-6 bg-slate-900/60 border border-white/10 rounded-xl space-y-4 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-lg text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-accent font-bold">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding bg-background">
        <div className="container-site space-y-12">
          <div className="max-w-xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Meet the Team behind Landmark Nexus
            </h2>
            <p className="text-sm text-muted-foreground">
              Guided by experienced real estate executives and dedicated property advisors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-xl border border-border overflow-hidden group hover:border-accent/50 transition-all shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-xs text-accent font-medium mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Social / Contact Links */}
                  <div className="pt-2 flex items-center gap-3 text-muted-foreground border-t border-border/60">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors p-1"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-accent transition-colors p-1"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary/60 border-t border-border py-16">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Ready to make your next move?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Whether you're buying, investing, or seeking expert advisory, Landmark Nexus is ready to help.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-slate-950 font-semibold px-6 py-5 text-xs uppercase tracking-wider"
            >
              <Link href={ROUTES.CONTACT}>Contact Us Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-6 py-5 text-xs uppercase tracking-wider border-border"
            >
              <Link href={ROUTES.SERVICES}>Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}