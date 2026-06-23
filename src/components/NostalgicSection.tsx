import React from "react";

export default function NostalgicSection() {
  return (
    <div className="page2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#4eceff"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="page2div">
        <div className="sweet">
          <h2>if it's nostalgic</h2>
          <h2>sweet, and <span className="natural">natural</span></h2>
          <h2> its got</h2>
          <h2> to be skippi.</h2>
        </div>
        <img src="/assets/pic9.webp" alt="Nostalgic sweet and natural" />
      </div>
    </div>
  );
}
