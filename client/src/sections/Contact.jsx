
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "sujaymundaragi7@gmail.com",
    href: "mailto:sujaymundaragi7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 87623 38707",
    href: "tel:+918762338707",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: null,
  },
];

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.9H4.96V9.33h2.97v9.57ZM6.45 8.02a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19.04 18.9h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.76V9.33h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.26Z"
      />
    </svg>
  );
}

function GmailLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M3 6.5v11.2c0 .72.58 1.3 1.3 1.3H6V8.2L3 6.5Z"
      />
      <path
        fill="#34A853"
        d="M18 19h1.7c.72 0 1.3-.58 1.3-1.3V6.5l-3 1.7V19Z"
      />
      <path
        fill="#EA4335"
        d="M18 5.3v3.4l-6 4.5-6-4.5V5.3c0-1.05 1.2-1.65 2.05-1.02L12 7.4l3.95-3.12C16.8 3.65 18 4.25 18 5.3Z"
      />
      <path
        fill="#C5221F"
        d="M6 5.3v3.4L3 6.5V5.3c0-1.05 1.2-1.65 2.05-1.02L6 5.3Z"
      />
      <path
        fill="#FBBC04"
        d="M18 5.3v3.4l3-2.2V5.3c0-1.05-1.2-1.65-2.05-1.02L18 5.3Z"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Have an opportunity, project idea or just want to connect?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-message">
            <span className="contact-icon">
              <Send size={25} />
            </span>

            <h3>Let's create something great together.</h3>

            <p>
              I'm interested in frontend development opportunities,
              collaborative projects and connecting with people in tech.
            </p>

            <a
              href="mailto:sujaymundaragi7@gmail.com?subject=Let's%20Connect"
              className="contact-primary-btn"
            >
              Say Hello
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-details">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div className="contact-detail" key={detail.label}>
                  <div className="contact-detail-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <span>{detail.label}</span>

                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      <p>{detail.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social Brand Logos */}
            <div className="contact-socials">
              <a
                href="https://github.com/sujay-707"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <GitHubLogo />
              </a>

              <a
                href="https://www.linkedin.com/in/sujay-mundaragi707"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInLogo />
              </a>

              <a
                href="mailto:sujaymundaragi7@gmail.com"
                aria-label="Gmail"
                title="Gmail"
              >
                <GmailLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
