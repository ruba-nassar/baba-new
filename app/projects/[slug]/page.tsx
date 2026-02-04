import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[240px] sm:h-[320px] md:h-[460px] rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
              />
           

            </div>

            <p className="mt-6 md:mt-8 text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* RIGHT */}
          <aside className="lg:col-span-1">
            <h1 className="text-lg sm:text-xl md:text-2xl text-slate-900 font-semibold leading-snug">
              {project.title}
            </h1>

            <div className="mt-6 md:mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-0 md:bg-transparent md:border-0 md:rounded-none">
              <div className="space-y-6 md:space-y-8 text-sm text-slate-700">
                <InfoRow
                  label="Category:"
                  value={project.categories.join(", ")}
                  highlight
                />
                <InfoRow label="Client:" value={project.client} />
                <InfoRow label="Country" value={project.country} />
                <InfoRow label="Language" value={project.language} />
                <InfoRow label="Time Period:" value={project.timePeriod} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function InfoRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className="font-bold text-slate-900">{label}</div>
      <div className={highlight ? "mt-2 text-emerald-600" : "mt-2"}>
        {value}
      </div>
    </div>
  );
}
