const projects = Array.from({ length: 6 }, (_, index) => ({
  title: `Project ${String(index + 1).padStart(2, "0")}`,
  description: "Project details.",
}));

export default function Projects() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
          Selected work spanning responsive websites, Java applications, and
          full-stack projects.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-56 flex-col border border-foreground/15 bg-foreground/3 p-6 transition-colors hover:border-accent/60"
            >
              <p className="text-sm font-medium tracking-wide text-accent">
                Featured work
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                {project.title}
              </h2>
              <p className="mt-4 leading-7 text-foreground/70">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
