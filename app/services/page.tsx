import { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/app/config/routes";
import { SERVICES } from "@/app/config/services";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Landmark Nexus",
  description:
    "Explore our real estate solutions—Property Sales, Investment Advisory, Strategic Advisory, and Property Management across Nigeria.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Hero Section */}
      <section className="bg-[#08111f] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="container-site space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
            Our Expertise
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Real Estate Solutions <br />
            <span className="text-accent italic font-normal">
              Designed Around Your Goals.
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            From individual home acquisition to institutional investment advisory, Landmark Nexus offers end-to-end real estate services rooted in market intelligence and integrity.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-background pb-20 flex-1">
        <div className="container-site space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="bg-card border-border hover:border-accent/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <CardHeader className="space-y-4 p-6 sm:p-8">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-serif font-bold text-2xl text-foreground">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {service.fullDescription}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
                    <div className="space-y-2 border-t border-border/60 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
                        Key Offerings
                      </span>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs sm:text-sm text-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between border-border hover:border-accent hover:bg-accent/5 text-xs uppercase tracking-wider font-semibold py-5"
                    >
                      <Link href={ROUTES.CONTACT}>
                        <span>Consult on {service.title}</span>
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}