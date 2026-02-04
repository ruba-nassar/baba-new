import Link from "next/link";
import { services } from "@/lib/services";

export default function WhatWeDoSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            WHAT WE DO
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-10 bg-emerald-600" />
          <p className="mx-auto mt-8 max-w-3xl text-slate-600 leading-relaxed">
            <strong>Nature Horizon</strong> staff and associates have conducted
            numerous projects, studies, training and capacity-building workshops
            across the Middle East and North Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.slug} // ✅ FIXED: key is on top-level element
                className="border border-slate-200 bg-white shadow-sm"
              >
                <div className="p-8 text-center">
                  <Icon className="mx-auto h-8 w-8 text-emerald-600" />
                  <h3 className="mt-5 text-sm font-semibold text-slate-700 whitespace-pre-line">
                    {s.title}
                  </h3>

                  <div className="mx-auto mt-5 h-px w-16 bg-slate-200" />

                  <Link 
                  href={`/services/${s.slug}`}
                   className="mt-5 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >Read More</Link>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
