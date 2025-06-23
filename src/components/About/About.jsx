import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particles from "@tsparticles/react";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/About.png";
import Toolstack from "./Toolstack";
import { useTranslation, Trans } from 'react-i18next';


function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particles />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
           <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <Trans 
                i18nKey="about.title"
                components={{
                  1: <strong className="purple" />
                }}
              />
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
       <h1 className="project-heading">
          <Trans 
            i18nKey="about.skills"
            components={{
              1: <strong className="purple" />
            }}
          />
        </h1>

        <Techstack />

         <h1 className="project-heading">
          <Trans 
            i18nKey="about.tools"
            components={{
              1: <strong className="purple" />
            }}
          />
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
