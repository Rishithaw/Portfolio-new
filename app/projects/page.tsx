import Image from "next/image";

const projects = [
  {
    title: "BetterDrive",
    description: "A driving school management system built to organize students, vehicles, and daily operations in one structured workflow.",
    image: "/projects/driving.jpg",
    sourceUrl: "https://github.com/Rishithaw/Driving_School",
    technologies: ["Java", "JavaFX", "MySQL"],
  },
  {
    title: "Movie Catalog Site",
    description: "A movie search web app focused on clean result browsing, responsive layout behavior, and JavaScript interactions.",
    image: "/projects/movie.jpg",
    sourceUrl: "https://github.com/Rishithaw/Movies",
    technologies: [],
  },
  {
    title: "My Portfolio",
    description: "A responsive portfolio website for presenting my strongest projects, technical skills, and contact information to hiring teams.",
    image: "/projects/portfolio.png",
    sourceUrl: "https://github.com/Rishithaw/Portfolio",
    technologies: [],
  },
  {
    title: "Blog Site",
    description: "A web application for managing blog-style content and practicing full web page structure.",
    image: "/projects/blog.png",
    sourceUrl: "https://github.com/Rishithaw/Final-Project-Web-Dev",
    technologies: [],
  },
  {
    title: "Tic-Tac-Toe",
    description: "A game where the player competes against a program using the Minimax algorithm for decisions.",
    image: "/projects/tictactoe.jpg",
    sourceUrl: "https://github.com/Rishithaw/Tic-Tac-Toe",
    technologies: [],
  },
  {
    title: "Terminal Program",
    description: "A Java inventory tool with login authentication and terminal-based stock management workflows.",
    image: "/projects/terminal.jpeg",
    sourceUrl: "https://github.com/Rishithaw/Stock-Management",
    technologies: [],
  },
] as const;

export default function Projects() {
  return (
    <main className="min-h-screen">
      <section className="motion-fade-up mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
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
              className="group motion-lift flex min-h-56 flex-col overflow-hidden border border-foreground/15 bg-foreground/3 hover:border-accent/60"
            >
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                width={800}
                height={450}
                className="motion-image aspect-video h-auto w-full border-b border-foreground/10 object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium tracking-wide text-accent">
                  Featured work
                </p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-4 leading-7 text-foreground/70">
                  {project.description}
                </p>
                {project.technologies.length > 0 && (
                  <ul
                    className="mt-5 mb-6 flex flex-wrap gap-2"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="border border-foreground/15 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/75"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title}`}
                  className="mt-auto inline-block w-fit border border-accent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground"
                >
                  View Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
