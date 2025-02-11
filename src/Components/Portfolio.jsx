/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "	Unveiling emotions on social media platform ",
    description:
      "Developed a social media sentiment analysis tool using YouTube comments, incorporating a BERT-based model for sentimental analysis. ",
    
  },
  {
    title: "	Project Management System ",
    description:
      "A Project Management System (PMS) helps streamline task management, collaboration, and resource allocation. ",
  
  },
  {
    title: "	Expense Manager App",
    description:
      "An Expense Manager Android app helps users track income, expenses, and budgets, providing insights into their financial health. Key features include expense categorization, recurring transaction tracking and statistics.                       ",
    url: "https://github.com/sharanya-ym/Expense-Manager",
  },
  {
    title: "	Employee Attrition Rate",
    description:
      "An AI/ML project on employee attrition rate predicts employee turnover by analyzing factors like job satisfaction, demographics, and performance. Machine learning models help identify at-risk employees and provide insights for retention strategies. ",
    
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
