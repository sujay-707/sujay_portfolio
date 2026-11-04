
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Award,
} from "lucide-react";

import styles from "./About.module.css";

export default function About() {
  return (
    <section
      className={`${styles.aboutSection} section-padding`}
      id="about"
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            A little about my journey, education and experience.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutIntro}>
            <span className={styles.aboutIcon}>
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


          </div>

          <div className={styles.aboutDetails}>
            <article className={styles.aboutDetailCard}>
              <div className={styles.aboutDetailIcon}>
                <GraduationCap size={23} />
              </div>

              <div>
                <span className={styles.aboutCardLabel}>EDUCATION</span>

                <h3>Master of Computer Applications</h3>

                <p>New Horizon College of Engineering, Bengaluru</p>

                <div className={styles.aboutCardMeta}>
                  <span>2024 - 2026</span>
                  <strong>CGPA: 9.43</strong>
                </div>
              </div>
            </article>

            <article className={styles.aboutDetailCard}>
              <div className={styles.aboutDetailIcon}>
                <GraduationCap size={23} />
              </div>

              <div>
                <span className={styles.aboutCardLabel}>EDUCATION</span>

                <h3>Bachelor of Computer Applications</h3>

                <p>KLE PC Jabin Science College, Hubli</p>

                <div className={styles.aboutCardMeta}>
                  <span>2020 - 2023</span>
                  <strong>First Class with Distinction</strong>
                </div>
              </div>
            </article>

            <article className={styles.aboutDetailCard}>
              <div className={styles.aboutDetailIcon}>
                <BriefcaseBusiness size={23} />
              </div>

              <div>
                <span className={styles.aboutCardLabel}>
                  INTERNSHIP EXPERIENCE
                </span>

                <h3>Technical Teaching Assistant Intern</h3>

                <p>Jainemo Private Limited</p>

                <div className={styles.aboutCardMeta}>
                  <span>Sep 2024 - Feb 2025</span>
                  <strong>Remote</strong>
                </div>

                <div className={styles.internshipStats}>
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
