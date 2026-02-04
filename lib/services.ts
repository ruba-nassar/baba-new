import type { LucideIcon } from "lucide-react";
import { Leaf, Droplet, Flame, Sprout, Recycle, Users, RefreshCw, BadgeCheck } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;

  // For /services grid
  cardImage: string;

  // For /services/[slug] details
  detailImage: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "environmental-and-natural-resource-management",
    title: "Environmental & Natural Resource Management",
    icon: Sprout,
    cardImage: "/images/services/cards/natural.jpg",
    detailImage: "/images/services/details/natural.jpg",
    bullets: [
      "Environmental impact assessment (EIA) support",
      "Environmental and social management plans",
      "Baseline studies and monitoring programs",
      "Waste and hazardous materials management",
      "Biodiversity and habitat protection measures",
    ],
  },
  {
    slug: "water-resource-management",
    title: "Water Resource Management",
    icon: Droplet,
    cardImage: "/images/services/cards/water.jpg",
    detailImage: "/images/services/details/water.jpg",
    bullets: [
      "Water supply and demand management",
      "Water pricing and tariff restructuring",
      "Public-private partnerships",
      "Institutional reforms and decentralization",
      "Watershed management and water harvesting",
      "Water conflict management",
      "Hydrological and flood assessment studies",
      "Monitoring, data management and automation",
    ],
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    icon: Flame,
    cardImage: "/images/services/cards/oil.jpg",
    detailImage: "/images/services/details/oil.jpg",
    bullets: [
      "EHS compliance and permitting support",
      "Environmental monitoring and reporting",
      "Risk assessment and mitigation planning",
      "Waste management and spill response planning",
      "Audit and inspection readiness support",
    ],
  },
  {
    slug: "renewable-energy-services",
    title: "Renewable Energy Services",
    icon: Recycle,
    cardImage: "/images/services/cards/renewable.jpg",
    detailImage: "/images/services/details/renewable.jpg",
    bullets: [
      "Environmental screening and feasibility support",
      "Permitting and compliance documentation",
      "Impact mitigation and management planning",
      "Monitoring and performance reporting",
      "Stakeholder engagement support",
    ],
  },
  {
    slug: "training-and-capacity-building",
    title: "Training & Capacity Building",
    icon: Users,
    cardImage: "/images/services/cards/training.jpg",
    detailImage: "/images/services/details/training.jpg",
    bullets: [
      "Tailored workshops for teams and managers",
      "EHS and environmental compliance training",
      "Monitoring and reporting best practices",
      "On-site coaching and implementation support",
      "Customized materials and case studies",
    ],
  },
  {
    slug: "integrated-management-systems",
    title: "Integrated Management Systems",
    icon: RefreshCw,
    cardImage: "/images/services/cards/ims.jpg",
    detailImage: "/images/services/details/ims.jpg",
    bullets: [
      "Gap assessment and implementation planning",
      "ISO-aligned procedures and documentation",
      "Internal audit preparation and support",
      "Performance measurement and continual improvement",
    ],
  },
  {
    slug: "climate-change",
    title: "Climate Change",
    icon: BadgeCheck,
    cardImage: "/images/services/cards/climate.jpg",
    detailImage: "/images/services/details/climate.jpg",
    bullets: [
      "Climate risk screening for projects",
      "Adaptation and resilience recommendations",
      "GHG inventory support and reporting",
      "Mitigation planning and strategy support",
    ],
  },
  {
    slug: "sustainability-reporting",
    title: "Sustainability Reporting",
    icon: Leaf,
    cardImage: "/images/services/cards/sustainability.jpg",
    detailImage: "/images/services/details/sustainability.jpg",
    bullets: [
      "Framework support (structure, indicators, narrative)",
      "Data collection and organization guidance",
      "Stakeholder-ready reporting and visuals",
      "Materiality and performance alignment support",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  return services.find((s) => s.slug.toLowerCase() === normalized);
}
