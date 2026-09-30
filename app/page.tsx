import Image from "next/image";
import Link from "next/link";

const education = [
  {
    title: "Diploma",
    institution: "Red River College",
    period: "Jan 2025 — April 2026",
    image: "/education/rrc.png",
    link: "https://www.rrc.ca",
  },
  {
    title: "Graduate Diploma in Software Engineering",
    institution: "Institute Of Software Engineering",
    period: "February 2024 — December 2024",
    image: "/education/ijse.png",
    link: "https://www.ijse.lk",
  },
  {
    title: "Certified Master Java Developer",
    institution: "Institute Of Software Engineering",
    period: "August 2024 — April 2025",
    image: "/education/ijse.png",
    link: "https://www.ijse.lk",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-5xl flex-col justify-center gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="motion-fade-up relative z-10 flex-1">
          <p className="text-sm font-medium tracking-wide text-accent">
            Rishitha Wickramasinghe
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Building practical software for real-world problems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
            I am a Winnipeg-based software developer focused on building
            responsive websites, Java applications, and database-driven systems.
            I enjoy turning practical problems into clean, user-friendly
            software. Currently looking for junior software developer, web
            developer, or full-stack internship opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-accent px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-85"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/50"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="motion-fade-in motion-delay-1 relative z-10 w-full max-w-sm shrink-0 lg:max-w-xs">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-1 bg-accent/20 blur-2xl"
          />
          <figure className="relative overflow-hidden border border-foreground/15 bg-foreground/3 shadow-2xl shadow-black/40">
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
        </div>
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
                className="group motion-lift flex flex-col overflow-hidden border border-foreground/15 bg-foreground/3 hover:border-accent/60"
              >
                <Image
                  src={item.image}
                  alt={`${item.institution} — ${item.title}`}
                  width={800}
                  height={450}
                  className="motion-image aspect-video h-auto w-full border-b border-foreground/10 object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-foreground/50">{item.period}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 mb-6 leading-7 text-foreground/70">
                    {item.institution}
                  </p>
                  <a
                    className="mt-auto inline-block w-fit border-b border-accent pb-1 text-sm font-medium transition-colors hover:text-accent"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit website
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
