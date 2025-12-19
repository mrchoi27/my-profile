export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
      style={{ background: 'var(--bg-section-alt)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: 'var(--text-heading)' }}
        >
          스킬
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              style={{ background: 'var(--card-bg)' }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center"
                    style={{ color: 'var(--text-body)' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ background: 'var(--color-primary-light)' }}
                    ></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
