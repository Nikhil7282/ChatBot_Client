import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Typing() {
  return (
    <div>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "Chat With Your AI", // initially rendered starting point
          1000,
          "Built with Open AI 🤖",
          1000,
          "Your Own Customized ChatGpt 🖥️",
          1000,
          "We produce food for Chinchillas",
          500,
        ]}
        speed={50}
        style={{
          fontSize: "60px",
          color: "white",
          display: "inline-block",
          textShadow: "1px 1px 20px #000",
        }}
        repeat={Infinity}
      />
    </div>
  );
}
