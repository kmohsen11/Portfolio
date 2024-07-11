
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Khaled Ahmed </span>
            from <span className="purple"> Egypt </span>
            <br />
            Software / Machine Learning Engineer who loves to transform ideas into reality using
            code.
            <br />
            I have xperience creating
            websites with ReactJs, JavaScript, Python (Flask, and Django), and Mobile Apps using Swift.
            I also have experience developing ML pipelines using TensorFlow, and PyTorch.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> TV-Shows (The Office and GOT all the time)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Podcasting
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
