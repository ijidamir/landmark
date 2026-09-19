# Landmark Nexus — Luxury Real Estate Platform

A high-performance, responsive real estate web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
landmark-nexus/
├── app/
│   ├── config/          # Centralized routes, team, and insights configuration
│   ├── about/           # About page (/about)
│   ├── properties/      # Property listings and details (/properties)
│   ├── services/        # Real estate services page (/services)
│   ├── insights/        # Landmark Journal listing (/insights)
│   │   └── [slug]/      # Dynamic article pages (/insights/[slug])
│   ├── contact/         # Contact page (/contact)
│   ├── globals.css      # Global styles & Tailwind CSS configuration
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── ui/              # shadcn/ui reusable components
│   ├── logo.tsx         # Landmark Nexus logo component
│   └── footer.tsx       # Global footer component
├── public/              # Static media assets
└── package.json