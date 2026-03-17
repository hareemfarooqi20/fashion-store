import type {
  Product,
  Collection,
  Testimonial,
  TeamMember,
  FAQItem,
  Stat,
  Service,
  Brand,
} from "@/types";

export const SITE = {
  name: "LuxeBoutique",
  tagline: "Dress Your Story",
  phone: "0800 123 4567",
  email: "hello@luxeboutique.co.uk",
  address: "14 King Street, Mayfair, London, W1J 9AA",
  location: "London",
  hours: {
    weekday: "Mon–Fri: 10:00 – 19:00",
    saturday: "Sat: 10:00 – 18:00",
    sunday: "Sun: 12:00 – 17:00",
  },
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "silk-wrap-midi-dress",
    name: "Silk Wrap Midi Dress",
    category: "women",
    price: 195,
    salePrice: 149,
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80",
    ],
    description:
      "Effortlessly elegant, this fluid silk-touch wrap dress drapes beautifully and flatters every silhouette.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Blush", "Onyx"],
    features: [
      "100% sustainable silk-blend",
      "Adjustable wrap tie",
      "Falls to mid-calf",
      "Dry clean only",
    ],
    inStock: true,
    badge: "sale",
    rating: 4.9,
    reviews: 128,
    material: "Silk Blend",
  },
  {
    id: "2",
    slug: "structured-blazer-camel",
    name: "Structured Camel Blazer",
    category: "women",
    price: 245,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b5f05?w=600&q=80",
    ],
    description:
      "A tailored staple for every wardrobe — clean lines, padded shoulders, and a luxe camel finish.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Camel", "Black", "Chalk"],
    features: [
      "Premium wool-blend fabric",
      "Single-button closure",
      "Two side pockets",
      "Fully lined interior",
    ],
    inStock: true,
    badge: "bestseller",
    rating: 4.8,
    reviews: 87,
    material: "Wool Blend",
  },
  {
    id: "3",
    slug: "wide-leg-linen-trousers",
    name: "Wide-Leg Linen Trousers",
    category: "women",
    price: 135,
    images: [
      "https://images.unsplash.com/photo-1483118714900-540cf339fd46?w=600&q=80",
    ],
    description:
      "Relaxed, breathable linen trousers with a wide-leg cut — perfect from brunch to evening.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sand", "Slate", "Ecru"],
    features: [
      "100% pure linen",
      "High-waist design",
      "Elasticated back waistband",
      "Deep side pockets",
    ],
    inStock: true,
    badge: "new",
    rating: 4.7,
    reviews: 54,
    material: "100% Linen",
  },
  {
    id: "4",
    slug: "slim-fit-oxford-shirt",
    name: "Slim Fit Oxford Shirt",
    category: "men",
    price: 115,
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    ],
    description:
      "A sharp, slim-fit oxford shirt that transitions seamlessly from the boardroom to the bar.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Sky Blue", "Soft Pink"],
    features: [
      "100% premium cotton",
      "Button-down collar",
      "Slim fit cut",
      "Machine washable",
    ],
    inStock: true,
    badge: "bestseller",
    rating: 4.8,
    reviews: 213,
    material: "100% Cotton",
  },
  {
    id: "5",
    slug: "tailored-chino-trousers",
    name: "Tailored Chino Trousers",
    category: "men",
    price: 125,
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    ],
    description:
      "Smart-casual chinos with a tailored fit — wear them to the office or out on weekends.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Navy", "Khaki", "Charcoal"],
    features: [
      "Stretch cotton blend",
      "Mid-rise fit",
      "Two back welt pockets",
      "Machine washable",
    ],
    inStock: true,
    badge: undefined,
    rating: 4.6,
    reviews: 76,
    material: "Cotton Stretch",
  },
  {
    id: "6",
    slug: "merino-crew-neck-jumper",
    name: "Merino Crew-Neck Jumper",
    category: "men",
    price: 165,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    ],
    description:
      "Ultra-soft merino wool jumper for effortless everyday warmth without the bulk.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Forest Green", "Navy", "Oatmeal"],
    features: [
      "100% merino wool",
      "Ribbed cuffs and hem",
      "Classic crew neck",
      "Hand wash cold",
    ],
    inStock: true,
    badge: "new",
    rating: 4.9,
    reviews: 61,
    material: "100% Merino Wool",
  },
  {
    id: "7",
    slug: "leather-mini-crossbody",
    name: "Leather Mini Crossbody",
    category: "accessories",
    price: 185,
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    ],
    description:
      "A compact crossbody crafted from full-grain leather — the ultimate everyday companion.",
    sizes: ["One Size"],
    colors: ["Tan", "Black", "Burgundy"],
    features: [
      "Full-grain vegetable-tanned leather",
      "Adjustable strap 50–120cm",
      "Interior zip pocket",
      "Magnetic snap closure",
    ],
    inStock: true,
    badge: "bestseller",
    rating: 4.9,
    reviews: 182,
    material: "Full-Grain Leather",
  },
  {
    id: "8",
    slug: "cashmere-scarf",
    name: "Pure Cashmere Scarf",
    category: "accessories",
    price: 145,
    salePrice: 115,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    ],
    description:
      "Indulgently soft pure cashmere scarf — a luxury essential for every season.",
    sizes: ["One Size"],
    colors: ["Caramel", "Grey", "Ivory", "Midnight Blue"],
    features: [
      "100% pure Grade A cashmere",
      "Fringed ends",
      "200cm × 70cm",
      "Hand wash only",
    ],
    inStock: true,
    badge: "sale",
    rating: 4.8,
    reviews: 94,
    material: "100% Cashmere",
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: "1",
    name: "Women",
    slug: "women",
    description: "Timeless pieces with a modern edge — from occasion wear to everyday staples.",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    productCount: 84,
    featured: true,
  },
  {
    id: "2",
    name: "Men",
    slug: "men",
    description: "Sharp, refined essentials for the modern man who values quality.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    productCount: 67,
    featured: true,
  },
  {
    id: "3",
    name: "Accessories",
    slug: "accessories",
    description: "The finishing touches that elevate every outfit.",
    image:
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=800&q=80",
    productCount: 43,
    featured: true,
  },
  {
    id: "4",
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "Fresh from our designers — the latest pieces to land in-store.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    productCount: 28,
    featured: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: "personal-styling",
    title: "Personal Styling Session",
    description:
      "Work one-on-one with a dedicated stylist to curate a wardrobe that reflects your lifestyle.",
    price: "From £75",
    duration: "60–90 min",
    icon: "Sparkles",
    popular: true,
    features: [
      "Full wardrobe assessment",
      "Personalised lookbook",
      "Brand recommendations",
      "Follow-up style notes",
    ],
  },
  {
    id: "alterations",
    title: "In-House Alterations",
    description:
      "Our master tailor ensures every piece fits your body perfectly.",
    price: "From £25",
    duration: "24–48 hr",
    icon: "Scissors",
    popular: false,
    features: [
      "Hem adjustments",
      "Taking-in & letting-out",
      "Sleeve shortening",
      "Emergency same-day service",
    ],
  },
  {
    id: "bridal",
    title: "Bridal Styling",
    description:
      "A dedicated bridal experience — from engagement through to the big day.",
    price: "From £150",
    duration: "2 hr",
    icon: "Heart",
    popular: false,
    features: [
      "Private boutique appointment",
      "Bridal party coordination",
      "Accessory curation",
      "Post-event dry cleaning",
    ],
  },
  {
    id: "wardrobe-edit",
    title: "Wardrobe Edit",
    description:
      "We come to you — declutter, organise and rebuild your wardrobe from scratch.",
    price: "From £120",
    duration: "3–4 hr",
    icon: "Layers",
    popular: false,
    features: [
      "At-home or in-store",
      "Capsule wardrobe plan",
      "Donation & resale guidance",
      "Shopping list creation",
    ],
  },
  {
    id: "gift-wrapping",
    title: "Luxury Gift Wrapping",
    description:
      "Every gift deserves a beautiful presentation — our signature wrapping service.",
    price: "From £8",
    duration: "Same day",
    icon: "Gift",
    popular: false,
    features: [
      "Signature ribbon & tissue",
      "Handwritten gift card",
      "Luxury gift box",
      "Same-day collection",
    ],
  },
  {
    id: "virtual-styling",
    title: "Virtual Styling",
    description:
      "Get expert style advice from anywhere in the world via video call.",
    price: "From £55",
    duration: "45 min",
    icon: "Monitor",
    popular: false,
    features: [
      "Video call session",
      "Digital lookbook",
      "Online shopping curation",
      "1 week follow-up support",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Harrington",
    rating: 5,
    text: "LuxeBoutique transformed my wardrobe. My stylist understood exactly what I needed — I finally feel confident dressing for my lifestyle. The quality of every piece is exceptional.",
    purchase: "Personal Styling Session",
    date: "February 2025",
    verified: true,
  },
  {
    id: "2",
    name: "James Whitfield",
    rating: 5,
    text: "I came in for a simple shirt and left with a complete capsule wardrobe. The team genuinely know their stuff. The Merino jumper is the softest thing I've ever owned.",
    purchase: "Merino Crew-Neck Jumper",
    date: "January 2025",
    verified: true,
  },
  {
    id: "3",
    name: "Amara Osei",
    rating: 5,
    text: "The bridal styling service was absolutely incredible. They made my mother, bridesmaids and me feel like royalty. Every detail was perfect. Could not recommend more highly.",
    purchase: "Bridal Styling",
    date: "December 2024",
    verified: true,
  },
  {
    id: "4",
    name: "Charlotte Mills",
    rating: 5,
    text: "The silk wrap dress got so many compliments at the gala. Arrived beautifully packaged, fits perfectly, and the quality is beyond what I expected for the price.",
    purchase: "Silk Wrap Midi Dress",
    date: "March 2025",
    verified: true,
  },
  {
    id: "5",
    name: "Oliver Chen",
    rating: 4,
    text: "Quick delivery, gorgeous quality linen trousers. The alterations team also hemmed them perfectly. My go-to boutique in London now.",
    purchase: "Wide-Leg Linen Trousers",
    date: "February 2025",
    verified: true,
  },
  {
    id: "6",
    name: "Isabella Reed",
    rating: 5,
    text: "The cashmere scarf is a dream — impossibly soft and the colour is even more beautiful in person. The gift wrapping made it the perfect present. Will be back.",
    purchase: "Pure Cashmere Scarf",
    date: "January 2025",
    verified: true,
  },
];

export const STATS: Stat[] = [
  { value: 12, suffix: "+", label: "Years in Fashion", icon: "Calendar" },
  { value: 8400, suffix: "+", label: "Happy Customers", icon: "Heart" },
  { value: 98, suffix: "%", label: "5-Star Reviews", icon: "Star" },
  { value: 500, suffix: "+", label: "Curated Pieces", icon: "Layers" },
];

export const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Elena Marchetti",
    role: "Head of Styling & Creative Director",
    bio: "With 15 years in luxury fashion — including stints at Vogue and Net-A-Porter — Elena curates every collection with an eye for timeless elegance.",
  },
  {
    id: "2",
    name: "Marcus DuBois",
    role: "Senior Menswear Stylist",
    bio: "A certified personal stylist with a background in Savile Row tailoring. Marcus has dressed everyone from City professionals to film directors.",
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Accessories Buyer & Stylist",
    bio: "Priya sources our accessories from independent artisans worldwide, ensuring every piece tells a story and stands the test of time.",
  },
];

export const FAQ: FAQItem[] = [
  {
    question: "What is your returns policy?",
    answer:
      "We accept returns within 28 days of purchase for unworn items with all tags attached. Items in original packaging qualify for a full refund. Sale items can be exchanged or returned for store credit.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes — we ship worldwide. UK standard delivery is free over £100. International orders typically arrive within 5–10 business days. All orders are fully tracked.",
  },
  {
    question: "How do I book a styling consultation?",
    answer:
      "Simply click 'Book Consultation' anywhere on the site, choose your preferred service, pick a date and time, and fill in your details. We'll confirm within 2 hours.",
  },
  {
    question: "Are your products sustainably sourced?",
    answer:
      "Sustainability is at the heart of what we do. We partner only with suppliers who meet our ethical standards. Over 70% of our collection uses certified sustainable or natural fibres.",
  },
  {
    question: "Can I get same-day alterations?",
    answer:
      "Yes — we offer an emergency same-day alteration service for simple adjustments (hems, taking-in). Please call ahead to confirm availability.",
  },
  {
    question: "Do you have a loyalty programme?",
    answer:
      "Yes! Our Lux Rewards programme gives you 1 point per £1 spent. Points convert to store credit, and members get early access to sales and exclusive events.",
  },
];

export const BRANDS: Brand[] = [
  { name: "ARKET", tagline: "" },
  { name: "COS", tagline: "" },
  { name: "Totême", tagline: "" },
  { name: "The Row", tagline: "" },
  { name: "Aesther Ekme", tagline: "" },
  { name: "Nanushka", tagline: "" },
  { name: "Reformation", tagline: "" },
  { name: "Sandro", tagline: "" },
  { name: "Reiss", tagline: "" },
  { name: "Whistles", tagline: "" },
];
