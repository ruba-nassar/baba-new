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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-800">
            WHY CHOOSE NH
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-12 bg-emerald-600 rounded" />
          <p className="mt-6 text-2xl font-light text-slate-800">
            Our Strength is in Our Specialized Experts
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/about/why-choose.jpg"
              alt="Why Choose SA"
              width={420}
              height={520}
              className="object-cover rounded"
            />
          </div>

          {/* Tabs + Text */}
          <div>
            {/* Tabs */}
            <div className="flex border-b border-slate-200">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-semibold transition
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

            {/* Text box */}
            <div className="mt-6 rounded bg-slate-50 p-8 text-slate-700 leading-relaxed">
              {current?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
