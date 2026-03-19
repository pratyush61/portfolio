import React from "react";
import { ThemeToggle } from "../Components/ThemeToggle.jsx";
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
    <div className="min-h-screen bg-background text-foreground flex overflow-x-hidden flex-col ">
      <ThemeToggle />

      <StarBackground></StarBackground>

      <NavBar></NavBar>

      <HeroSection></HeroSection>

      <About></About>

      <Skills></Skills>

      <Projects></Projects>

      
      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
};
