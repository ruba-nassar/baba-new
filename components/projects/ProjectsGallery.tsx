"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projectCategories, projects } from "@/lib/projects";

export default function ProjectsGallery() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>(
    "Show All"
  );

  const filtered = useMemo(() => {
    if (active === "Show All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <div>
      {/* Filter buttons: scroll on mobile, same on desktop */}
      <div className="-mx-6 px-6 overflow-x-auto md:overflow-visible">
        <div className="flex w-max md:w-auto flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 pb-2 md:pb-0">
          {projectCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative whitespace-nowrap px-4 md:px-5 py-2 text-sm font-semibold shadow-sm border transition
                  ${
                    isActive
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-[#1f1f1f] text-white border-[#1f1f1f] hover:bg-black"
                  }`}
              >
                {cat}

                {/* pointer only on md+ so it doesn’t get clipped while scrolling */}
                {isActive && (
                  <span className="hidden md:block absolute left-1/2 -bottom-2 h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-emerald-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative overflow-hidden bg-slate-100 rounded-lg"
          >
            <div className="relative h-[200px] sm:h-[240px] md:h-[220px] w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                priority={false}
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            {/* Overlay: always visible on mobile (touch), hover on desktop */}
            <div className="absolute inset-0 bg-black/35 md:bg-black/0 md:group-hover:bg-black/45 transition" />

            <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <ExternalLink className="h-8 w-8 text-white" />
                <div className="text-white font-semibold leading-snug">
                  {p.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
