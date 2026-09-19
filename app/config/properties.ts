export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    image: string;
    tag: string;
    bedrooms?: number;
    bathrooms?: number;
    type: "duplex" | "bungalow" | "detached" | "apartment";
  }
  
  export const PROPERTIES: Property[] = [
    {
      id: 1,
      title: "Luxury 4 Bedroom Duplex",
      location: "Yola, Adamawa State",
      price: "₦85,000,000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      tag: "FOR SALE",
      bedrooms: 4,
      bathrooms: 4,
      type: "duplex",
    },
    {
      id: 2,
      title: "3 Bedroom Bungalow",
      location: "Abuja, FCT",
      price: "₦65,000,000",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      tag: "FOR SALE",
      bedrooms: 3,
      bathrooms: 3,
      type: "bungalow",
    },
    {
      id: 3,
      title: "5 Bedroom Detached House",
      location: "Lagos, Lagos State",
      price: "₦120,000,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      tag: "FOR SALE",
      bedrooms: 5,
      bathrooms: 5,
      type: "detached",
    },
    {
      id: 4,
      title: "2 Bedroom Apartment",
      location: "Abuja, FCT",
      price: "₦45,000,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      tag: "FOR SALE",
      bedrooms: 2,
      bathrooms: 2,
      type: "apartment",
    },
  ];