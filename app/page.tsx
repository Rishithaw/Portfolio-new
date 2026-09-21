export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16 sm:px-10">
        <p className="text-sm font-medium tracking-wide text-foreground/60">
          Rishitha Wickramasinghe
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Software Engineer portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
          I am a Winnipeg-based software developer focused on building responsive websites, Java applications, and database-driven systems. I enjoy turning practical problems into clean, user-friendly software. Currently looking for junior software developer, web developer, or full-stack internship opportunities.
        </p>
        <a
          className="mt-10 w-fit border-b border-foreground pb-1 text-base font-medium transition hover:opacity-70"
          href="mailto:hello@example.com"
        >
          Email
        </a>
      </section>
    </main>
  );
}
