const skills = [
  {
    title: "Custom Java Applications",
    description:
      "Design and develop full-featured applications with Java, including GUI apps using JavaFX.",
  },
  {
    title: "Database Integration",
    description:
      "Build powerful apps backed by MySQL or PostgreSQL for real-time data operations.",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Build complete web applications with React, Next.js, and TypeScript, from database schema to deployed UI.",
  },
  {
    title: "REST API Development",
    description:
      "Design and implement REST API routes for data-driven applications, including authentication and third-party integrations.",
  },
] as const;

export default function Skills() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Skills
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
          Technical skills and tools I use to build websites, applications, and
          database-driven systems.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="border border-foreground/15 bg-foreground/3 p-6 transition-colors hover:border-accent/60 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">
                {skill.title}
              </h2>
              <p className="mt-4 leading-7 text-foreground/70">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
