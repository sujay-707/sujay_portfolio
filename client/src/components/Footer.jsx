
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  Phone,
} from "lucide-react";

function Footer() {
  return (
    <footer className="sthala-footer portfolio-footer">
      <div className="footer-content">
        <h2>Let's build something meaningful.</h2>

        <a href="mailto:sujaymundaragi7@gmail.com" className="footer-cta">
          Get in touch
          <ArrowUpRight size={18} />
        </a>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-tagline">
          Turning ideas into functional digital experiences.
        </p>
      </div>

      <div className="footer-watermark" aria-hidden="true">
        SUJAY
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          (c) 2026 Sujay M Mundaragi. All rights reserved.
        </span>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/sujay-mundaragi707"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={17} /> LinkedIn
          </a>

          <a
            href="https://github.com/sujay-707"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={17} /> GitHub
          </a>

          <a href="mailto:sujaymundaragi7@gmail.com">
            <Mail size={17} /> Email
          </a>
        </div>

        <span className="footer-owner">
          <Phone size={15} />
          <a href="tel:+918762338707">+91 87623 38707</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
