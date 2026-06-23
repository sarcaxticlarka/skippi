import React from "react";

export default function InsideStorySection() {
  return (
    <div className="page8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#FE327B"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="page8div">
        <div className="left">
          <div className="leftimg">
            <img src="/assets/pic27.webp" alt="It starts from the inside" />
          </div>
        </div>
        <div className="right">
          <div className="item">
            <h1> IT STARTS FROM THE INSIDE</h1>
            <p id="start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem officiis cumque?
            </p>
            <div className="itemdetail">
              <div className="details1">
                <div className="growth">
                  <img src="/assets/pic28.webp" alt="Pandemic" />
                  <h2>Pandemic</h2>
                  <p id="lor">Lorem ipsum dolor sit amet,..</p>
                </div>
              </div>
              <div className="details1">
                <div className="growth">
                  <img src="/assets/pic29.webp" alt="40 X growth" />
                  <h2>40 X growth</h2>
                  <p id="lor">Lorem ipsum dolor sit amet,..</p>
                </div>
              </div>
              <div className="details1">
                <div className="growth">
                  <img src="/assets/pic30.webp" alt="Excellence Award" />
                  <h2>ExcelenceAward</h2>
                  <p id="lor">Lorem ipsum dolor sit amet,..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
