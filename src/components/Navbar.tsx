import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="p1">
          <h3>PRODUCTS</h3>
          <h3>SHOP ALL</h3>
          <h3>ALL PAGES</h3>
        </div>
        <div className="right">
          <div className="p2">
            <img src="/assets/skippilogo.avif" alt="Skippi Logo" />
          </div>
          <div className="p3">
            <i className="ri-shopping-cart-line"></i>
            <h5>0</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
