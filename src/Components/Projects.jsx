import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Developer Portfolio",
    description:
      "A modern portfolio website showcasing projects and skills with smooth animations and a responsive design using React and Tailwind CSS. Focused on delivering an engaging user experience.",
    image: "/images/portfolio.png",
    tags: ["React", "JavaScript", "Bootstrap", "Tailwind CSS"],
    demoUrl: "https://portfolio-jet-ten-jjtyz5uxhe.vercel.app/",
    githubUrl: "https://github.com/pratyush61/portfolio",
  },
  {
    id: 2,
    title: "Nike Landing Page",
    description:
      "A dynamic Nike landing page clone showcasing smooth animations with GSAP and a responsive design using Tailwind CSS. Focused on delivering an engaging user experience with interactive elements and a sleek interface.",
    image: "/images/Nike.png",
    tags: ["React", "GSAP", "Tailwind CSS"],
    demoUrl: "https://nike-landing-page-one-rose.vercel.app/",
    githubUrl: "https://github.com/pratyush61/nike-landing-page",
  },
  {
    id: 3,
    title: "Apple UI",
    description:
      "A visually engaging Apple-inspired UI clone featuring 3D animations with Three.js and smooth transitions powered by Framer Motion. Focused on high-performance rendering and responsive design.",
    image: "/images/apple.jpeg",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://apple-ui-six.vercel.app/",
    githubUrl: "https://github.com/pratyush61/apple-ui",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title || "project image"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-primary transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-primary transition"
                  >
                    Live
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional View More Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/pratyush61"
          target="_blank"
          rel="noopener noreferrer"
           className="inline-flex items-center gap-2 px-6 py-2 border rounded-lg hover:bg-primary hover:text-white transition">
            View More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};