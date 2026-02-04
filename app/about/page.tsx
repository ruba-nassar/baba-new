import Image from "next/image";
import Link from "next/link";
import WhyChooseSection from "@/components/about/WhyChooseSection";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ABOUT SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left text */}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-800">
                ABOUT NATURE HORIZON
              </h1>

              <div className="mt-3 h-[3px] w-14 bg-emerald-600 rounded" />

              <p className="mt-6 md:mt-8 text-slate-700 leading-relaxed">
                <span className="font-bold italic">
                  Nature Horizon for Environmental Consulting
                </span>
                {", "}
                established to serve environmental protection, hazardous and
                non-hazardous waste management, water and wastewater, energy, oil
                and gas, industrial and mining sectors by providing
                environmental, health and safety and engineering consulting
                services including training and capacity building.
              </p>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Our team is built on extensive local, regional, and
                international experience in providing consultation and training
                services across a variety of disciplines—tailored to meet the
                needs of each client.
              </p>

              <div className="mt-7 md:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 transition"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Right image (responsive + smaller on desktop) */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] aspect-square">
                <Image
                  src="/images/about/about-hero.png"
                  alt="Nature Horizon - About"
                  fill
                  className="object-contain"
                  priority
                  sizes="(min-width: 1024px) 440px, (min-width: 640px) 380px, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-14 md:pb-20">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-800">
              ACCREDITATIONS
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-emerald-600 rounded" />
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <AccredCard>
              <span className="font-semibold italic">Nature Horizon</span> is
              classified as a Grade “A” Environmental Consulting firm by the
              General Tenders Directorate (GTD), Jordan.
            </AccredCard>

            <AccredCard>
              <span className="font-semibold italic">Nature Horizon</span> is
              accredited by the Jordanian Ministry of Environment to conduct
              EIAs and Environmental Audits.
            </AccredCard>
          </div>
        </div>
      </section>

      <WhyChooseSection />
    </main>
  );
}

function AccredCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl md:rounded-full border-2 border-blue-700 px-6 sm:px-10 py-6 sm:py-8 text-center text-slate-700 leading-relaxed">
      {children}
    </div>
  );
}
