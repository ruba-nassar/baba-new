import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import { Leaf } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800 uppercase">
            {service.title}
          </h1>
          <div className="mx-auto mt-4 h-[3px] w-12 bg-emerald-600 rounded" />
        </div>

        {/* Body */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image left */}
          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src={service.detailImage}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bullets right */}
          <ul className="space-y-4 text-slate-700 leading-relaxed">
            {service.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <Leaf className="mt-1 h-4 w-4 text-emerald-600 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
