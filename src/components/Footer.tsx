"use client";

import React from "react";

export default function Footer() {
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="footerdiv">
        <div className="foottop">
          <div className="footpa">
            <h1 onClick={() => scrollToSection(".page1")} style={{ cursor: "pointer" }}>HOME PAGE</h1>
            <h3 onClick={() => scrollToSection(".page1")} style={{ cursor: "pointer" }}>Home 01</h3>
            <h3 onClick={() => scrollToSection(".page2")} style={{ cursor: "pointer" }}>Nostalgia</h3>
            <h3 onClick={() => scrollToSection(".page3")} style={{ cursor: "pointer" }}>Quality</h3>
          </div>
          <div className="footpa">
            <h1 onClick={() => scrollToSection(".page9")} style={{ cursor: "pointer" }}>ABOUT US</h1>
            <h3 onClick={() => scrollToSection(".page8")} style={{ cursor: "pointer" }}>Inside Story</h3>
            <h3 onClick={() => scrollToSection(".page9")} style={{ cursor: "pointer" }}>Founders</h3>
            <h3 onClick={() => scrollToSection(".page7")} style={{ cursor: "pointer" }}>Ambassadors</h3>
          </div>
          <div className="footpa">
            <h1>CONTACT US</h1>
            <h3 style={{ textTransform: "none" }}>support@skippi.in</h3>
            <h3>+91 12345 67890</h3>
            <h3>Store Locator</h3>
          </div>
          <div className="footpa">
            <h1 onClick={() => scrollToSection(".page4")} style={{ cursor: "pointer" }}>PRODUCT PAGE</h1>
            <h3 onClick={() => scrollToSection(".page4")} style={{ cursor: "pointer" }}>All Flavors</h3>
            <h3 onClick={() => scrollToSection(".page10")} style={{ cursor: "pointer" }}>Hot Selling</h3>
            <h3 onClick={() => scrollToSection(".page6")} style={{ cursor: "pointer" }}>Royal Collection</h3>
          </div>
          <div className="footpa">
            <h1>ADMIN</h1>
            <h3>Main Index</h3>
            <h3>Style Guide</h3>
            <h3>Licences</h3>
          </div>
        </div>
        <div className="footbottom">
          <p>
            This is reimagine website of <span>SHARK TANK BRAND.</span>
          </p>
          <img src="https://skippi.in/cdn/shop/files/skippi_font.png?v=1690357134&width=500" alt="Skippi Logo Font" />
        </div>
      </div>
    </div>
  );
}
