import { FaJava } from "react-icons/fa";
import {
  SiCss,
  SiDiagramsdotnet,
  SiDocker,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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

const tools = [
  { name: "VS Code", Icon: VscVscode },
  { name: "Draw.io", Icon: SiDiagramsdotnet },
  { name: "Figma", Icon: SiFigma },
  { name: "Docker", Icon: SiDocker },
] as const;

const technologies = [
  { name: "Java", Icon: FaJava },
  { name: "MySQL", Icon: SiMysql },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Python", Icon: SiPython },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
] as const;

export default function Skills() {
  return (
    <main className="min-h-screen">
      <section className="motion-fade-up mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
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
              className="motion-lift border border-foreground/15 bg-foreground/3 p-6 hover:border-accent/60 sm:p-8"
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

      <section
        aria-labelledby="tools-heading"
        className="border-t border-foreground/10"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-sm font-medium tracking-wide text-accent">
            Workflow
          </p>
          <h2
            id="tools-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Tools Used
          </h2>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="group motion-lift flex items-center gap-4 border border-foreground/15 bg-foreground/3 px-6 py-5 text-lg font-medium hover:border-accent/60"
              >
                <tool.Icon
                  aria-hidden="true"
                  className="motion-image size-7 shrink-0 text-accent"
                />
                {tool.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="tech-stack-heading"
        className="border-t border-foreground/10"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <p className="text-sm font-medium tracking-wide text-accent">
            Technologies
          </p>
          <h2
            id="tech-stack-heading"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Tech Stack
          </h2>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <li
                key={technology.name}
                className="group motion-lift flex items-center gap-4 border border-foreground/15 bg-foreground/3 px-6 py-5 text-lg font-medium hover:border-accent/60"
              >
                <technology.Icon
                  aria-hidden="true"
                  className="motion-image size-7 shrink-0 text-accent"
                />
                {technology.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
