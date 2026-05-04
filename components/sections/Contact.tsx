"use client";

import type { FormEvent } from "react";
import { RESUME_PDF_HREF } from "@/lib/site";

type QuickLink = {
  label: string;
  href: string;
  hint?: string;
};

const quickLinks: QuickLink[] = [
  {
    label: "Email",
    href: "mailto:juanvill2204@gmail.com",
    hint: "Fastest way to reach me for roles or introductions",
  },
  {
    label: "GitHub",
    href: "https://github.com/JCVB51",
    hint: "Repositories and ongoing work",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-villacorta-747372359",
    hint: "Background and education",
  },
  {
    label: "Résumé (PDF)",
    href: RESUME_PDF_HREF,
    hint: "One-page overview for recruiters",
  },
];

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="contact"
      className="section-shell"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="section-label">Contact</p>
            <h1 id="contact-heading" className="section-title">
              Let&apos;s talk about internships and early-career roles
            </h1>
            <p className="section-copy">
              Open to internships and early-career conversations aligned with full-stack or
              systems-oriented teams. Reach out by email or LinkedIn — I respond promptly.
            </p>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-neutral-100">
              Reach me directly
            </h2>
            <ul className="mt-4 space-y-4">
              {quickLinks.map(({ label, href, hint }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="surface-card group block rounded-xl p-4 hover:border-neutral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                  >
                    <span className="font-medium text-neutral-100 transition-colors duration-200 group-hover:text-neutral-200">
                      {label}
                    </span>
                    {hint ? (
                      <span className="mt-1 block text-sm text-neutral-500">{hint}</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6 md:p-8">
            <h2 className="text-lg font-semibold text-neutral-100">Send a message</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Preview layout only — connect an API route or form provider when you are ready
              to accept submissions from this page.
            </p>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Juan Villacorta"
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2.5 text-sm text-neutral-100 outline-none transition duration-200 placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-600/80"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="juanvill2204@gmail.com"
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2.5 text-sm text-neutral-100 outline-none transition duration-200 placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-600/80"
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-neutral-300">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity — …"
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2.5 text-sm text-neutral-100 outline-none transition duration-200 placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-600/80"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Brief context, role, or timeline…"
                  className="mt-2 w-full resize-y rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2.5 text-sm text-neutral-100 outline-none transition duration-200 placeholder:text-neutral-600 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-600/80"
                />
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
