"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const hotsellItems = [
  { id: "hot-pink", name: "ICE POP PINK", image: "/assets/pic32.webp", color: "#E00384" },
  { id: "hot-orange", name: "ICE POP ORANGE", image: "/assets/pic33.webp", color: "#FF7800" },
  { id: "hot-green", name: "ICE POP GREEN", image: "/assets/pic34.webp", color: "#51CE86" },
  { id: "hot-lemon", name: "ICE POP LEMON", image: "/assets/pic15.webp", color: "#FFCC07" },
  { id: "hot-cola", name: "ICE POP COLA", image: "/assets/pic16.webp", color: "#710201" },
];

export default function HotSellingSection() {
  const { addToCart, setIsCartOpen } = useCart();
  const [startIndex, setStartIndex] = useState(0);

  const handleLeftClick = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : hotsellItems.length - 3));
  };

  const handleRightClick = () => {
    setStartIndex((prev) => (prev < hotsellItems.length - 3 ? prev + 1 : 0));
  };

  const visibleItems = hotsellItems.slice(startIndex, startIndex + 3);

  const handleAddToCart = (item: typeof hotsellItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: 240,
      image: item.image,
      color: item.color,
    });
    setIsCartOpen(true);
  };

  const scrollToFlavors = () => {
    const el = document.querySelector(".page4");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#FE9342"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="page10div">
        <div className="top">
          <h1>SKIPPI HOT SELLING</h1>
          <p>Flat 15% discount for orders above ₹300/- plus free and fast shipping.</p>
          <button onClick={scrollToFlavors} style={{ cursor: "pointer" }}>VIEW ALL</button>
        </div>
        <div className="middle">
          <i
            className="ri-arrow-left-s-line"
            onClick={handleLeftClick}
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="ri-arrow-right-s-line"
            onClick={handleRightClick}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <div className="bottom">
          {visibleItems.map((item) => (
            <div
              className="hotselling"
              key={item.id}
              onClick={() => handleAddToCart(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="text">
                <h2>{item.name}</h2>
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="hotimg">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="hotsvg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill={item.color}
                    fillOpacity="1"
                    d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
