export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "React와 Node.js를 사용한 풀스택 전자상거래 플랫폼",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "팀 협업을 위한 실시간 작업 관리 애플리케이션",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "실시간 날씨 정보를 제공하는 대시보드",
      tech: ["React", "Tailwind CSS", "API Integration"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
      style={{ background: 'var(--bg-section-light)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: 'var(--text-heading)' }}
        >
          프로젝트
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ background: 'var(--card-bg-alt)' }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: 'var(--text-heading)' }}
              >
                {project.title}
              </h3>
              <p className="mb-4" style={{ color: 'var(--text-body)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: 'var(--color-primary)',
                      color: '#ffffff',
                      opacity: 0.9,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-primary)' }}
              >
                자세히 보기 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
