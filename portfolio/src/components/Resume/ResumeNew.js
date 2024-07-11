import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import screenshot from "../../Assets/resume.png";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <img 
            src={screenshot}
            alt="Resume Screenshot"
            style={{ width: width > 786 ? '70%' : '100%', margin: '0 auto' }}
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={screenshot} download className="download-button">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
