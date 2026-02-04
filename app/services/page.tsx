import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            NH SERVICES
          </h1>
          <div className="mx-auto mt-4 h-[3px] w-12 bg-emerald-600 rounded" />
          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            <span className="font-semibold text-slate-800">NH</span> provides
            consultation and training services in a variety of disciplines.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group"
            >
              <div className="border border-slate-200 bg-white">
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={s.cardImage}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  {/* soft overlay like screenshot */}
                  <div className="absolute inset-0 bg-white/35 group-hover:bg-white/20 transition" />
                </div>

                <div className="px-2 pt-4">
                  <h3 className="text-lg font-medium text-slate-800">
                    {s.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
