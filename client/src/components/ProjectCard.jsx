
import { ArrowUpRight, Code2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-image"
          loading="lazy"
        />

        {project.featured && (
          <span className="project-featured">Featured Project</span>
        )}
      </div>

      <div className="project-content">
        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo <ArrowUpRight size={17} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={17} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
