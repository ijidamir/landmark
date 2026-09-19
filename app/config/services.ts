import { Building2, TrendingUp, Compass, ShieldCheck, LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "property-sales",
    title: "Property Sales",
    shortDescription: "Helping clients discover and acquire properties aligned with their needs, lifestyle, and ambitions.",
    fullDescription: "We provide end-to-end support in buying and selling premium residential and commercial real estate. Our team performs thorough title verifications, market valuations, and contract negotiations to ensure seamless transactions.",
    icon: Building2,
    features: [
      "Verified Land & Property Titles",
      "Tailored Property Matching",
      "Price Negotiation & Valuation",
      "Legal & Conveyancing Support",
    ],
  },
  {
    id: "real-estate-investment",
    title: "Real Estate Investment",
    shortDescription: "Identifying real estate opportunities with a focus on strategic value and long-term potential.",
    fullDescription: "We connect private investors and institutions with high-yield real estate projects across prime growth corridors in Nigeria. From commercial hubs in Abuja to luxury developments in Lagos.",
    icon: TrendingUp,
    features: [
      "High-Yield Asset Sourcing",
      "Portfolio Diversification",
      "ROI Projection & Financial Modeling",
      "Risk Mitigation Strategies",
    ],
  },
  {
    id: "property-advisory",
    title: "Property Advisory",
    shortDescription: "Providing practical insight and guidance to help clients make informed real estate decisions.",
    fullDescription: "Our strategic advisory service delivers market research, feasibility studies, and regulatory compliance advice for individuals, developers, and corporate entities.",
    icon: Compass,
    features: [
      "Market Intelligence & Analytics",
      "Feasibility & Viability Studies",
      "Zoning & Regulatory Guidance",
      "Asset Valuation & Risk Assessment",
    ],
  },
  {
    id: "property-management",
    title: "Property Management",
    shortDescription: "Professional oversight and management solutions designed to protect and improve property value.",
    fullDescription: "We take the stress out of property ownership by managing tenant relations, routine facility maintenance, rent collection, and long-term value preservation for property owners.",
    icon: ShieldCheck,
    features: [
      "Tenant Screening & Lease Management",
      "Preventative Facility Maintenance",
      "Rent Collection & Financial Reporting",
      "Property Value Enhancement Plan",
    ],
  },
];