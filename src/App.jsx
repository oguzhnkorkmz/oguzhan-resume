import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./index.css";
import profileImg from "./img/DCB0744C-F896-4D73-A2C5-7C382CF05FFD.JPG";

export default function Resume() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animasyon
  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
          section.classList.add("slide-in-right");
        } else {
          section.classList.remove("slide-in-right");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dışarı tıklama menüyü kapatsın
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.querySelector(".nav-links");
      const toggle = document.querySelector(".menu-toggle");
      if (
        menuOpen &&
        menu &&
        !menu.contains(e.target) &&
        (!toggle || !toggle.contains(e.target))
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // Escape tuşu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Ekran genişleyince menüyü kapat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const skills = [
    "C#",
    ".NET Core",
    "REST APIs",
    "Entity Framework",
    "React",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "Azure",
    "Git",
    "Windows Forms",
    "Onion Architecture",
    "SOLID Principles",
    "Design Patterns",
    "Clean Code",
    "T-SQL",
    "Object-Oriented Programming",
    "Microservices",
    "Layered Architecture",
    "ASP.NET Core MVC",
    "ASP.NET Core Web API",
    "HTML5",
    "CSS3",
    "JavaScript ES6",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Version Control (Git)",
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">Oğuzhan Korkmaz</div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menüyü Aç/Kapat"
          aria-expanded={menuOpen}
        >
          &#9776;
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            Certificates
          </a>
        </div>
      </nav>

      <header className="header">
        <img
          src={profileImg}
          alt="Profile of Oguzhan Korkmaz"
          className="profile-pic"
        />
        <div className="header-info">
          <h1>Oğuzhan Korkmaz</h1>
          <p>Full Stack .NET Developer</p>
          <div className="socials">
            <a
              href="https://github.com/oguzhnkorkmz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/oguzhan-korkmaz-b409b8247"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </header>

      <main className="grid">
        <section id="about">
          <h2>About Me</h2>
          <p>
            I have experience in C# and object-oriented programming. I develop
            code following SOLID principles and software development
            methodologies, utilizing design patterns and writing clean code. In
            the field of databases, I am proficient in T-SQL (SQL Server) and
            effectively use ORM tools such as Entity Framework. I am well-versed
            in layered architecture and experienced in managing scalable and
            maintainable projects. On the web development side, I have expertise
            in modern technologies such as HTML5, CSS, JavaScript, ASP.NET Core
            MVC, ASP.NET Core Web API, and React. I also use Git and Azure
            DevOps to deploy and manage applications. I can develop both
            monolithic and microservice architectures, applying layered
            structures and building RESTful APIs.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>HR Management:</strong> Digitizes HR processes using REST
              APIs and Onion Architecture.
            </li>
            <li>
              <strong>Phone Sales:</strong> Inventory and sales tracking system
              built with C# and layered architecture.
            </li>
            <li>
              <strong>Game Site:</strong> Interactive web application built with
              HTML5, CSS3, and JavaScript.
            </li>
            <li>
              <strong>Book Manager:</strong> Corporate-style book management
              system using ASP.NET MVC.
            </li>
            <li>
              <strong>Gift Shop App:</strong> Desktop app for gift shop
              operations built with Windows Forms.
            </li>
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="certificates">
          <h2>Certificates</h2>
          <ul>
            <li>
              <strong>Bilge Adam:</strong> Full Stack Developer Boost (2023)
            </li>
            <li>
              <strong>Udemy:</strong> Practical React (2022)
            </li>
            <li>
              <strong>Udemy:</strong> HTML/CSS/JS Web Development (2023)
            </li>
            <li>
              <strong>WordPress:</strong> Site Building (2023)
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <h2>Contact</h2>
        <p>
          <a href="mailto:oguz.korkmz.2594@icloud.com">
            oguz.korkmz.2594@icloud.com
          </a>
        </p>
      </footer>
    </div>
  );
}
