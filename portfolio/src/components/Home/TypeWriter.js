// src/components/TypeWriter.js
import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: [
            "Software Engineer",
            "Machine Learning Engineer",
            "Neuroscience Enthusiast",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default TypeWriter;
