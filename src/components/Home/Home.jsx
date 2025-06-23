import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/Home.png";
import myImg from "../../assets/Nabilll.png";
import Particles from "@tsparticles/react";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      <section>
        <Container fluid className="home-section" id="home">
          <Particles />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  {t("home.greeting")}{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  {t("home.introduction")}
                  <strong className="main-name"> {t("home.name")}</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  <Trans
                    i18nKey="home.subtitle"
                    components={{
                      1: <span className="purple" />,
                    }}
                  />
                </h1>
                <p className="home-about-body">
                  <Trans
                    i18nKey="home.aboutBody"
                    components={{
                      1: (
                        <span className="purple">
                          <i>
                            <b></b>
                          </i>
                        </span>
                      ),
                      2: (
                        <span className="purple">
                          <i>
                            <b></b>
                          </i>
                        </span>
                      ),
                      3: (
                        <span className="purple">
                          <b></b>
                        </span>
                      ),
                      4: (
                        <span className="purple">
                          <i>
                            <b></b>
                          </i>
                        </span>
                      ),
                      5: (
                        <span className="purple">
                          <i>
                            <b></b>
                          </i>
                        </span>
                      ),
                      br: <br />,
                    }}
                  />
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>{t("home.socialTitle")}</h1>
                <p>
                  <Trans
                    i18nKey="home.socialDescription"
                    components={{
                      1: <span className="purple"></span>,
                    }}
                  />
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/nabilattala"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/nabil-attala-noviandy-a8416b332/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/nabilattala"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Home;
