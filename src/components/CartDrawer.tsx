"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, clearCart, showToast } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    showToast("Checkout successful! Thank you for buying Skippi! 🍦", "#34B900");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className={`cart-overlay ${isCartOpen ? "open" : ""}`} onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <i className="ri-shopping-basket-line"></i>
            <p>Your cart is empty!</p>
            <button
              className="shop-now-btn"
              onClick={() => {
                setIsCartOpen(false);
                const flavorSec = document.querySelector(".page4");
                if (flavorSec) {
                  flavorSec.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Shop Flavors
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                  style={{ borderLeft: `5px solid ${item.color}` }}
                >
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">₹{item.price}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                    <i className="ri-delete-bin-6-line"></i>
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
