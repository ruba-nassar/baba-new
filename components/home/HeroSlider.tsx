"use client";

import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
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

  const variants: Variants = {
    enter: { y: 80, opacity: 0, scale: 1.02 },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.42, 0, 0.58, 1] },
    },
    exit: {
      y: -80,
      opacity: 0,
      scale: 1.02,
      transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section className="relative w-full">
      {/* Mobile: use svh and smaller min-height. Desktop unchanged. */}
      <div className="relative h-[70svh] min-h-[460px] md:h-[640px] overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={slide.id}
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

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl h-full px-4">
              <div className="flex h-full items-center justify-center">
                {/* Add horizontal padding so arrows don't overlap text on mobile */}
                <div className="text-center px-10 md:px-0">
                  <h1 className="mx-auto max-w-[22ch] text-white font-extrabold tracking-tight leading-tight whitespace-pre-line drop-shadow text-2xl sm:text-3xl md:text-4xl">
                    {slide.title}
                  </h1>

                  <p className="mx-auto mt-4 max-w-[34ch] text-white/85 uppercase drop-shadow text-[10px] sm:text-xs md:text-sm tracking-[0.22em] md:tracking-[0.28em]">
                    {slide.subtitle}
                  </p>

                  <div className="mt-6 sm:mt-8 flex justify-center">
                    <Link
                      href={slide.ctaHref}
                      className="rounded-full bg-emerald-600 px-6 sm:px-8 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left arrow (smaller + closer on mobile, unchanged on desktop) */}
        <button
          aria-label="Previous slide"
          onClick={() => paginate(-1)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/20 text-white transition grid place-items-center"
        >
          <span className="text-2xl leading-none">‹</span>
        </button>

        {/* Right arrow */}
        <button
          aria-label="Next slide"
          onClick={() => paginate(1)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-11 md:w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur border border-white/20 text-white transition grid place-items-center"
        >
          <span className="text-2xl leading-none">›</span>
        </button>
      </div>
    </section>
  );
}
