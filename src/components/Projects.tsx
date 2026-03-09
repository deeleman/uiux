import { Code, GitBranch, BookOpen, GraduationCap } from "lucide-react";
import { projects } from "../data/content";

const icons = [Code, GitBranch, BookOpen, GraduationCap];

export function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section__label">Work</p>
      <h2 className="section__heading">Projects</h2>
      <div className="projects__grid">
        {projects.map((project, i) => {
          const Icon = icons[i % icons.length];
          return (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card glow-card"
            >
              <div className="project-card__icon">
                <Icon size={22} />
              </div>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__description">
                {project.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
