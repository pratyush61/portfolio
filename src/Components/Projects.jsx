import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MyGram",
    description: "A social media app for sharing photos and connecting with friends. Built with React & featuring a modern UI and seamless user experience.",
    image: "/images/sm.png",
    tags: ["React", "GSAP", "Bootstrap", "Tailwind CSS"],
    demoUrl: "#", // if hosted
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Chat App",
    description:
      "A real-time chat platform built with Supabase, featuring authentication, database persistence, and instant messaging. Designed with secure auth flows and optimized queries for scalability.",
    image: "/images/chat.jpeg",
    tags: ["React", "Supabase", "Real-time", "Tailwind CSS"],
    demoUrl: "#", // if hosted
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Apple UI",
    description:
      "A visually engaging Apple-inspired UI clone featuring 3D animations with Three.js and smooth transitions powered by Framer Motion. Focused on high-performance rendering and responsive design.",
    image: "/images/apple.jpeg",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "#", // if hosted
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                 
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};
