"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  type: "Supermarket" | "QuickCommerce";
  distanceOrTime: string;
}

const mockStores: Store[] = [
  {
    id: 1,
    name: "Zepto Dark Store",
    address: "Sector 4, HSR Layout",
    city: "Bangalore",
    type: "QuickCommerce",
    distanceOrTime: "Delivering in 9 mins ⚡",
  },
  {
    id: 2,
    name: "Reliance Smart Bazaar",
    address: "Indiranagar Double Road",
    city: "Bangalore",
    type: "Supermarket",
    distanceOrTime: "1.2 km away 📍",
  },
  {
    id: 3,
    name: "Blinkit Hub",
    address: "Greater Kailash 1",
    city: "Delhi",
    type: "QuickCommerce",
    distanceOrTime: "Delivering in 12 mins ⚡",
  },
  {
    id: 4,
    name: "DMart Supermarket",
    address: "Linking Road, Bandra West",
    city: "Mumbai",
    type: "Supermarket",
    distanceOrTime: "2.4 km away 📍",
  },
  {
    id: 5,
    name: "Spencer's Retail",
    address: "Salt Lake Sector V",
    city: "Kolkata",
    type: "Supermarket",
    distanceOrTime: "3.5 km away 📍",
  },
  {
    id: 6,
    name: "Skippi Corner Store",
    address: "Jubilee Hills Road No. 36",
    city: "Hyderabad",
    type: "Supermarket",
    distanceOrTime: "0.8 km away 📍",
  },
];

export default function StoreLocatorModal() {
  const { storeLocatorOpen, setStoreLocatorOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  if (!storeLocatorOpen) return null;

  const filteredStores = searchQuery.trim()
    ? mockStores.filter(
        (store) =>
          store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockStores;

  return (
    <div className="store-modal-overlay" onClick={() => setStoreLocatorOpen(false)}>
      <div className="store-modal" onClick={(e) => e.stopPropagation()}>
        <div className="store-modal-header">
          <h2>Find Skippi Near You</h2>
          <button className="close-btn" onClick={() => setStoreLocatorOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        
        <p className="store-modal-subtitle">
          Enter your city, area, or store name to check local availability.
        </p>

        <div className="store-search-box">
          <i className="ri-search-line"></i>
          <input
            type="text"
            placeholder="Search city (e.g. Bangalore, Delhi, Mumbai)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery("")}>
              <i className="ri-close-circle-fill"></i>
            </button>
          )}
        </div>

        <div className="store-list">
          {filteredStores.length === 0 ? (
            <div className="no-stores">
              <i className="ri-map-pin-user-line"></i>
              <p>No stores found in "{searchQuery}". Try searching Bangalore, Mumbai, or Delhi!</p>
            </div>
          ) : (
            filteredStores.map((store) => (
              <div className="store-card" key={store.id}>
                <div className="store-info">
                  <div className="store-badge-row">
                    <span className={`store-badge ${store.type}`}>
                      {store.type === "QuickCommerce" ? "Instant Delivery" : "Store Pickup"}
                    </span>
                    <span className="store-distance">{store.distanceOrTime}</span>
                  </div>
                  <h3>{store.name}</h3>
                  <p>{store.address}, {store.city}</p>
                </div>
                <button
                  className="store-go-btn"
                  onClick={() => {
                    alert(`Opening maps to ${store.name}, ${store.city}...`);
                  }}
                >
                  <i className="ri-navigation-line"></i>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
