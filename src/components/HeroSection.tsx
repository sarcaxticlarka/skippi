"use client";

import React from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  const scrollToFlavors = () => {
    const flavorSec = document.querySelector(".page4");
    if (flavorSec) {
      flavorSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page1">
      <Navbar />
      <div className="content">
        <div className="shop">
          <p className="flat">
            welcome summer : get 15% flat discount on orders value ₹300 & above plus free
            shipping, spread love with skippi | check our delightful combos.
          </p>
          <h3 onClick={scrollToFlavors} style={{ cursor: "pointer", transition: "all 0.2s" }} className="shop-btn">
            shop now
          </h3>
        </div>
        <svg width="300" height="150">
          <path id="curve" d="M 0 120 C 0 120, 130 0, 260 120"></path>
          <text className="text" textAnchor="middle">
            <textPath className="text__path" href="#curve" startOffset="50%">
              GO SKIPPI
            </textPath>
          </text>
        </svg>

        <div className="images">
          <img className="img1" id="nimbu" src="/assets/pic2.webp" alt="" />
          <img className="img2" id="santra" src="/assets/pic3.webp" alt="" />
          <img className="img3" src="/assets/pic4.webp" alt="" />
          <img className="img4" src="/assets/pic4.webp" alt="" />
          <img
            className="img5"
            src="https://assets-global.website-files.com/65c8dc8db980349c04b10404/65ca85284943031ad3c07082_6.webp"
            alt=""
          />
          <img className="img6" id="share" src="/assets/pic7.webp" alt="" />
          <img className="img7" id="shr" src="/assets/pic6.webp" alt="" />
          <img className="img8" src="/assets/pic8.webp" alt="" />
        </div>
        <div className="tag">
          <h3>FREEZE</h3>
          <h3>SHARE</h3>
          <h3>ENJOY</h3>
        </div>
      </div>
    </div>
  );
}
