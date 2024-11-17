import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import aura from "../assets/projects/aura.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="MediBridge"
              description="MediBridge is a comprehensive hospital management platform designed to streamline operations and improve patient care. From efficient appointment scheduling to seamless administrative management, our goal is to make healthcare more accessible and efficient for both medical professionals and patients."
              ghLink="https://github.com/mdkamran04/HIT-A-THON-bitRebels"
              demoLink="https://medi-bridge-new.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aura}
              isBlog={false}
              title=" AuraAI"
              description="Aura AI is a personal chatbot powered by the Gemini API, designed to provide users with an interactive and personalized experience. Built using Next.js and Tailwind CSS, Aura AI offers a modern and responsive interface that adapts seamlessly to any device."
              ghLink="https://github.com/mdkamran04/Aura-AI"
              demoLink="https://aura-ai-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Flavour Fiesta"
              description="Flavour Fiesta is a dynamic recipe website designed to bring culinary inspiration to your kitchen. JavaScript APIs, which are interfaces for interacting with external software components, operating systems, or microservices, have been utilized to enhance the website's functionality. From seamless navigation to mouth-watering recipe displays, every detail has been crafted to improve the user experience."
              ghLink="https://github.com/mdkamran04/Flavour-Fiesta-"
              demoLink="https://flavor-fiesta-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="TravelBliss"
              description="TravelBliss! 🌍 is a fully responsive travel website built using HTML, CSS, Bootstrap, and JavaScript, incorporates the Google Maps API to enhance user experience.

Creating TravelBliss involved extensive planning and design to ensure a user-friendly interface. I meticulously worked on responsive layouts to make sure the website looks great on all devices. Integrating the Google Maps API was a rewarding challenge, allowing users to easily locate travel destinations."
              ghLink="https://github.com/mdkamran04/TravelBliss"
              demoLink="https://travel-bliss-fawn.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website(Under Progress)"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="FitFusion(Under Progress)"
              description="FitFusion is an innovative e-commerce platform that revolutionizes online shopping. With cutting-edge features like virtual try-ons powered by Hugging Face API and personalized recommendations through LangChain and Generative AI, customers can effortlessly find their perfect fit. Experience fashion like never before—browse, try, and buy with confidence, all from the comfort of your home. "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
