
import {
  Award,
  Trophy,
  Camera,
  ExternalLink,
} from "lucide-react";

import styles from "./Achievements.module.css";

const achievements = [
  {
    id: 1,
    title: "2nd Rank – MCA",
    organization: "New Horizon College of Engineering",
    detail: "Academic Recognition · Award Ceremony",
    category: "Academic Achievement",
    image: "/achievements/mca-award.jpeg",
    imageAlt: "MCA second rank award ceremony",
    icon: Camera,
    link: "https://www.instagram.com/reel/DfKUMuwTJvC/",
    linkLabel: "Watch on Instagram",
    visual: "mca",
  },
  {
    id: 2,
    title: "1st Place – Rapid Build: CodeSprint",
    organization: "FOSS Club · New Horizon College of Engineering",
    detail: "MCA · 3-hour Mini Project Challenge · 05 December 2025",
    category: "Hackathon Winner",
    image: "/achievements/codesprint-certificate.jpeg",
    imageAlt: "Rapid Build CodeSprint first prize certificate",
    icon: Trophy,
    link: "https://www.linkedin.com/posts/sujay-mundaragi707_hackathon-codesprint-foss-ugcPost-7426540987222614016-GTdC/",
    linkLabel: "View on LinkedIn",
    visual: "codesprint",
  },
  {
    id: 3,
    title: "Best Cultural Student Award",
    organization: "KLE PC Jabin Science College, Hubli",
    detail: "BCA · Academic Year 2022–2023",
    category: "Cultural Excellence",
    image: "/achievements/bca-award.jpeg",
    imageAlt: "Best Cultural Student Award, BCA",
    icon: Award,
    link: null,
    linkLabel: "Award Recognition",
    visual: "cultural",
  },
];

export default function Achievements() {
  return (
    <section
      className={`${styles.achievementsSection} section-padding`}
      id="achievements"
    >
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-eyebrow">
            ACADEMIC & CAMPUS HIGHLIGHTS
          </span>

          <h2>
            Selected <span>Highlights</span>
          </h2>

          <p>
            A few moments worth sharing from my academic journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            const cardContent = (
              <>
                {/* Achievement Image */}
                <div
                  className={`${styles.achievementVisual} ${
                    styles[achievement.visual]
                  }`}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.imageAlt}
                    className={styles.achievementImage}
                    loading="lazy"
                  />

                  <span className={styles.achievementCategory}>
                    {achievement.category}
                  </span>
                </div>

                {/* Achievement Details */}
                <div className={styles.achievementContent}>
                  <div className={styles.achievementTitleRow}>
                    <h3>{achievement.title}</h3>
                    <ExternalLink size={18} />
                  </div>

                  <p className={styles.achievementOrganization}>
                    {achievement.organization}
                  </p>

                  <p className={styles.achievementDetail}>
                    {achievement.detail}
                  </p>

                  {/* Card Footer */}
                  <div className={styles.achievementFooter}>
                    <span>
                      <Icon size={16} />
                      {achievement.linkLabel}
                    </span>

                    {achievement.link && (
                      <span className={styles.viewArrow}>↗</span>
                    )}
                  </div>
                </div>
              </>
            );

            return achievement.link ? (
              <a
                key={achievement.id}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.achievementCard}
                aria-label={`${achievement.title} – ${achievement.linkLabel}`}
              >
                {cardContent}
              </a>
            ) : (
              <article
                key={achievement.id}
                className={styles.achievementCard}
              >
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
