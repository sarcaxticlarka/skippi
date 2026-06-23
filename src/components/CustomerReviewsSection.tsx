import React from "react";

export default function CustomerReviewsSection() {
  return (
    <div className="page5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#F0E14B"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="page5div">
        <div className="what">
          <h2>WHAT ARE PEOPLE SAYING</h2>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi soluta nam aliquid
            quidem ullam! Voluptates?
          </h5>
        </div>
        <div className="review">
          <div className="ritem">
            <h2>"Lorem ipsum dolor, sit amet consectetur adipisicing elit."</h2>
            <div className="customer">
              <h4>Rohit K.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad maxime magnam.</p>
              <div className="img">
                <img src="/assets/pic22.avif" alt="Rohit K." />
              </div>
            </div>
          </div>
          <div className="ritem">
            <h2>"Lorem ipsum dolor, sit amet consectetur adipisicing elit."</h2>
            <div className="customer">
              <h4>Noor Bukhari.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad maxime magnam.</p>
              <div className="img">
                <img src="/assets/pic20.avif" alt="Noor Bukhari" />
              </div>
            </div>
          </div>
          <div className="ritem">
            <h2>"Lorem ipsum dolor, sit amet consectetur adipisicing elit."</h2>
            <div className="customer">
              <h4>Aditya Raj.</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad maxime magnam.</p>
              <div className="img">
                <img src="/assets/pic21.avif" alt="Aditya Raj" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
