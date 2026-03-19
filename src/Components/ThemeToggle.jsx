import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils"; // Utility function for class name manipulation

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false); // Initialize darkMode state to false

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme"); // Retrieve the theme from localStorage
    if (storedTheme === "dark") {
      setDarkMode(true); // Set darkMode state to true
      document.documentElement.classList.add("dark"); // Apply dark mode class
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode class
      setDarkMode(false); // Set darkMode state to false
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Store the theme in localStorage
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Store the theme in localStorage
      setDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className = {cn("fixed top-18 right-4 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hiden")
    }>
      {" "}
      {darkMode ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
// This component is a button that toggles between light and dark themes.
