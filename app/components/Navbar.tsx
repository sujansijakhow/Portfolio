"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames";
import Reveal from "./Reveal";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scrolling to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100; // Adjust offset to avoid hiding under navbar
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Scroll detection logic
  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];

    const handleScroll = () => {
      let currentSection = "home";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();

          // Adjusting the logic to handle small sections like contact, especially when it's near the bottom of the screen
          const isInViewport =
            rect.top <= window.innerHeight * 0.8 && rect.bottom >= window.innerHeight * 0.1;

          if (isInViewport) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    // Handle scroll event
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to set initial section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2">
      <button
        className="bg-background card-shadow p-3 md:hidden rounded"
        onClick={() => setIsOpen((prevVal) => !prevVal)}
      >
        <img className="block dark:hidden" src="/menu_icon_light.svg" alt="menu icon" />
        <img className="hidden dark:block" src="/menu_icon_dark.svg" alt="menu icon" />
      </button>

      <Reveal initialY={-20} duration={0.5}>
        <nav
          className={cn(
            "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",
            { "opacity-100": isOpen, "opacity-0 md:opacity-100": !isOpen }
          )}
        >
          <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row">
            {["home", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <div
                  className={cn("rounded p-1 duration-300 ease-in-out cursor-pointer", {
                    "bg-primary text-white": activeSection === section,
                  })}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>
    </div>
  );
};

export default Navbar;
