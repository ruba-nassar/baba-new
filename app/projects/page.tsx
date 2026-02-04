import ProjectsGallery from "@/components/projects/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            SA PROJECTS
          </h1>
          <div className="mx-auto mt-4 h-[3px] w-12 bg-emerald-600 rounded" />
        </div>

        <div className="mt-10">
          <ProjectsGallery />
        </div>
      </section>
    </main>
  );
}
