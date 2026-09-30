export default function Contact() {
  return (
    <main className="min-h-screen">
      <section className="motion-fade-up mx-auto max-w-5xl px-6 py-16 sm:px-10">
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

        <form className="mt-12 border border-foreground/15 bg-foreground/3 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="w-full border border-foreground/20 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full border border-foreground/20 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contact-number"
                className="mb-2 block text-sm font-medium"
              >
                Contact Number
              </label>
              <input
                id="contact-number"
                name="contactNumber"
                type="tel"
                autoComplete="tel"
                placeholder="(204) 555-0123"
                className="w-full border border-foreground/20 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="comments"
                className="mb-2 block text-sm font-medium"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={6}
                placeholder="How can I help?"
                className="w-full resize-y border border-foreground/20 bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="submit"
              className="bg-accent px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-85"
            >
              Submit
            </button>
            <button
              type="reset"
              className="border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/50"
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
