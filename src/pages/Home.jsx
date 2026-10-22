 
import React from "react";
import { StarBackground } from "../Components/StarBackground.jsx";
import { NavBar } from "../Components/NavBar.jsx";
import { HeroSection } from "../Components/HeroSection.jsx";
import { About } from "../Components/About.jsx";
import { Skills } from "../Components/Skills.jsx";
import { Projects } from "../Components/Projects.jsx";
import { Contact } from "../Components/Contact.jsx";
import { Footer } from "../Components/Footer.jsx";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex overflow-x-hidden flex-col">
      <StarBackground />

      <div className="relative z-10 flex flex-col">
        <NavBar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
