"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart, setIsCartOpen } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="nav">
        <div className="p1">
          <h3 onClick={() => scrollToSection(".page4")} style={{ cursor: "pointer" }}>
            PRODUCTS
          </h3>
          <h3 onClick={() => scrollToSection(".page4")} style={{ cursor: "pointer" }}>
            SHOP ALL
          </h3>
          <h3 onClick={() => scrollToSection(".page10")} style={{ cursor: "pointer" }}>
            HOT SELLING
          </h3>
        </div>
        <div className="right">
          <div className="p2" onClick={() => scrollToSection(".page1")} style={{ cursor: "pointer" }}>
            <img src="/assets/skippilogo.avif" alt="Skippi Logo" />
          </div>
          <div
            className="p3"
            onClick={() => setIsCartOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <i className="ri-shopping-cart-line"></i>
            <h5>{cartCount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
