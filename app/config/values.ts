import { ShieldCheck, Award, Lightbulb, Users, type LucideIcon } from "lucide-react";

export interface BrandValue {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const BRAND_VALUES: BrandValue[] = [
  {
    num: "01",
    title: "Transparency",
    description: "Clear communication and straightforward dealings throughout the journey.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Expertise",
    description: "Knowledge and professional insight to help clients navigate the market.",
    icon: Award,
  },
  {
    num: "03",
    title: "Strategic Thinking",
    description: "A thoughtful approach to property decisions and long-term opportunities.",
    icon: Lightbulb,
  },
  {
    num: "04",
    title: "Client Focus",
    description: "Solutions built around the individual goals and needs of every client.",
    icon: Users,
  },
];