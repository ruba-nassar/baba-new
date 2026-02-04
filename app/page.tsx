import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import CurrentProjectsSection from "@/components/home/CurrentProjectsSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import { homeSlides } from "@/lib/homeSlides";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <main>
      <HeroSlider slides={homeSlides} />
      <AboutSection />
      <CurrentProjectsSection items={projects} />
      <WhatWeDoSection />
    </main>
  );
}
