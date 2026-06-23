"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const crsrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const crsr = crsrRef.current;
    const main = document.querySelector(".main");
    if (!crsr || !main) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(crsr, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
      });
    };

    main.addEventListener("mousemove", onMouseMove as EventListener);

    return () => {
      main.removeEventListener("mousemove", onMouseMove as EventListener);
    };
  }, []);

  return <div ref={crsrRef} className="crsr"></div>;
}
