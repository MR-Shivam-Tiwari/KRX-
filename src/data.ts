export interface Service {
  id: string;
  title: string;
  price: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
  avatar: string;
}

export const SERVICES: Service[] = [
  {
    id: "premium-growth-accelerator",
    title: "Premium Growth Accelerator",
    price: "$2,497.00",
    category: "Uncategorized",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A complete scaling suite tailored to accelerate user acquisition and double commercial output in 90 days.",
    fullDesc: "Our flagship growth program. We embed our senior growth consultants directly into your team to audit, optimize, and scale all acquisition channels. This is a comprehensive, multi-channel growth system that aligns paid acquisition, organic search, and outbound pipelines under a single unified dashboard.",
    deliverables: [
      "Done-for-you outbound cold email flow setup",
      "Omnichannel conversion tracking & event mapping",
      "Bi-weekly strategic growth optimization audits",
      "Full analytics integration with visual performance board"
    ]
  },
  {
    id: "website-conversion-overhaul",
    title: "Website Conversion Overhaul",
    price: "$1,597.00",
    category: "Uncategorized",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Transform your bounce rates into high-ticket checkout conversions with structural custom coding.",
    fullDesc: "Stop letting expensive ad traffic bounce. We strip out heavy themes, optimize your mobile speed, redesign friction points, and build custom conversion funnels. We focus on semantic code structure, micro-copy, and fast-loading layouts that turn visitors into pre-qualified pipeline leads.",
    deliverables: [
      "Custom UX redesign on Figma & interactive previews",
      "Speed optimization to reach sub-1s load times",
      "Friction-less interactive lead capture forms",
      "Full mobile-responsive compatibility"
    ]
  },
  {
    id: "performance-seo-engine",
    title: "Performance SEO Engine",
    price: "$1,897.00",
    category: "Organic Growth",
    image: "https://t3.ftcdn.net/jpg/18/97/09/82/240_F_1897098241_0mP0C3f0VF2gYvXO4JMlco1JiVqqqmEu.jpg",
    shortDesc: "Rank on page 1 for high-intent terms that drive active buyers straight to your offers.",
    fullDesc: "Search Engine Optimization engineered for commercial intent. We map the exact commercial terms your customers use when searching to make a purchase, and construct the content architecture and technical authority to permanently capture those search volumes.",
    deliverables: [
      "High-intent keyword blueprint and competitor gap audit",
      "Technical optimization and core web vitals tuning",
      "Premium editorial high-authority backlinks profile setup",
      "Semantic content marketing plan with monthly deliverables"
    ]
  },
  {
    id: "paid-social-management",
    title: "Paid Social & PPC Management",
    price: "$2,197.00",
    category: "Paid Acquisition",
    image: "https://media.istockphoto.com/id/1354364014/photo/a-man-with-a-smartphone-makes-an-internet-purchase-and-a-banking-transaction.jpg?s=612x612&w=0&k=20&c=TrLu9lvUxFzut6un7lmQvlTj4fjvFZCcIRgQxiXbLI0=",
    shortDesc: "Engineered campaigns on Meta, Google, and LinkedIn targeting high-margin enterprise accounts.",
    fullDesc: "We design, write, and manage ad campaigns focused strictly on return on ad spend (ROAS). We handle copywriting, graphic layout, audience segmentation, pixel mapping, and bidding strategies to scale safely without budget wastage.",
    deliverables: [
      "Custom ad copy, visual assets, and script options",
      "Advanced custom audience tracking and pixel synchronization",
      "A/B testing across primary hooks and value propositions",
      "Detailed weekly performance and return report digests"
    ]
  },
  {
    id: "brand-identity-suite",
    title: "Brand Identity & Design Suite",
    price: "$1,297.00",
    category: "Creative Strategy",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Command premium pricing with a custom, beautifully structured corporate design identity.",
    fullDesc: "Align your business visuals with your quality of service. We craft bespoke vector logo suites, modern typographies, eye-pleasing brand palettes, and premium sales collateral that instantly establish trust with enterprise clients.",
    deliverables: [
      "Complete custom logo system (including vector, favicons)",
      "Interactive typographic and color style manual booklet",
      "Premium landing page templates and copy layout structures",
      "Visual sales collaterals (corporate decks, card templates)"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Jenkins",
    role: "Chief Marketing Officer",
    quote: "KRX made purchasing straightforward and reliable, exceeding my expectations at every step.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: "testimonial-2",
    name: "Marcus Chen",
    role: "Director of Product Strategy",
    quote: "The team's professionalism and commitment to quality ensured a seamless and outstanding shopping experience.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: "testimonial-3",
    name: "Elena Rostova",
    role: "Operations Lead",
    quote: "I am completely satisfied with the efficient service and premium products provided by KRX.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80"
  }
];
