 
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [particles, setParticles] = useState([]);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const createStars = () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      }));

    const createMeteors = () =>
      Array.from({ length: 7 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 3 + 3,
      }));

    const createParticles = () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 15,
        duration: Math.random() * 12 + 12,
        dx: `${Math.random() * 100 - 50}px`,
      }));

    setStars(createStars());
    setMeteors(createMeteors());
    setParticles(createParticles());
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-base">
      <div
        className="aurora h-[28rem] w-[28rem] bg-violet-600/20"
        style={{
          top: "-8rem",
          left: "-5rem",
          animation: "aurora-a 24s ease-in-out infinite",
        }}
      />

      <div
        className="aurora h-[32rem] w-[32rem] bg-blue-500/15"
        style={{
          top: "25%",
          right: "-10rem",
          animation: "aurora-b 30s ease-in-out infinite",
        }}
      />

      <div
        className="aurora h-[30rem] w-[30rem] bg-pink-500/10"
        style={{
          bottom: "-12rem",
          left: "25%",
          animation: "aurora-c 28s ease-in-out infinite",
        }}
      />

      <div className="bg-grid inset-0" />

      {stars.map((star) => (
        <div
          key={star.id}
          className="star twinkle"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            top: `${meteor.y ?? Math.random() * 50}%`,
            left: `${meteor.x}%`,
            width: "120px",
            height: "2px",
            animation: `meteor ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            "--dx": particle.dx,
          }}
        />
      ))}

      <div
        className="cursor-glow hidden md:block"
        style={{
          transform: `translate(${cursor.x}px, ${cursor.y}px)`,
        }}
      />
    </div>
  );
};

export default StarBackground;
