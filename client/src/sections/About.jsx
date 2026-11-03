
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Award,
} from "lucide-react";

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>
          <h2>
            About <span>Me</span>
          </h2>
          <p>A little about my journey, education and experience.</p>
        </div>

        <div className="about-grid">
          <div className="about-intro">
            <span className="about-icon">
              <Code2 size={25} />
            </span>

            <h3>Building digital experiences with purpose.</h3>

            <p>
              I'm Sujay M Mundaragi, a postgraduate in Computer Applications
              with a strong interest in frontend development and building
              modern web applications.
            </p>

            <p>
              I enjoy turning ideas into responsive, intuitive interfaces
              using React.js and JavaScript. I also have experience working
              with Node.js, Express.js and MongoDB to build full-stack
              applications.
            </p>

            <p>
              Through academic projects and internship experience, I've
              developed a practical understanding of debugging, reusable
              components, problem-solving and collaborative development.
            </p>

            <div className="about-highlight">
              <Award size={20} />
              <div>
                <strong>1st Place - Rapid Build: CodeSprint</strong>
                <span>
                  FOSS Club, New Horizon College of Engineering
                </span>
              </div>
            </div>
          </div>

          <div className="about-details">
            <article className="about-detail-card">
              <div className="about-detail-icon">
                <GraduationCap size={23} />
              </div>

              <div>
                <span className="about-card-label">EDUCATION</span>
                <h3>Master of Computer Applications</h3>
                <p>New Horizon College of Engineering, Bengaluru</p>
                <div className="about-card-meta">
                  <span>2024 - 2026</span>
                  <strong>CGPA: 9.43</strong>
                </div>
              </div>
            </article>

            <article className="about-detail-card">
              <div className="about-detail-icon">
                <GraduationCap size={23} />
              </div>

              <div>
                <span className="about-card-label">EDUCATION</span>
                <h3>Bachelor of Computer Applications</h3>
                <p>KLE PC Jabin Science College, Hubli</p>
                <div className="about-card-meta">
                  <span>2020 - 2023</span>
                  <strong>First Class with Distinction</strong>
                </div>
              </div>
            </article>

            <article className="about-detail-card">
              <div className="about-detail-icon">
                <BriefcaseBusiness size={23} />
              </div>

              <div>
                <span className="about-card-label">
                  INTERNSHIP EXPERIENCE
                </span>
                <h3>Technical Teaching Assistant Intern</h3>
                <p>Jainemo Private Limited (Apna College) | Remote</p>

                <div className="about-card-meta">
                  <span>Sep 2024 - Feb 2025</span>
                  <strong>MERN Stack</strong>
                </div>

                <div className="internship-stats">
                  <div>
                    <strong>5,000+</strong>
                    <span>Student community</span>
                  </div>
                  <div>
                    <strong>285+</strong>
                    <span>Queries resolved</span>
                  </div>
                  <div>
                    <strong>4.57/5</strong>
                    <span>Satisfaction rating</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
