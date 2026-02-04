"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { HomeSlide } from "@/lib/homeSlides";

type Props = {
  slides: HomeSlide[];
};

export default function HeroSlider({ slides }: Props) {
  const [[index, direction], setIndex] = React.useState<[number, number]>([0, 1]);

  const slide = slides[index];

  function paginate(nextDirection: number) {
    setIndex(([prevIndex]) => {
      const nextIndex =
        (prevIndex + nextDirection + slides.length) % slides.length;
      return [nextIndex, nextDirection];
    });
  }

  // Variants that create the "swipe up" feel
  // - current slide exits upward
  // - next slide enters from below
  const variants = {
    enter: (dir: number) => ({
      y: 80,
      opacity: 0,
      scale: 1.02,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir: number) => ({
      y: -80,
      opacity: 0,
      scale: 1.02,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="relative w-full">
      <div className="relative h-[520px] md:h-[640px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            {/* Background image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Dark overlay like the reference */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content (moves together with image because it's inside the animated container) */}
            <div className="relative z-10 mx-auto max-w-6xl h-full px-4">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <h1 className="text-white font-extrabold tracking-tight leading-tight text-2xl md:text-4xl whitespace-pre-line drop-shadow">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-white/85 text-xs md:text-sm tracking-[0.28em] uppercase drop-shadow">
                    {slide.subtitle}
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Link
                      href={slide.ctaHref}
                      className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left arrow */}
        <button
          aria-label="Previous slide"
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/20 text-white transition grid place-items-center"
        >
          <span className="text-2xl leading-none">‹</span>
        </button>

        {/* Right arrow */}
        <button
          aria-label="Next slide"
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/20 text-white transition grid place-items-center"
        >
          <span className="text-2xl leading-none">›</span>
        </button>
      </div>
    </section>
  );
}
