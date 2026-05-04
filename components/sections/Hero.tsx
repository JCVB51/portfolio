import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pb-32 md:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="surface-card p-8 md:p-12">
        <div className="max-w-3xl">
          <p className="section-label">
            Computer Science — Information Systems · CSUB
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-balance text-4xl font-semibold tracking-tight text-neutral-100 md:text-5xl"
          >
            Full-stack developer focused on systems that work in the real world.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-400">
            I&apos;m Juan Villacorta, a Computer Science (Information Systems) student at
            CSUB. I build across the stack — APIs, interfaces, and systems — with interests
            in AI, data science, and cybersecurity.
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-neutral-400">
            Open to internships where I can ship real features and learn from experienced
            engineers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="btn-primary"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
