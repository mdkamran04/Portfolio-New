import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              " A  MERN Stack Developer",
              " A  Passionate Generative AI Enthusiast",
              " A  Committed Open Source Contributor",
              " An  Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type