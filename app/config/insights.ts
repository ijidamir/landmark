export interface Article {
    slug: string;
    category: string;
    title: string;
    date: string;
    image: string;
    excerpt?: string;
    readTime?: string;
  author?: string | { name: string; avatar?: string };
  }
  
  export const ARTICLES: Article[] = [
    {
      slug: "understanding-nigerian-real-estate-market",
      category: "Real Estate",
      title: "Understanding the Nigerian Real Estate Market",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
    },
    {
      slug: "what-to-consider-before-buying-property",
      category: "Property Guide",
      title: "What to Consider Before Buying Property",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
    },
    {
      slug: "real-estate-as-long-term-investment",
      category: "Investment",
      title: "Real Estate as a Long-Term Investment",
      date: "September 2026",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    },
  ];