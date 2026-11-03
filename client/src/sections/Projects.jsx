
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">MY RECENT WORK</span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects where I turn concepts into practical
            web applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-more">
          <a
            href="https://github.com/sujay-707"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FolderGit2 size={19} />
            Explore More on GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
