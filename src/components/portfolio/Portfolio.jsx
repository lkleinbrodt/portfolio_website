import React from "react";
import "./portfolio.css";
// import IMG1 from "../../assets/me.png";
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
    details:
      "An AI sous-chef that helps you plan what meals to make and combines everything into an easy to read meal-plan, complete with shopping list and recipes. Available on both web and mobile.",
    github: "https://github.com/lkleinbrodt/cheffrey",
    demo: "https://www.cheffrey.org/",
  },
  {
    id: 3,
    image: ReactLogo,
    title: "Baller",
    details:
      "Web app that lets you enter stat lines and shows you which NBA players have achieved them.",
    github: "https://github.com/lkleinbrodt/baller",
    demo: "https://lkleinbrodt-baller-srcapp-evu9j0.streamlitapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, details, github, demo }) => {
          return (
            <div className="portfolio__item" key={id}>
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
