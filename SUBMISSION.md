# Project Submission: Skippi Brand Reimagined

This project recreates and enhances a key web screen flow for the popular Shark Tank brand **Skippi**, leveraging modern frontend practices to deliver a high-performance, fluid, and highly interactive user experience.

- **GitHub Repository**: [sarcaxticlarka/skippi](https://github.com/sarcaxticlarka/skippi)
- **Live Deployment Link**: [skippi-pied.vercel.app](https://skippi-pied.vercel.app/)

---

## 🛠️ Technology Choices & Rationale

- **Framework**: **Next.js 15 & React 19**
  - Next.js was chosen to facilitate efficient modular component structures, support fast developer rebuilds, compile optimized assets, and manage global state cleanly.
  - Client-side React hooks (`useState`, `useContext`, `useEffect`) power the dynamic checkout experience, store search, and slider features.
- **Styling System**: **Vanilla CSS (Custom CSS Modules)**
  - While we are fully experienced with Tailwind CSS, we chose **Vanilla CSS** for this project.
  - The design features complex fluid shapes, custom SVG wave dividers, absolute-viewport animations, and highly tailored color schemes for various fruit flavors. 
  - Vanilla CSS grants us direct, granular control over specific elements and transitions (e.g. customized responsive grids, curved text typography, and floating fruit keyframes) without cluttering the markup with long utility class chains.
- **Animations**: **GSAP (GreenSock Animation Platform)**
  - GSAP was incorporated to manage complex scroll-triggered parallax effects, staggered entry layouts, and custom cursor animations that react seamlessly to scroll triggers.

---

## 📁 Project Structure

```text
skippi/
├── public/                 # Static assets (images, logos, fonts, webp assets)
├── src/
│   ├── app/                # Next.js App Router (layout, globals, index page)
│   │   ├── globals.css     # Global styles compiling individual section sheets
│   │   ├── layout.tsx      # Main layout wrapping the global CartProvider
│   │   └── page.tsx        # Main container organizing modular sections and GSAP context
│   ├── components/         # Modular UI components
│   │   ├── Navbar.tsx      # Interactive Navigation with dynamic cart counts
│   │   ├── HeroSection.tsx # Landing viewport with GSAP SVG path text and CTA scroll
│   │   ├── CartDrawer.tsx  # Dynamic side checkout drawer with quantity modification
│   │   ├── StoreLocatorModal.tsx # Location finder for retail stores (Zepto, Blinkit, DMart)
│   │   ├── ToastNotification.tsx # Dynamic flavor-themed floating feedback alerts
│   │   ├── ExploreFlavorSection.tsx # Product selection cards connected to Cart/Modal
│   │   ├── HotSellingSection.tsx # Custom state-based sliding carousel
│   │   └── ...             # QualityRating, Nostalgic, SubscribeSave, Founders sections
│   ├── context/
│   │   └── CartContext.tsx # Shared context managing cart state, modals, and notifications
│   └── styles/             # Dedicated CSS style sheets for each modular section
```

---

## ⚡ Key Improvements Made

1. **State-Driven Interactivity (Removed Dead Clicks)**:
   - We transformed static mockup buttons into a fully functional shopping cart system. Clicking **"Buy Now"** or **"Order Now"** adds products to the cart, increments the counter in the navigation bar, and displays the slide-out Cart Drawer.
2. **Flavor-Themed Toast Alerts**:
   - Built a dynamic notification system. Whenever an item is added, a sliding alert pops up with a color matching that specific flavor (e.g. Pink for Bubble Gum, Green for Lemon, Brown-red for Cola).
3. **Store Locator Modal**:
   - Interactive modal listing physical supermarkets (e.g. DMart, Reliance) and Quick Commerce channels (Zepto, Blinkit) with search filtering and custom navigation markers.
4. **Hot Selling Slider Carousel**:
   - Replaced static content with an active React state slider. Clicking left/right navigation arrows cycles items smoothly in a circular loop.
5. **Enhanced CSS Hover Micro-animations**:
   - Added micro-transitions, scaling effects, and drop shadows to all buttons to guide the user's focus.

---

## 🚀 Performance, Responsiveness, & Maintainability

- **Maintainability**: Component segregation is maintained cleanly. CSS styles are divided into modular files inside `src/styles/` mapped to their corresponding files in `src/components/`, ensuring updates are fast and low-risk.
- **Responsiveness**: Fluid layout variables (`vw`, `vh`, `rem`, `%`) are paired with carefully positioned media queries (`src/styles/responsive.css`) to ensure elements resize correctly on smaller screens. The Cart Drawer and Store Modal adapt into full-screen views on mobile devices.
- **Performance**: Heavy media assets are optimized using `.webp` and `.avif` formats. Next.js server optimization loads lightweight scripts while keeping client overhead low.
- **Accessibility**: Includes clean semantic tags (`<header>`, `<nav>`, `<main>`, `<footer>`), appropriate button structures, and image alt text for assistive screen readers.
