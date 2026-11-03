
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I use to solve problems and build applications.",
    icon: Code2,
    skills: ["Java", "JavaScript", "SQL", "C"],
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Monitor,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing server-side applications and APIs.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MVC Architecture",
    ],
  },
  {
    title: "Databases",
    description: "Working with relational and NoSQL databases.",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use throughout my development workflow.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Render",
      "Netlify",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">MY TECHNICAL EXPERTISE</span>
          <h2>
            Skills & <span>Technologies</span>
          </h2>
          <p>
            Technologies and tools I use to transform ideas into working
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-icon">
                  <Icon size={23} />
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
