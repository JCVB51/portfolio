type Project = {
  title: string;
  description: string;
  /** Short context tags (e.g. team vs solo, domain). */
  tags?: string[];
  /** Optional one-line contribution for team projects. */
  contribution?: string;
  technologies: string[];
  githubUrl: string;
  /** Omit until you have a deployed URL */
  liveDemoUrl?: string;
};

const projects: Project[] = [
  {
    title: "BlackAegis",
    tags: ["Team project", "Security · messaging"],
    description:
      "Secure real-time messaging for web and desktop: end-to-end encrypted direct and group chat, JWT authentication, Socket.IO delivery, and a zero-trust model where message plaintext never reaches the server.",
    contribution:
      "Contributed primarily to backend architecture and implementation, and also to setup improvements, overall polish, and demo readiness.",
    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "Node.js",
      "Express",
      "Socket.IO",
      "MySQL",
      "Docker",
      "Web Crypto API",
      "JWT",
    ],
    githubUrl: "https://github.com/JCVB51/BlackAegis",
  },
  {
    title: "Personal portfolio",
    description:
      "Multi-page portfolio (Next.js, TypeScript, Tailwind) highlighting coursework, skills, and projects — tuned for recruiter scanning.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/JCVB51",
  },
  {
    title: "Hackathon / team build — details soon",
    description:
      "Built during CSUB Hackathon participation (May 2026). Summary, stack, and live link to add after the event artifacts are polished.",
    technologies: ["TBD"],
    githubUrl: "https://github.com/JCVB51",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="section-shell"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Projects</p>
        <h1 id="projects-heading" className="section-title max-w-2xl">
          Selected work — built for clarity and impact
        </h1>
        <p className="section-copy max-w-2xl">
          Each card summarizes purpose and stack so hiring teams can scan outcomes,
          tools, and links to code and demos in seconds.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title}>
              <article className="surface-card flex h-full flex-col p-6 hover:border-neutral-600">
                <h2 className="text-lg font-semibold text-neutral-100">{project.title}</h2>
                {project.tags?.length ? (
                  <ul
                    className="mt-2 flex flex-wrap gap-2"
                    aria-label={`Tags for ${project.title}`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="inline-flex rounded border border-neutral-800/90 bg-neutral-950/40 px-2 py-0.5 text-xs font-medium text-neutral-500">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-3 flex flex-1 flex-col gap-3">
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                  {project.contribution ? (
                    <p className="text-sm leading-relaxed text-neutral-500">
                      <span className="font-medium text-neutral-400">Role: </span>
                      {project.contribution}
                    </p>
                  ) : null}
                </div>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`Technologies for ${project.title}`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="chip text-xs">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-800 pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-sm font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-[5px] transition duration-200 hover:text-neutral-100 hover:decoration-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                  >
                    GitHub
                  </a>
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm text-sm font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-[5px] transition duration-200 hover:text-neutral-100 hover:decoration-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                    >
                      Live demo
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
