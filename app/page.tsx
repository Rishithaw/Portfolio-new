import Image from "next/image";

const education = [
  {
    title: "Diploma",
    institution: "Red River College",
    period: "Jan 2025 — April 2026",
  },
  {
    title: "Graduate Diploma in Software Engineering",
    institution: "Institute Of Software Engineering",
    period: "February 2024 — December 2024",
  },
  {
    title: "Certified Master Java Developer",
    institution: "Institute Of Software Engineering",
    period: "August 2024 — April 2025",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-5xl flex-col justify-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wide text-accent">
            Rishitha Wickramasinghe
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Software Engineer portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
            I am a Winnipeg-based software developer focused on building
            responsive websites, Java applications, and database-driven systems.
            I enjoy turning practical problems into clean, user-friendly
            software. Currently looking for junior software developer, web
            developer, or full-stack internship opportunities.
          </p>
          <a
            className="mt-10 inline-block w-fit border-b border-accent pb-1 text-base font-medium transition-colors hover:text-accent"
            href="mailto:hello@example.com"
          >
            Email
          </a>
        </div>

        <figure className="w-full max-w-sm shrink-0 overflow-hidden border border-foreground/15 bg-foreground/3 shadow-2xl shadow-black/30 lg:max-w-xs">
          <Image
            src="/Profile.png"
            alt="Portrait of Rishitha Wickramasinghe"
            width={1024}
            height={1024}
            className="aspect-4/5 h-auto w-full object-cover"
            priority
          />
          <figcaption className="border-t border-foreground/10 px-4 py-3 text-sm text-foreground/60">
            Rishitha Wickramasinghe
          </figcaption>
        </figure>
      </section>

      <section
        aria-labelledby="education-heading"
        className="border-t border-foreground/10"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="text-sm font-medium tracking-wide text-accent">
            Background
          </p>
          <h2
            id="education-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Education
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.title}
                className="border border-foreground/15 bg-foreground/3 p-6 transition-colors hover:border-accent/60"
              >
                <p className="text-sm text-foreground/50">{item.period}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-foreground/70">
                  {item.institution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
