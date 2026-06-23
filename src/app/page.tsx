"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import NostalgicSection from "@/components/NostalgicSection";
import QualityRatingSection from "@/components/QualityRatingSection";
import ExploreFlavorSection from "@/components/ExploreFlavorSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import SubscribeSaveSection from "@/components/SubscribeSaveSection";
import AmbassadorsSection from "@/components/AmbassadorsSection";
import InsideStorySection from "@/components/InsideStorySection";
import FoundersSection from "@/components/FoundersSection";
import HotSellingSection from "@/components/HotSellingSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // 1. Context Menu Protection
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", preventContextMenu);

    // 2. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 3. Initialize GSAP animations inside context to support React's clean unmounting
    const ctx = gsap.context(() => {
      
      // --- Page 1 (Hero & Navbar) Entrance Animations ---
      const tl = gsap.timeline();
      
      // Animate top navbar links & logo in from above
      tl.from(".navbar .nav .p1 h3, .navbar .nav .right .p2, .navbar .nav .right .p3", {
        y: -40,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
      });
      
      // Scale-in the central curved text banner ("GO SKIPPI")
      tl.from(".page1 .content svg", {
        scale: 0.5,
        delay: 0.7,
        duration: 0.6,
        opacity: 0,
        scrub: 2,
        ease: "power2.out",
      });
      
      // Animate the Summer sale promo tag from below
      tl.from(".page1 .content .shop p, .page1 .content .shop h3", {
        y: 40,
        delay: 0.3,
        duration: 0.3,
        opacity: 0,
      });
      
      // Staggered slide-in of the floating fruits/pops (Lemon, Orange, etc.)
      tl.from(
        ".page1 .content .images .img2",
        {
          x: -80,
          delay: 0.3,
          duration: 0.3,
          opacity: 0,
        },
        "a"
      );
      tl.from(
        ".page1 .content .images .img5",
        {
          x: 80,
          delay: 0.3,
          duration: 0.3,
          opacity: 0,
        },
        "a"
      );
      tl.from(
        ".page1 .content .images .img1",
        {
          y: -80,
          delay: 0.3,
          duration: 0.3,
          opacity: 0,
        },
        "a"
      );
      
      // Animate base ice pop into position
      tl.from(".page1 .content .images .img8", {
        y: 80,
        opacity: 0,
        duration: 0.4,
        scrub: 4,
      });

      // --- Page 1 Scroll-Triggered Parallax ---
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page1",
          scroller: ".main",
          start: "top 50%",
          end: "top -100%",
          scrub: 2,
        },
      });
      tl2.from(".page1 .share", {
        x: -200,
        opacity: 0,
        delay: 0.3,
        duration: 0.4,
      });
      tl2.from(".page1 .content .images .img7", {
        y: 100,
        delay: 0.3,
        duration: 0.4,
      });
      tl2.from(
        ".page1 .content .images .img3",
        {
          x: -800,
          delay: 0.3,
          duration: 0.5,
          stagger: 0.1,
        },
        "b"
      );
      tl2.from(
        ".page1 .content .images .img4",
        {
          x: 800,
          delay: 0.3,
          duration: 0.5,
          stagger: 0.1,
        },
        "b"
      );

      // --- Page 2 (Nostalgic Section) Scroll Animation ---
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page2",
          scroller: ".main",
          start: "top 50%",
          end: "top 10%",
          scrub: 2,
        },
      });
      // Pin and slide in the heading text from the left
      tl3.from(".page2 .sweet h2", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        pin: true,
      });
      // Slide in the product image from the right
      tl3.from(".page2 img", {
        x: 300,
        opacity: 0,
        duration: 0.3,
      });

      // --- Page 3 (Quality Rating Section) Scroll Animation ---
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page3",
          scroller: ".main",
          start: "top 25%",
          end: "top 10%",
          scrub: 2,
        },
      });
      // Pin and slide in "All Natural" header from the left
      tl4.from(".page3 .items", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        pin: true,
      });
      // Slide rating containers up
      tl4.from(".page3 .rating", {
        y: 80,
        opacity: 0,
        duration: 0.7,
      });

      // --- Page 4 (Explore Flavor Grid) Scroll Animation ---
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page4",
          scroller: ".main",
          start: "top 45%",
          end: "top -10%",
          scrub: 2,
        },
      });
      // Animate Section title
      tl5.from(".page4 .explore", {
        y: 50,
        opacity: 0,
        duration: 0.5,
      });
      // Staggered entrance for all product cards
      tl5.from(".page4 .prod", {
        y: 80,
        opacity: 0,
        duration: 0.2,
        stagger: 0.8,
      });

      // --- Page 5 (Customer Reviews) Scroll Animation ---
      const tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page5",
          scroller: ".main",
          start: "top 50%",
          end: "top -10%",
          scrub: true,
        },
      });
      // Slide section title down
      tl6.from(".page5 .what", {
        y: -20,
        opacity: 0,
        duration: 0.5,
      });
      // Stagger reviews up into view
      tl6.from(".page5 .review .ritem", {
        y: 400,
        delay: 0.3,
        duration: 0.6,
        stagger: 0.1,
      });

      // --- Page 6 (Subscribe & Save) Scroll Animation ---
      const tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page6",
          scroller: ".main",
          start: "top 60%",
          end: "top -10%",
          scrub: true,
        },
      });
      // Slide in main banner text
      tl7.from(".page6 .top h2", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.15,
      });
      tl7.from(".page6 .top #rc", {
        y: -50,
        opacity: 0,
        duration: 0.4,
        delay: 0.8,
        stagger: 0.15,
      });
      // Slide in features from the left
      tl7.from(".page6 .discount h1", {
        x: -400,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.4,
      });
      // Slide in the box image and button container in sync
      tl7.from(
        ".page6 .bottom img",
        {
          x: -400,
          opacity: 0,
          delay: 0.3,
          duration: 0.9,
          stagger: 0.4,
        },
        "royal"
      );
      tl7.from(
        ".page6 .bottom .royal",
        {
          x: 400,
          opacity: 0,
          delay: 0.3,
          duration: 0.6,
          stagger: 0.15,
        },
        "royal"
      );

      // --- Page 7 (Ambassadors Section) Scroll Animation ---
      const tl8 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page7",
          scroller: ".main",
          start: "top 50%",
          end: "top -105%",
          scrub: true,
        },
      });
      // Animate ambassadors headers and descriptions
      tl8.from(".page7 .ambassdor h1", {
        y: -200,
        opacity: 0,
        duration: 0.8,
      });
      tl8.from(".page7 .ambassdor p", {
        y: 50,
        opacity: 0,
        duration: 0.8,
      });

      // --- Page 8 (Inside Story Section) Scroll Animation ---
      const tl9 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page8",
          scroller: ".main",
          start: "top 50%",
          end: "top -30%",
          scrub: true,
        },
      });
      // Slide in the left side photo
      tl9.from(".page8 .left", {
        x: -200,
        opacity: 0,
        duration: 0.8,
      });
      // Slide in headers and paragraph text
      tl9.from(".page8 .item h1, .page8 .item p", {
        y: -110,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
      });
      // Slide in details cards from the right
      tl9.from(".page8 .right .details1", {
        x: 210,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
      });

      // --- Page 9 (Meet Founders Story) Scroll Animation ---
      const tl10 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page9",
          scroller: ".main",
          start: "top 50%",
          end: "top -20%",
          scrub: true,
        },
      });
      // Animate headers and paragraph
      tl10.from(".meetfounder h4, .meetfounder h1, .meetfounder p", {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
      // Scale-in the central founders photo
      tl10.from(".page9img", {
        scale: 1.3,
        opacity: 0.5,
        duration: 0.8,
      });

      // --- Page 10 (Hot Selling Slider) Scroll Animation ---
      const tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: ".page10",
          scroller: ".main",
          start: "top 50%",
          end: "top -20%",
          scrub: true,
        },
      });
      // Animate Hot Selling title
      tl11.from(".page10 .top", {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
      // Slide in navigation controls
      tl11.from(".page10 .middle", {
        x: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.15,
      });
      // Slide hot selling products up
      tl11.from(".page10 .hotselling", {
        y: 300,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.15,
      });

      // --- Footer Section Entrance Animation ---
      const tl12 = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          scroller: ".main",
          start: "top 50%",
          end: "top 10%",
          scrub: true,
        },
      });
      // Stagger footer navigation link blocks
      tl12.from(".footer .footpa", {
        y: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
      // Slide in bottom copyright and logo
      tl12.from(".footbottom p", {
        y: -40,
        delay: 0.5,
        opacity: 0,
        duration: 0.6,
      });
      tl12.from(".footbottom img", {
        y: 400,
        delay: 0.8,
        opacity: 0,
        duration: 0.8,
      });
    });

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      ctx.revert();
    };
  }, []);

  return (
    <div className="main">
      <CustomCursor />
      <HeroSection />
      <NostalgicSection />
      <QualityRatingSection />
      <ExploreFlavorSection />
      <CustomerReviewsSection />
      <SubscribeSaveSection />
      <AmbassadorsSection />
      <InsideStorySection />
      <FoundersSection />
      <HotSellingSection />
      <Footer />
    </div>
  );
}
