"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function ExploreFlavorSection() {
  const { addToCart, setStoreLocatorOpen } = useCart();

  const scrollToHotSelling = () => {
    const el = document.querySelector(".page10");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const flavors = [
    {
      id: "bubble-gum",
      name: "Yum Yum Bubble Gum",
      price: 240,
      image: "/assets/pic14.webp",
      color: "#E3005C",
      prodId: "prod1",
    },
    {
      id: "lemon",
      name: "Lemon-o-Licious",
      price: 240,
      image: "/assets/pic15.webp",
      color: "#34B900",
      prodId: "prod2",
    },
    {
      id: "cola",
      name: "Refreshing Cola",
      price: 240,
      image: "/assets/pic16.webp",
      color: "#710201",
      prodId: "prod3",
    },
    {
      id: "orange",
      name: "Tengy Orange",
      price: 240,
      image: "/assets/pic17.webp",
      color: "#FB2200",
      prodId: "prod4",
    },
    {
      id: "raspberry",
      name: "Raspberry Freshness",
      price: 240,
      image: "/assets/pic18.webp",
      color: "#8C014B",
      prodId: "prod5",
    },
    {
      id: "mango",
      name: "Juicy Mango",
      price: 240,
      image: "/assets/pic19.webp",
      color: "#FFCC07",
      prodId: "prod6",
    },
  ];

  return (
    <div className="page4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#FF2344"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="page4div">
        <div className="explore">
          <h1>EXPLORE FLAVOR</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illum.</p>
          <button onClick={scrollToHotSelling} style={{ cursor: "pointer" }}>
            SHOP ALL
          </button>
        </div>
        <div className="buyprod">
          {flavors.map((flav) => (
            <div className="prod" id={flav.prodId} key={flav.id}>
              <h2>{flav.name}</h2>
              <img src={flav.image} alt={flav.name} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta?</p>
              <div className="btn">
                <button
                  onClick={() =>
                    addToCart({
                      id: flav.id,
                      name: flav.name,
                      price: flav.price,
                      image: flav.image,
                      color: flav.color,
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  BUY NOW
                </button>
                <button
                  onClick={() => setStoreLocatorOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  BUY IN STORES
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
