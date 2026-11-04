
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  Phone,
} from "lucide-react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>Let's build something meaningful.</h2>

        <a
          href="mailto:sujaymundaragi7@gmail.com"
          className={styles.footerCta}
        >
          Get in touch
          <ArrowUpRight size={18} />
        </a>

        <nav
          className={styles.footerLinks}
          aria-label="Footer navigation"
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className={styles.footerTagline}>
          Turning ideas into functional digital experiences.
        </p>
      </div>

      <div
        className={styles.footerWatermark}
        aria-hidden="true"
      >
        SUJAY
      </div>

      <div className={styles.footerBottom}>
        <span className={styles.footerCopyright}>
          © 2026 Sujay M Mundaragi. All rights reserved.
        </span>

        <div className={styles.footerSocial}>
          <a
            href="https://www.linkedin.com/in/sujay-mundaragi707"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={17} />
            LinkedIn
          </a>

          <a
            href="https://github.com/sujay-707"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={17} />
            GitHub
          </a>

          <a
            href="mailto:sujaymundaragi7@gmail.com"
            aria-label="Email"
          >
            <Mail size={17} />
            Email
          </a>
        </div>

        <span className={styles.footerOwner}>
          <Phone size={15} />
          <a href="tel:+918762338707">
            +91 87623 38707
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
