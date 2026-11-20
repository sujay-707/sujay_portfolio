
import { ArrowUpRight, Code2 } from "lucide-react";

import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectImageWrap}>
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className={styles.projectImage}
          loading="lazy"
          decoding="async"
        />

        {project.featured && (
          <span className={styles.projectFeatured}>
            Featured Project
          </span>
        )}
      </div>

      <div className={styles.projectContent}>
        <div
          className={styles.projectTech}
          aria-label="Technologies used"
        >
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className={styles.projectLinks}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Code2 size={17} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
