import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particles from "@tsparticles/react";
import simeet from "../../assets/Projects/Simeet.png";
import rekam from "../../assets/Projects/Rekammedis.png";
import simonik from "../../assets/Projects/Simonik.png";
import onlinecourse from "../../assets/Projects/Onlinecourse.png";
import webku from "../../assets/Projects/Webku.png";
import { useTranslation, Trans } from "react-i18next";

function Projects() {
  const { t } = useTranslation();   

  return (
    <Container fluid className="project-section">
      <Particles />
      <Container>
        <h1 className="project-heading">
          <Trans
            i18nKey="projects.title"
            components={{
              1: <strong className="purple" />,
            }}
          />
        </h1>
        <p style={{ color: "white" }}>
          <Trans
            i18nKey="projects.description"
          />
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonik}
              isBlog={false}
              title="SIMONIK"
              description={t("projects.simonik.description")}
              demoLink="https://e-jurnal.pplgsmkn1ciomas.my.id/"
              // ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webku}
              isBlog={false}
              title="WebKu"
              description={t("projects.webku.description")}
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://pplgcreations.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rekam}
              isBlog={false}
              title="Rekam Medik"
              description={t("projects.rekam.description")}
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simeet}
              isBlog={false}
              title="SIMEET"
              description={t("projects.simeet.description")}
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlinecourse}
              isBlog={false}
              title="Online Course"
              description={t("projects.onlinecourse.description")}
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://e-jurnal.pplgsmkn1ciomas.my.id/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="daadae"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
