import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { GiBearHead } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>4+ Years</h5>
              <small>Industry Experience</small>
            </article>

            <article className="about__card">
              <GiBearHead className="about__icon" />
              <h5>B.A. Statistics</h5>
              <small>U.C. Berkeley</small>
            </article>

            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+</small>
            </article> */}
          </div>
          <br></br>
          <div>
            Data Scientist with 4 years of experience in Asset Management developing 
            and leading ML pipelines. Proficient in:<br></br>
            <ul>
              <li>Data analysis and data pipelines</li> 
              <li>Predictive modeling (Traditional and Deep Learning)</li>
              <li>Lead generation and coverage optimization</li>
              <li>Apps, dashboards, and data visualization</li>
              <li>Hypothesis testing and experiment design</li>
            </ul>
          </div>
          <br></br>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
