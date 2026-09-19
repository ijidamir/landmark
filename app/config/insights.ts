export interface Author {
    name: string;
    role: string;
    avatar?: string;
  }
  
  export interface Article {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    summary: string;
    author: Author;
    content: string[];
  }
  
  export const ARTICLES: Article[] = [
    {
      slug: "understanding-nigerian-real-estate-market",
      title: "Understanding the Nigerian Real Estate Market in 2026",
      category: "Real Estate",
      date: "September 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      summary:
        "A comprehensive overview of key drivers, high-growth corridors in Abuja and Lagos, and strategic investment plays for long-term yields.",
      author: {
        name: "Ijidamir Wazamda",
        role: "Head of Property Research",
      },
      content: [
        "The Nigerian real estate sector continues to demonstrate resilience and growth across commercial and residential hubs. Key commercial centers like Lagos, Abuja, and emerging regional markets are seeing unprecedented interest from institutional and private investors.",
        "Navigating title verification, Governor's Consent, and land registry regulations remains crucial to protecting capital and guaranteeing legal safety before acquisition.",
        "Positioning capital in infrastructure-heavy urban growth corridors provides long-term hedge value against economic volatility and capital depreciation.",
      ],
    },
    {
      slug: "what-to-consider-before-buying-property",
      title: "What to Consider Before Buying Property in Nigeria",
      category: "Property Guide",
      date: "August 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      summary:
        "Essential checklist covering due diligence, title authentication, location evaluation, and hidden infrastructure fees.",
      author: {
        name: "Landmark Advisory Team",
        role: "Legal & Due Diligence",
      },
      content: [
        "Purchasing property requires more than evaluating aesthetics or initial price points. Legal title verification is the absolute first step before any financial commitment.",
        "Verify whether the property possesses a Certificate of Occupancy (C of O), Excision, Gazette, or registered Deed of Assignment.",
        "Always factor in peripheral costs such as legal documentation fees, agency commissions, survey plans, and estate development levies.",
      ],
    },
    {
      slug: "real-estate-as-a-long-term-investment",
      title: "Real Estate as a Long-Term Wealth Preservation Strategy",
      category: "Investment",
      date: "July 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      summary:
        "How structured real estate portfolios consistently outperform inflation and generate predictable rental yields.",
      author: {
        name: "Oluwaseun Bakare",
        role: "Investment Analyst",
      },
      content: [
        "Real estate investment offers dual revenue generation: immediate rental returns combined with progressive capital appreciation.",
        "Diversifying investments between high-demand residential rentals and commercial developments balances risk while maximizing cash flow.",
        "Long-term portfolio management requires continuous asset maintenance and professional management to sustain rental rates and tenant retention.",
      ],
    },
  ];