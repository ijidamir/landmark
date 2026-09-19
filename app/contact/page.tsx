"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const OFFICES = [
  {
    city: "Abuja (Headquarters)",
    address: "Central Business District, Abuja, FCT, Nigeria",
    phone: "+234 000 000 0000",
    email: "thomasijidamir@gmail.com",
  },
  {
    city: "Lagos Office",
    address: "Victoria Island, Lagos State, Nigeria",
    phone: "+234 000 000 0000",
    email: "thomasijidamir@gmail.com",
  },
  {
    city: "Yola Branch",
    address: "Jimeta Industrial Layout, Yola, Adamawa State, Nigeria",
    phone: "+234 000 000 0000",
    email: "thomasijidamir@gmail.com",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Hero Section */}
      <section className="bg-[#08111f] text-white py-16 sm:py-20 border-b border-white/10">
        <div className="container-site space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
            Connect With Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Talk to a Real Estate Expert
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Have questions about buying, selling, or investing in properties? Our advisory team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Form & Locations Grid Section */}
      <section className="section-padding bg-background pb-20 flex-1">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif font-bold text-2xl text-foreground mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Fill out the form below and one of our advisors will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="font-serif font-bold text-xl text-foreground">
                  Message Received
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you for reaching out to Landmark Nexus. An expert will contact you shortly at{" "}
                  <span className="font-semibold text-foreground">{formData.email}</span>.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="text-xs uppercase tracking-wider"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border text-xs h-10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border text-xs h-10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Phone Number
                    </label>
                    <Input
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border text-xs h-10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Inquiry Type
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(val) => setFormData({ ...formData, service: val })}
                    >
                      <SelectTrigger className="bg-background border-border text-xs h-10">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales" className="text-xs">
                          Property Acquisition
                        </SelectItem>
                        <SelectItem value="investment" className="text-xs">
                          Investment Opportunities
                        </SelectItem>
                        <SelectItem value="advisory" className="text-xs">
                          Strategic Advisory
                        </SelectItem>
                        <SelectItem value="management" className="text-xs">
                          Property Management
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Message *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    placeholder="Tell us about your property goals or requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border text-xs resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-slate-950 font-semibold text-xs uppercase tracking-wider py-6 gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Regional Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-1">
                Our Hubs
              </span>
              <h2 className="font-serif font-bold text-2xl text-foreground">
                Regional Offices
              </h2>
            </div>

            <div className="space-y-4">
              {OFFICES.map((office, i) => (
                <div
                  key={i}
                  className="p-5 bg-card border border-border rounded-xl space-y-2 hover:border-accent/40 transition-colors"
                >
                  <h3 className="font-serif font-bold text-base text-foreground">
                    {office.city}
                  </h3>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{office.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{office.email}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-5 bg-secondary/50 border border-border rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-xs">
                <Clock className="w-4 h-4 text-accent" />
                <span>Business Working Hours</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Monday – Friday: 8:00 AM – 5:00 PM (WAT) <br />
                Saturday: By Appointment Only <br />
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}