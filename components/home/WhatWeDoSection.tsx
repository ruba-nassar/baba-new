import Link from "next/link";
import { services } from "@/lib/services";

export default function WhatWeDoSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            WHAT WE DO
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-10 bg-emerald-600" />
          <p className="mx-auto mt-6 md:mt-8 max-w-3xl text-slate-600 leading-relaxed text-sm sm:text-base">
            <strong>Nature Horizon</strong> staff and associates have conducted
            numerous projects, studies, training and capacity-building workshops
            across the Middle East and North Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.slug}
                className="border border-slate-200 bg-white shadow-sm rounded-lg overflow-hidden"
              >
                <div className="p-6 md:p-8 text-center">
                  <Icon className="mx-auto h-8 w-8 text-emerald-600" />

                  <h3 className="mt-4 md:mt-5 text-sm font-semibold text-slate-700 whitespace-pre-line">
                    {s.title}
                  </h3>

                  <div className="mx-auto mt-4 md:mt-5 h-px w-16 bg-slate-200" />

                  {/* Bigger tap target on mobile, same look on desktop */}
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-4 md:mt-5 inline-flex items-center justify-center rounded-md px-3 py-2 md:px-0 md:py-0 text-sm font-medium text-emerald-600 hover:text-emerald-700 md:rounded-none"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
