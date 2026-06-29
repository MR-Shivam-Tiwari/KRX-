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
    id: "ad-campaign-launch-package",
    title: "Ad Campaign Launch Package",
    price: "",
    category: "Paid Acquisition",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    shortDesc: "End-to-end strategy, copywriting, asset generation, and launch of high-performing digital advertising campaigns.",
    fullDesc: "Launch your ad campaigns with confidence. We take care of everything from platform-specific campaign structures, modern visual creatives, copywriting that resonates, and audience mapping, ensuring optimal ROI from day one.",
    deliverables: [
      "Custom campaign architecture & structure",
      "Creative asset design (static & short-form video formats)",
      "Target audience research and pixel placement mapping",
      "Post-launch telemetry and live campaign tracking dashboards"
    ]
  },
  {
    id: "ad-campaign-setup",
    title: "Ad Campaign Setup",
    price: "",
    category: "Paid Acquisition",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Complete platform configuration, conversion tracking installation, and account setup for major ad channels.",
    fullDesc: "Perfect for teams who want to manage their own ads but need a bulletproof starting configuration. We handle the heavy lifting of backend setup, tracking pixels, event mapping, and audience syncing so your campaigns run on a rock-solid foundation.",
    deliverables: [
      "Ad account settings audit and configuration",
      "Server-side API and pixel configuration (Meta, Google)",
      "Custom conversion events mapping",
      "Initial custom audiences structure setup"
    ]
  },
  {
    id: "conversion-boost-blueprint",
    title: "Conversion Boost Blueprint",
    price: "",
    category: "Conversion Engineering",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    shortDesc: "An actionable, data-driven framework and interface redesign to rapidly improve user action rates.",
    fullDesc: "Identify where your visitors are getting stuck. We conduct a exhaustive UX/UI review, heat-map analysis, and funnel friction audit to draft a visual layout blueprint that streamlines checkout paths and increases user sign-ups.",
    deliverables: [
      "Complete user path heatmap and scroll audit",
      "Interactive Figma wireframes mapping high-conversion alternatives",
      "In-depth written optimization report and speed checklist",
      "Form simplification and micro-copy guide"
    ]
  },
  {
    id: "elite-marketing-strategy-session",
    title: "Elite Marketing Strategy Session",
    price: "",
    category: "Growth & Scaling",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
    shortDesc: "High-level strategic consulting to optimize market positioning, pricing models, and client acquisition.",
    fullDesc: "A private strategic intensive designed for founders and executives. We map out your competitive moat, construct high-margin offers, optimize high-ticket pricing tiers, and design repeatable enterprise marketing funnels.",
    deliverables: [
      "90-minute private growth strategy call with senior partners",
      "Comprehensive competitive landscape analysis document",
      "Pricing architecture and core messaging blueprints",
      "Detailed execution plan for next 2 quarters"
    ]
  },
  {
    id: "high-converting-sales-funnel-design",
    title: "High-Converting Sales Funnel Design",
    price: "",
    category: "Conversion Engineering",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A bespoke, multi-step customer journey designed to turn cold prospects into high-ticket pipeline leads.",
    fullDesc: "Stop relying on a single landing page. We design a multi-tier customer journey that warm prospects up, educates them on your unique advantages, addresses friction points, and drives them to book a sales call or make a purchase.",
    deliverables: [
      "Multi-step conversion funnel visual maps",
      "Copywriting for every step (opt-in page, thank-you page, emails)",
      "Automated email sequence layout and integration setup",
      "Interactive interactive checkout/lead capture design"
    ]
  },
  {
    id: "landing-page-optimization-plan",
    title: "Landing Page Optimization Plan",
    price: "",
    category: "Conversion Engineering",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A focused, structural blueprint to maximize signups and demo bookings on your primary landing page.",
    fullDesc: "We audit, redesign, and copywrite your main landing page. We restructure the header, refine the value proposition, align call-to-actions, and ensure the entire mobile responsive layout is optimized for immediate user response.",
    deliverables: [
      "Above-the-fold value proposition copywriting overhaul",
      "Visual layout mockups prioritizing mobile response",
      "Speed and asset weight optimization recommendations",
      "A/B testing execution plan and target success metrics"
    ]
  },
  {
    id: "marketing-funnel-audit",
    title: "Marketing Funnel Audit",
    price: "",
    category: "Organic Growth",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    shortDesc: "A rigorous, end-to-end performance diagnostic of your active sales pipelines and traffic channels.",
    fullDesc: "Uncover hidden performance leaks. We audit your existing marketing data, source traffic sources, attribution models, and event conversion points to show you where you are wasting budget and where the biggest opportunities lie.",
    deliverables: [
      "Comprehensive traffic quality and bounce rate diagnostic",
      "Attribution tracking review and event mapping audit",
      "Budget efficiency report with recommended saving targets",
      "Prioritized growth roadmap matching resources"
    ]
  },
  {
    id: "premium-growth-accelerator",
    title: "Premium Growth Accelerator",
    price: "",
    category: "Growth & Scaling",
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
    price: "",
    category: "Conversion Engineering",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Transform your bounce rates into high-ticket checkout conversions with structural custom coding.",
    fullDesc: "Stop letting expensive ad traffic bounce. We strip out heavy themes, optimize your mobile speed, redesign friction points, and build custom conversion funnels. We focus on semantic code structure, micro-copy, and fast-loading layouts that turn visitors into pre-qualified pipeline leads.",
    deliverables: [
      "Custom UX redesign on Figma & interactive previews",
      "Speed optimization to reach sub-1s load times",
      "Friction-less interactive lead capture forms",
      "Full mobile-responsive compatibility"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Jenkins",
    role: "Chief Marketing Officer",
    quote: "KRX made project collaboration straightforward and reliable, exceeding our pipeline growth expectations at every step.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: "testimonial-2",
    name: "Marcus Chen",
    role: "Director of Product Strategy",
    quote: "The team's professionalism and commitment to quality ensured a seamless and outstanding growth campaign implementation.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: "testimonial-3",
    name: "Elena Rostova",
    role: "Operations Lead",
    quote: "I am completely satisfied with the efficient service and premium growth frameworks delivered by KRX.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80"
  }
];
