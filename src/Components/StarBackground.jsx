 
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [particles, setParticles] = useState([]);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    setStars(
      Array.from({ length: 150 }, (_, id) => ({
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      }))
    );

    setMeteors(
      Array.from({ length: 7 }, (_, id) => ({
        id,
        x: Math.random() * 100,
        y: Math.random() * 60,
        delay: Math.random() * 12,
        duration: Math.random() * 3 + 3,
      }))
    );

    setParticles(
      Array.from({ length: 25 }, (_, id) => ({
        id,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 15,
        duration: Math.random() * 12 + 12,
        dx: `${Math.random() * 100 - 50}px`,
      }))
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    const media = window.matchMedia("(pointer: fine)");

    if (media.matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-base"
    >
      {/* Moving glowing orbs */}
      <div
        className="aurora"
        style={{
          width: "28rem",
          height: "28rem",
          top: "-8rem",
          left: "-5rem",
          background: "rgba(139, 92, 246, 0.22)",
          animation: "aurora-a 24s ease-in-out infinite",
        }}
      />

      <div
        className="aurora"
        style={{
          width: "32rem",
          height: "32rem",
          top: "20%",
          right: "-10rem",
          background: "rgba(59, 130, 246, 0.18)",
          animation: "aurora-b 30s ease-in-out infinite",
        }}
      />

      <div
        className="aurora"
        style={{
          width: "30rem",
          height: "30rem",
          bottom: "-12rem",
          left: "25%",
          background: "rgba(236, 72, 153, 0.14)",
          animation: "aurora-c 28s ease-in-out infinite",
        }}
      />

      {/* Moving grid */}
      <div className="bg-grid absolute inset-0" />

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            width: "120px",
            height: "2px",
            animation: `meteor ${meteor.duration}s linear ${meteor.delay}s infinite`,
          }}
        />
      ))}

      {/* Floating glowing particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            "--dx": particle.dx,
          }}
        />
      ))}

      {/* Mouse-following glow */}
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
