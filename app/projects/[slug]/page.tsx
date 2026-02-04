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
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT: image + description */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[360px] md:h-[460px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <p className="mt-8 text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* RIGHT: details */}
          <aside className="lg:col-span-1">
            <h1 className="text-slate-900 font-semibold leading-snug">
              {project.title}
            </h1>

            <div className="mt-8 space-y-8 text-sm text-slate-700">
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
