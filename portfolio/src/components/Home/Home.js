import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
function Home() {
  return (
    <section className="home-section" id="home">
      <Container className="home-content">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1 className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Khaled Ahmed</strong>
            </h1>


            <div className="heading-type">
              <TypeWriter />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="home-about-section" id="about">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2>Get in Touch</h2>
            <p>
              Whether you want to get in touch or talk about a project collaboration,
              <br />
              <strong>feel free to connect with me!</strong>
            </p>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
