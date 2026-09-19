"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "general", // Default fallback string
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Type-safe change handlers ensuring null is never passed to state
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ?? "",
    }));
  };

  const handleSelectChange = (value: string | null) => {
    setFormData((prev) => ({
      ...prev,
      subject: value ?? "general",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Banner */}
      <section className="bg-[#08111f] text-white py-16 sm:py-20 border-b border-white/10">
        <div className="container-site max-w-4xl px-4 sm:px-6 mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-xs text-slate-400 hover:text-white p-0 h-auto hover:bg-transparent"
            >
              <Link href="/">
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                Back to Home
              </Link>
            </Button>
          </div>

          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Connect with Landmark Nexus
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Whether you are looking to acquire primary real estate, inquire about advisory services, or explore private wealth investment opportunities across Nigeria, our advisors are here to guide you.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-12 sm:py-20 flex-1">
        <div className="container-site max-w-6xl px-4 sm:px-6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Information Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                Direct Contact
              </span>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Our Corporate Offices
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                Reach out directly to our principal offices or submit an inquiry, and an assigned property manager will contact you within 24 hours.
              </p>
            </div>

            {/* Office Locations */}
            <div className="space-y-4 pt-2">
              <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-4 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="font-semibold text-foreground">Abuja Headquarters (FCT)</p>
                    <p className="text-muted-foreground leading-normal">
                      Maitama Commercial District, Abuja, Nigeria
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-4 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="font-semibold text-foreground">Regional Hubs</p>
                    <p className="text-muted-foreground leading-normal">
                      Lagos State (Victoria Island) & Yola (Adamawa State)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-4 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="font-semibold text-foreground">Phone & Mobile</p>
                    <p className="text-muted-foreground">+234 000 000 0000</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-4 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="font-semibold text-foreground">Electronic Mail</p>
                    <p className="text-muted-foreground">info@landmarknexus.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-sm">
                <CardContent className="p-4 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="font-semibold text-foreground">Hours of Operation</p>
                    <p className="text-muted-foreground">
                      Monday – Friday: 8:00 AM – 6:00 PM WAT
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="lg:col-span-7">
            <Card className="bg-card border-border shadow-sm p-6 sm:p-8">
              <CardContent className="p-0 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Fill out the form below and specify your inquiry type.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 text-center bg-accent/5 border border-accent/20 rounded-xl space-y-3 py-12">
                    <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                    <h4 className="text-lg font-serif font-semibold text-foreground">
                      Message Received
                    </h4>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Thank you for contacting Landmark Nexus. An assigned property consultant will review your inquiry and get back to you shortly.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      size="sm"
                      className="text-xs mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <Input
                        required
                        name="fullName"
                        placeholder="e.g. Adewale Thomas"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="bg-background border-border text-xs h-10"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <Input
                          required
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-background border-border text-xs h-10"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-background border-border text-xs h-10"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type (Shadcn Select with Safe Fallback) */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Subject / Inquiry Category
                      </label>
                      <Select
                        value={formData.subject}
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger className="bg-background border-border text-xs h-10">
                          <SelectValue placeholder="Select Inquiry Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general" className="text-xs">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="purchase" className="text-xs">
                            Property Purchase
                          </SelectItem>
                          <SelectItem value="investment" className="text-xs">
                            Investment Advisory
                          </SelectItem>
                          <SelectItem value="management" className="text-xs">
                            Property Management
                          </SelectItem>
                          <SelectItem value="valuation" className="text-xs">
                            Property Valuation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Message <span className="text-accent">*</span>
                      </label>
                      <Textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="Please describe your requirement or specific property interest..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-background border-border text-xs resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C5A059] hover:bg-[#b08e4c] text-slate-950 font-semibold text-xs h-11 gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </main>
  );
}