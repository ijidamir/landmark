import { Footer } from "@/components/helper/Footer";
import { ResponsiveNav } from "@/components/navigation/ResponsiveNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {default:"Landmark Nexus | Real Estate & Property",
template: "%s |Landmark Nexus"},
  description: "Landmark nexus provides trusted real estate solutions, exceptional properties, investment opportunities, and professional property advisory services.",
  openGraph: {
    title:"Landmark Nexus | Real Estate & Property",
    description:
    "connecting people with exceptional properties and real estate opportunities",
    type: "website",
    locale:"en_NG",
    siteName: "Landmark Nexus"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className={inter.className}>
        <ResponsiveNav/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
