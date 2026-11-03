
import {
    ArrowDown,
    ArrowUpRight,
    Download,
    MapPin,
    Atom,
    Sparkles,
} from "lucide-react";
export default function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-availability">
                        <span className="availability-dot"></span>
                        Available for opportunities
                    </div>

                    <p className="hero-greeting">Hello, I'm</p>

                    <h1>
                        Sujay M<span> Mundaragi.</span>
                    </h1>

                    <h2>
                        Frontend Developer
                        <span className="hero-heading-accent"> & React.js Enthusiast</span>
                    </h2>

                    <p className="hero-description">
                        I build responsive, user-friendly web applications with a focus on
                        clean interfaces, reusable components and meaningful user
                        experiences. I also enjoy working across the full stack.
                    </p>

                    <div className="hero-location">
                        <MapPin size={17} />
                        Bengaluru, India
                    </div>

                    <div className="hero-actions">
                        <a href="#projects" className="hero-primary-btn">
                            View My Work
                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href="/Sujay-M-Resume.pdf"
                            className="hero-secondary-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Resume
                            <Download size={17} />
                        </a>
                    </div>

                    <a href="#about" className="hero-scroll">
                        Scroll to explore
                        <ArrowDown size={16} />
                    </a>
                </div>

                <div className="hero-visual">
                    <div className="hero-visual-card">
                        <div className="hero-card-top">
                            <span className="hero-card-dot"></span>
                            <span className="hero-card-dot"></span>
                            <span className="hero-card-dot"></span>
                            <span className="hero-card-label">developer.js</span>
                        </div>

                        <div className="hero-code">
                            <p>
                                <span className="code-purple">const</span> developer = {"{"}
                            </p>
                            <p className="code-indent">
                                name: <span className="code-green">"Sujay M Mundaragi"</span>,
                            </p>
                            <p className="code-indent">
                                role: <span className="code-green">"Frontend Developer"</span>,
                            </p>
                            <p className="code-indent">skills: [</p>
                            <p className="code-indent code-deep">
                                <span className="code-orange">"React.js"</span>,
                                <span className="code-orange"> "JavaScript"</span>,
                            </p>
                            <p className="code-indent code-deep">
                                <span className="code-orange">"Node.js"</span>,
                                <span className="code-orange"> "MongoDB"</span>
                            </p>
                            <p className="code-indent">],</p>
                            <p className="code-indent">
                                location: <span className="code-green">"Bengaluru, India"</span>
                            </p>
                            <p>{"};"}</p>
                        </div>

                        <div className="hero-card-bottom">
                            <span className="hero-status-indicator"></span>
                            Open to learning & building
                        </div>
                    </div>

                    <div className="hero-floating-tag hero-tag-one">
                        <Atom size={18} /> React.js
                    </div>

                    <div className="hero-floating-tag hero-tag-two">
                        <Sparkles size={18} /> Building ideas
                    </div>
                </div>
            </div>
        </section>
    );
}
