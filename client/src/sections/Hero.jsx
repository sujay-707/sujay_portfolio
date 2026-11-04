
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  Sparkles,
  Camera,
  RotateCcw,
  Code2,
} from "lucide-react";

import styles from "./Hero.module.css";

const technologies = [
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/181717",
    className: "github",
  },
  {
    name: "HTML5",
    logo: "https://cdn.simpleicons.org/html5/E34F26",
    className: "html",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
    className: "javascript",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
    className: "mongodb",
  },
  {
    name: "Postman",
    logo: "https://cdn.simpleicons.org/postman/FF6C37",
    className: "postman",
  },
  {
    name: "Netlify",
    logo: "https://cdn.simpleicons.org/netlify/00C7B7",
    className: "netlify",
  },
];

function TechnologyOrbit() {
  return (
    <div className={styles.techOrbit} aria-label="Technologies">
      {technologies.map((technology) => (
        <span
          key={technology.name}
          className={`${styles.techIcon} ${styles[technology.className]}`}
        >
          <img
            src={technology.logo}
            alt={technology.name}
          />
        </span>
      ))}
    </div>
  );
}

function DeveloperCode({ onShowPhoto }) {
  return (
    <div className={styles.profileBack}>
      <div className={styles.codeCard}>
        <div className={styles.codeCardTop}>
          <div className={styles.codeDots}>
            <span />
            <span />
            <span />
          </div>

          <span>developer.js</span>
        </div>

        <div className={styles.codeContent}>
          <p>
            <span className={styles.codePurple}>const</span> developer = {"{"}
          </p>

          <p className={styles.codeIndent}>
            name:{" "}
            <span className={styles.codeGreen}>
              "Sujay M Mundaragi"
            </span>,
          </p>

          <p className={styles.codeIndent}>
            role:{" "}
            <span className={styles.codeGreen}>
              "Software Developer"
            </span>,
          </p>

          <p className={styles.codeIndent}>skills: [</p>

          <p className={styles.codeDeep}>
            <span className={styles.codeOrange}>"Java"</span>,
            <span className={styles.codeOrange}> "JavaScript"</span>,
          </p>

          <p className={styles.codeDeep}>
            <span className={styles.codeOrange}>"React.js"</span>,
            <span className={styles.codeOrange}> "Node.js"</span>,
          </p>

          <p className={styles.codeDeep}>
            <span className={styles.codeOrange}>"MongoDB"</span>,
            <span className={styles.codeOrange}> "MySQL"</span>
          </p>

          <p className={styles.codeIndent}>],</p>

          <p className={styles.codeIndent}>
            location:{" "}
            <span className={styles.codeGreen}>
              "Bengaluru, India"
            </span>
          </p>

          <p>{"};"}</p>
        </div>

        <div className={styles.codeCardBottom}>
          <span className={styles.availabilityDot} />
          Open to learning & building
        </div>

        <button
          type="button"
          className={styles.flipButton}
          onClick={onShowPhoto}
          aria-label="Return to profile photo"
        >
          <Camera size={18} />
          View Photo
          <RotateCcw size={17} />
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  const [showCode, setShowCode] = useState(true);

  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroContainer}>

        {/* LEFT CONTENT */}
        <div className={styles.heroContent}>
          <div className={styles.heroAvailability}>
            <span className={styles.availabilityDot} />
            Available for opportunities
          </div>

          <p className={styles.heroGreeting}>Hello, I'm</p>

          <h1>
            Sujay M<span> Mundaragi.</span>
          </h1>

          <h2>
            Software Developer
            <span className={styles.heroHeadingAccent}>
              {" "} | Frontend & Full Stack
            </span>
          </h2>

          <p className={styles.heroDescription}>
            I build responsive web applications and practical software
            solutions using modern technologies. I enjoy developing
            user-friendly interfaces, building APIs and working with
            databases to create reliable applications.
          </p>

          <div className={styles.heroLocation}>
            <MapPin size={17} />
            Bengaluru, India
          </div>

          <div className={styles.heroActions}>
            <a
              href="#projects"
              className={styles.heroPrimaryBtn}
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/Sujay-M-Resume.pdf"
              className={styles.heroSecondaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <Download size={17} />
            </a>
          </div>

          <a href="#about" className={styles.heroScroll}>
            Scroll to explore
            <ArrowDown size={16} />
          </a>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.heroVisual}>
          <div
            className={`${styles.profileFlipCard} ${
              showCode ? styles.flipped : ""
            }`}
          >
            <div className={styles.profileFlipInner}>

              {/* PHOTO SIDE */}
              <div className={styles.profileFront}>
                <div className={styles.photoFrame}>
                  <div className={styles.photoArea}>
                    <img
                      src="/profile-photo.jpeg"
                      alt="Portrait of Sujay M Mundaragi"
                      className={styles.profilePhoto}
                    />

                    <TechnologyOrbit />
                  </div>

                  {/* SIGNATURE */}
                  <div className={styles.signatureArea}>
                    <img
                      src="/sujaylogo.png"
                      alt="Sujay signature"
                      className={styles.signatureImage}
                    />
                  </div>

                  {/* FLIP BUTTON */}
                  <button
                    type="button"
                    className={styles.flipButton}
                    onClick={() => setShowCode(true)}
                    aria-label="View developer code"
                  >
                    <Code2 size={18} />
                    View Code
                    <RotateCcw size={17} />
                  </button>
                </div>
              </div>

              {/* CODE SIDE */}
              <DeveloperCode
                onShowPhoto={() => setShowCode(false)}
              />

            </div>
          </div>

          {/* BUILDING IDEAS BADGE */}
          <div
            className={`${styles.heroFloatingTag} ${styles.heroTagTwo}`}
          >
            <Sparkles size={18} />
            Building ideas
          </div>
        </div>

      </div>
    </section>
  );
}
