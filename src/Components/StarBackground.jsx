import React from "react";
import { useEffect, useState } from "react";

export const StarBackground = () => {
  // id, size, x, y, opacity, animationDuration

  // id, size, x, y, delay, animationDuration

  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]); // State to hold meteor objects

  useEffect(() => {
    generateStars(); // Call the function to generate stars
    generateMeteors(); // Call the function to generate meteors

    const handleResize = () => {
      generateStars(); // Regenerate stars on window resize
      generateMeteors(); // Regenerate meteors on window resize
    }
    window.addEventListener("resize", handleResize); // Add event listener for window resize
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on component unmount
    };
  }, []); 

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    ); // Adjust the divisor to control star density

    const newStars = []; // Array to hold star objects

    for (let i = 0; i < numberOfStars; i++) {
      // Loop to create the specified number of stars
      newStars.push({
        id: i,

        size: Math.random() * 3 + 1,

        x: Math.random() * 100,

        y: Math.random() * 100,

        opacity: Math.random() * 0.5 + 0.5,

        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars); // Update the state with the new stars array
  };

  // Function to generate meteors

  const generateMeteors = () => {
    const numberOfMeteors = 4; // Adjust the number of meteors as needed

    const newMeteors = []; // Array to hold meteor objects

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Random size between 2 and 7
        x: Math.random() * 100, // Random horizontal position
        y: Math.random() * 12, // Random vertical position
        delay: Math.random() * 5, // Random delay for animation
        animationDuration: Math.random() * 3 + 3, // Random duration between 2 and 5 seconds
      });
    }

    setMeteors(newMeteors); // Update the state with the new meteors array
  };

  return (
    <div className="fixed inset-0 overflow overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animation: ` ${star.animationDuration}s `,
          }}
        ></div>
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size*40}px`,
            height: `${meteor.size*2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
