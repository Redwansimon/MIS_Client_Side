// Logo.jsx

import React from "react";

const Logo = () => {
  return (
    <svg
     xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 500"
  className="h-16"
    >
      <defs>
        <style>
          {`
            .bg {
              fill: white;
            }

            .shape {
              fill: #e3a324;
              stroke: #133E40;
              stroke-width: 3;
              stroke-dasharray: 600;
              stroke-dashoffset: 600;
              animation: drawBorder 3s linear infinite;
            }

            .shape1 {
              animation-delay: 0s;
            }

            .shape2 {
              animation-delay: 0.5s;
            }

            .shape3 {
              animation-delay: 1s;
            }

            .logo-text {
              fill: #e3a324;
              stroke: #133E40;
              stroke-width: 1.5;
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: textDraw 4s linear infinite;

              font-size: 34px;
              font-family: Arial, sans-serif;
              letter-spacing: 12px;
            }

            @keyframes drawBorder {
              0% {
                stroke-dashoffset: 600;
              }

              50% {
                stroke-dashoffset: 0;
              }

              100% {
                stroke-dashoffset: -600;
              }
            }

            @keyframes textDraw {
              0% {
                stroke-dashoffset: 1000;
                fill-opacity: 0.2;
              }

              50% {
                stroke-dashoffset: 0;
                fill-opacity: 1;
              }

              100% {
                stroke-dashoffset: -1000;
                fill-opacity: 0.2;
              }
            }
          `}
        </style>
      </defs>

      {/* Background */}
      <rect
        className="bg"
        x={40}
        y={40}
        width={380}
        height={380}
        rx={30}
      />

      {/* Left Diamond */}
      <polygon
        className="shape shape1"
        points="125,255 150,205 175,255 150,305"
      />

      {/* Middle Shape */}
      <polygon
        className="shape shape2"
        points="175,155 225,255 250,305 275,255 225,155"
      />

      {/* Right Shape */}
      <polygon
        className="shape shape3"
        points="275,155 325,255 350,305 375,255 325,155"
      />

      {/* Text */}
      <text x={100} y={355} className="logo-text">
        MBRELLA
      </text>
    </svg>
  );
};

export default Logo;