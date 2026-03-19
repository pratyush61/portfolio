import React from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mx-auto "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="block text-primary">Pratyush</span>
            <span className="block">Dubey</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            I'm a frontend developer passionate about building modern,
            responsive, and user-friendly web experiences.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span>Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};