import React from "react";

export default function QualityRatingSection() {
  return (
    <div className="page3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#FF9BC2"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="page3div">
        <div className="items">
          <h2>all natural, <span>always.</span></h2>
          <h4>A natural choice</h4>
        </div>
        <div className="rating">
          <div className="rcont">
            <img src="/assets/pic10.webp" alt="No artificial Preservatives" />
            <h5>No artificial Preservatives</h5>
            <h2 className="qual">QUALITY</h2>
          </div>
          <div className="rcont">
            <img src="/assets/pic11.webp" alt="100% natural ingredients" />
            <h5>100% natural ingredients</h5>
            <h2 className="qual">CLEAN</h2>
          </div>
          <div className="rcont">
            <img src="/assets/pic12.webp" alt="Made with 100% RO water" />
            <h5>Made with 100% RO water</h5>
            <h2 className="qual">100% water</h2>
          </div>
          <div className="rcont">
            <img src="/assets/pic13.webp" alt="No artificial Color & Sweetness" />
            <h5>No artificial Color & Sweetness</h5>
            <h2 className="qual">100% SAFE</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
