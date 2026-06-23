"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function ToastNotification() {
  const { toasts } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div
          className="toast-alert"
          key={toast.id}
          style={{ backgroundColor: toast.color }}
        >
          <div className="toast-content">
            <i className="ri-checkbox-circle-fill"></i>
            <span>{toast.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
