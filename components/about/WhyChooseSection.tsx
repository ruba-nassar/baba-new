"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    id: "experts",
    label: "NH Experts",
    content: (
      <>
        <p>
          <span className="font-semibold italic">SA’s</span> strength and
          experience is derived from a team of highly skilled experts with solid
          knowledge in their field.
        </p>
        <p className="mt-4">
          The company’s associates and advisors have implemented and managed a
          large number of projects in diverse environmental specializations such
          as occupational health and safety, HSE systems, waste management,
          environmental and social impact assessments, renewable energy, climate
          change and greenhouse gas emission studies.
        </p>
      </>
    ),
  },
  {
    id: "vision",
    label: "Our Vision",
    content: (
      <p>
        To be a regional leader in environmental and sustainability consulting,
        delivering innovative, practical, and science-based solutions that
        protect natural resources and support sustainable development.
      </p>
    ),
  },
  {
    id: "mission",
    label: "Our Mission",
    content: (
      <p>
        To support public and private sector clients by providing high-quality
        environmental, health, safety, and sustainability services tailored to
        local and international standards.
      </p>
    ),
  },
];

export default function WhyChooseSection() {
  const [activeTab, setActiveTab] = useState("experts");
  const current = TABS.find((t) => t.id === activeTab);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-800">
            WHY CHOOSE NH
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-12 bg-emerald-600 rounded" />
          <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl font-light text-slate-800">
            Our Strength is in Our Specialized Experts
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image (responsive) */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5]">
              <Image
                src="/images/about/why-choose.jpg"
                alt="Why Choose NH"
                fill
                className="object-cover rounded"
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 320px"
              />
            </div>
          </div>

          {/* Tabs + Text */}
          <div>
            {/* Tabs: scroll on mobile, normal on desktop */}
            <div className="-mx-6 px-6 overflow-x-auto lg:overflow-visible border-b border-slate-200">
              <div className="flex w-max lg:w-auto flex-nowrap">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 sm:px-6 py-3 text-sm font-semibold transition whitespace-nowrap
                      ${
                        activeTab === tab.id
                          ? "bg-emerald-600 text-white"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Text box */}
            <div className="mt-6 rounded bg-slate-50 p-5 sm:p-6 md:p-8 text-slate-700 leading-relaxed">
              {current?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
