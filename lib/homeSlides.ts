export type HomeSlide = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
};

export const homeSlides: HomeSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero-1.jpg",
    title: "ENVIRONMENTAL & NATURAL\nRESOURCE MANAGEMENT",
    subtitle: "Management services covering a wide array of environmental issues.",
    ctaText: "Read More",
    ctaHref: "/about",
  },
  {
    id: "slide-2",
    image: "/images/hero-2.jpg",
    title: "ENVIRONMENTAL IMPACT\nASSESSMENT & PERMITTING",
    subtitle: "Clear reporting, fast turnaround, and regulator-ready documentation.",
    ctaText: "Our Services",
    ctaHref: "/services",
  },
  {
    id: "slide-3",
    image: "/images/hero-3.jpg",
    title: "SUSTAINABILITY &\nCOMPLIANCE SUPPORT",
    subtitle: "Practical plans that reduce risk and protect ecosystems.",
    ctaText: "View Projects",
    ctaHref: "/projects",
  },
];
