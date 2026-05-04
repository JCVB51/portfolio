type SkillCategory = {
  title: string;
  blurb: string;
  items: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    blurb: "Core languages for systems, web, and data work.",
    items: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "PHP",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Frameworks & libraries",
    blurb: "Frontend and backend stacks I use in coursework and projects.",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Tools & platforms",
    blurb: "Day-to-day tooling for development and deployment.",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "IntelliJ",
      "DigitalOcean",
      "Vim",
    ],
  },
  {
    title: "Databases",
    blurb: "Persistence layers I’ve worked with academically and in projects.",
    items: ["MySQL", "SQLite", "NoSQL"],
  },
  {
    title: "Concepts & systems",
    blurb: "Theory and architecture recruiters often screen for.",
    items: [
      "REST APIs",
      "WebSockets",
      "JWT auth",
      "Client–server architecture",
      "Algorithms & data structures",
      "Operating systems",
      "Networking",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="section-shell"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label">Skills</p>
        <h2 id="skills-heading" className="section-title max-w-2xl">
          Technical breadth across languages, stacks, and fundamentals
        </h2>
        <p className="section-copy max-w-2xl">
          Organized for quick scanning — depth grows through coursework, clubs, and
          builds.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="surface-card p-6 hover:border-neutral-600"
            >
              <h3 className="text-base font-semibold text-neutral-100">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {category.blurb}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={category.title}>
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="chip">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
