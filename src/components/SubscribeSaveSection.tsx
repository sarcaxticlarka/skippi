"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function SubscribeSaveSection() {
  const { addToCart, setIsCartOpen } = useCart();

  const handleOrderNow = () => {
    addToCart({
      id: "royal-collection",
      name: "Royal Collection Box",
      price: 699,
      image: "/assets/pic23.webp",
      color: "#FFC901",
    });
    setIsCartOpen(true);
  };

  return (
    <div className="page6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#F0E14B"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="page6div">
        <div className="top">
          <h2>SUBSCRIBE & SAVE WITH SKIPPI ICE POPS , CREAM ROLL AND MORE...</h2>
          <p id="rc">
            Royal collection casket of skippi, all product assorments in a box, 18 ice pop flavoors, 4 corn stick
            Flavors.
          </p>
          <div className="discount">
            <h1>
              <span>15%</span>&nbsp; &nbsp;Extra Discounts{" "}
            </h1>
            <h1>
              <span className="frees">
                <i className="ri-archive-stack-line"></i>
              </span>
              &nbsp;&nbsp;Free Shipping
            </h1>
            <h1>
              <span className="fasts">
                <i className="ri-speed-up-fill"></i>
              </span>
              &nbsp;&nbsp;2 DAYS SHIPPING{" "}
            </h1>
          </div>
        </div>
        <div className="bottom">
          <div className="bimg">
            <img src="/assets/pic23.webp" alt="Royal Collection Box" />
          </div>
          <div className="royal">
            <h2>Royal Collection</h2>
            <p>Limited Edition New Assortment collections.</p>
            <button onClick={handleOrderNow} style={{ cursor: "pointer" }}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
