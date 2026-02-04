import React from "react";

export default function AboutStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            ABOUT NATURE HORIZON
          </h2>
        </div>

        <div className="mt-3 h-[3px] w-12 bg-emerald-600 rounded" />

        <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
          Nature Horizon provides environmental consulting for public and private
          clients. We support planning, permitting, compliance, and sustainability
          with clear, science-backed guidance.
        </p>
      </div>
    </section>
  );
}
