"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Project } from "@/lib/projects";
import { Link2, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  items: Project[];
  title?: string;
  subtitle?: string;
};

export default function CurrentProjectsSection({
  items,
  title = "OUR CURRENT PROJECTS",
  subtitle = "",
}: Props) {
  const visible = 3;

  const maxIndex = Math.max(0, items.length - visible);
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="bg-[#243f8f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-10 bg-white/90 rounded" />
          <p className="mt-8 text-sm md:text-base text-white/90 font-semibold">
            {subtitle}
          </p>
        </div>

        {/* Controls + Carousel */}
        <div className="mt-12 relative">
          {/* Arrows */}
          <div className="absolute -top-12 right-0 flex items-center gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous projects"
              className="h-9 w-9 rounded-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center shadow"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              aria-label="Next projects"
              className="h-9 w-9 rounded-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center shadow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translateX(calc(-${index} * (360px + 2rem)))`,
              }}
            >
              {items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative shrink-0 w-[360px]">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="360px"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Hover content */}
        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label={`Open ${project.title} details`}
        >
          <span className="h-12 w-12 rounded-full bg-white/90 grid place-items-center shadow">
            <Link2 className="h-6 w-6 text-slate-900" />
          </span>

          <span className="text-white font-semibold tracking-wide text-sm md:text-base text-center px-3">
            {project.title}
          </span>
        </Link>
      </div>
    </div>
  );
}
