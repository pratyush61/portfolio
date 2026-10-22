
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [particles, setParticles] = useState([]);
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    setStars(
      Array.from({ length: 130 }, (_, id) => ({
        id,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * -5,
      }))
    );

    setMeteors(
      Array.from({ length: 9 }, (_, id) => {
        const duration = Math.random() * 2 + 2.5;

        return {
          id,
          x: Math.random() * 100,
          y: Math.random() * 65,
          duration,
          delay: -(Math.random() * duration),
        };
      })
    );

    setParticles(
      Array.from({ length: 24 }, (_, id) => ({
        id,
        x: Math.random() * 100,
        size: Math.random() * 3 + 2,
        delay: -(Math.random() * 15),
        duration: Math.random() * 8 + 10,
        dx: `${Math.random() * 100 - 50}px`,
      }))
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-base"
    >
      {/* Purple glow */}
      <div
        className="aurora"
        style={{
          width: "30rem",
          height: "30rem",
          top: "-8rem",
          left: "-5rem",
          background: "rgba(139, 92, 246, 0.22)",
          animation: "aurora-a 18s ease-in-out infinite alternate",
        }}
      />

      {/* Blue glow */}
      <div
        className="aurora"
        style={{
          width: "32rem",
          height: "32rem",
          top: "20%",
          right: "-10rem",
          background: "rgba(59, 130, 246, 0.18)",
          animation: "aurora-b 22s ease-in-out infinite alternate",
        }}
      />

      {/* Pink glow */}
      <div
        className="aurora"
        style={{
          width: "30rem",
          height: "30rem",
          bottom: "-12rem",
          left: "25%",
          background: "rgba(236, 72, 153, 0.14)",
          animation: "aurora-c 20s ease-in-out infinite alternate",
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

      {/* Shooting stars: already moving on page load */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            animationDuration: `${meteor.duration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}

      {/* Floating particles */}
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

      {/* Mouse glow is separate from star animations */}
      <div
        className="cursor-glow hidden md:block"
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        }}
      />
    </div>
  );
};

export default StarBackground;
