
import React from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Achievements from "./sections/Achievements";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/utilities.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
