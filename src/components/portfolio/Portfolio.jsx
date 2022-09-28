import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/me.png";
import ReactLogo from "../../assets/logo.svg";
import cheffrey from "../../assets/Cheffrey.png";

const data = [
  {
    id: 1,
    image: ReactLogo,
    title: "This website",
    details: "Built from scratch using React and custom CSS.",
    github: "https://github.com/lkleinbrodt/portfolio_website",
    demo: "",
  },
  {
    id: 2,
    image: cheffrey,
    title: "Cheffrey",
    details: "An AI sous-chef that helps you plan what meals to make and combines everything into an easy to read meal-plan, complete with shopping list and recipes.",
    github: "https://github.com/lkleinbrodt/cheffrey",
    demo: "https://lkleinbrodt-cheffrey-app-uc2hi0.streamlitapp.com",
  },
  {
    id: 3,
    image: ReactLogo,
    title: "A THIRD cool project!",
    details: "",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, details, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{details}</p>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
