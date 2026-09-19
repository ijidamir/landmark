export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin?: string;
    email?: string;
  }
  
  export const LEADERSHIP_TEAM: TeamMember[] = [
    {
      id: "1",
      name: "Ijidamir Thomas Wazamda",
      role: "Chief Executive Officer & Founder",
      bio: "Visionary strategist leading Landmark Nexus in redefining property development, asset management, and client-centric real estate solutions across West Africa.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com",
      email: "thomasijidamir@gmail.com",
    },
    {
      id: "2",
      name: "Amina Bello",
      role: "Head of Real Estate Investments",
      bio: "Expert in high-yield commercial property portfolios, market risk evaluation, and strategic asset placement across major urban centers.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com",
    },
    {
      id: "3",
      name: "David Okonkwo",
      role: "Director of Property Advisory",
      bio: "Over 12 years of experience providing institutional clients and private investors with data-driven real estate advisory and valuation.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      linkedin: "https://linkedin.com",
    },
  ];