import { RESUME_PDF_HREF } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="section-shell"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">About</p>
        <h2 id="about-heading" className="section-title">
          Background, focus, and direction
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-100">
                Professional summary
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-neutral-400">
                Computer Science student with a practical interest in full-stack development,
                relational databases, and data analysis grounded in coursework and builds. I’m
                also developing skills in computer networks and how networked systems behave in
                real deployments. I focus on readable design, disciplined implementation, and
                outcomes that teammates can rely on.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-100">
                Currently learning
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-pretty leading-relaxed text-neutral-400 marker:text-neutral-500">
                <li>
                  Designing and consuming REST APIs, including auth flows common in modern web
                  applications.
                </li>
                <li>
                  Client–server architecture and backend development patterns for layered,
                  maintainable services.
                </li>
                <li>
                  Database-driven application design — modeling, querying, and integration with
                  application logic.
                </li>
                <li>
                  Core networking vocabulary and concepts that support troubleshooting and sound
                  system design decisions.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-100">
                Highlights
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-pretty leading-relaxed text-neutral-400 marker:text-neutral-500">
                <li>
                  Completed several substantive projects outside of routine assignments —
                  reinforcing software development fundamentals, disciplined problem-solving, and
                  applying classroom concepts in working code.
                </li>
                <li>
                  Second place, CSUB Coding Cup (upper division), Spring 2026.
                </li>
                <li>Member, Software Engineering Club (CSUB).</li>
                <li>Participant, CSUB Hackathon (May 2026).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-100">
                Goals
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-pretty leading-relaxed text-neutral-400 marker:text-neutral-500">
                <li>
                  Contribute to real products and services where thoughtful design, stability, and
                  maintainability matter.
                </li>
                <li>
                  Deepen proficiency in databases, networked systems, and full-stack workflows
                  through structured learning and accountable delivery.
                </li>
                <li>
                  Join an internship where I learn from practicing engineers while supporting
                  day-to-day engineering work at a steady, professional cadence.
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="surface-card p-6">
              <h3 className="text-base font-semibold text-neutral-100">
                At a glance
              </h3>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Education
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-300">
                    California State University, Bakersfield · Computer Science (Information
                    Systems)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Expected graduation
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-300">
                    Spring 2027
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Availability
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-300">
                    Seeking internships · flexible on timing (update if needed).
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-neutral-300">
                    Bakersfield, CA · open to remote or hybrid.
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                <a href={RESUME_PDF_HREF} className="btn-primary">
                  Download résumé (PDF)
                </a>
                <a href="/contact" className="btn-secondary">
                  Contact me
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
