export default function Contact() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
          Based in Winnipeg and open to junior software developer, web
          developer, and full-stack internship opportunities.
        </p>
        <a
          className="mt-10 inline-block border-b border-foreground pb-1 text-base font-medium transition hover:opacity-70"
          href="mailto:hello@example.com"
        >
          Email
        </a>
      </section>
    </main>
  );
}
