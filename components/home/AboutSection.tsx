import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-800">
              ABOUT NATURE HORIZON
            </h2>

            {/* small green underline */}
            <div className="mt-3 h-[3px] w-14 bg-emerald-600 rounded" />

            <p className="mt-8 text-slate-700 leading-relaxed">
              <span className="font-bold italic">Nature Horizon (NH)</span>
              {", "}
              established to serve environmental protection, waste management,
              water and wastewater, energy, industrial and mining sectors by
              providing environmental, health & safety, and engineering
              consulting services including training and capacity building.
            </p>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Our team brings extensive local, regional, and international
              experience in consultation and practical project support across a
              variety of disciplines.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[280px] sm:w-[420px] sm:h-[360px] lg:w-[520px] lg:h-[440px]">
              <Image
                src="/images/about-illustration.png"
                alt="Environmental illustration"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
