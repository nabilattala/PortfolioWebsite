import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation, Trans } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <p style={{ textAlign: 'justify' }}>
      <Trans
        i18nKey="about.description"
        components={{
          1: <span className="purple" />,
          2: <span className="purple" />,
          3: <span className="purple" />,
          4: <span className="purple" />,
          5: <span className="purple" />,
          6: <span className="purple" />,
          7: <span className="purple" />,
          8: <span className="purple" />,
        }}
      />
    </p>
          <ul>
            {/* <li className="about-activity">
              <ImPointRight /> Bermain Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>

          <p style={{ color: "rgb(134, 206, 235)" }}>"Fortis Fortuna Adiuvat" </p>
          {/* <footer className="blockquote-footer">Nabil</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
