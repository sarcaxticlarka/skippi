import React from "react";

export default function ExploreFlavorSection() {
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
          <button>SHOP ALL</button>
        </div>
        <div className="buyprod">
          <div className="prod" id="prod1">
            <h2>Yum Yum Bubble Gum</h2>
            <img src="/assets/pic14.webp" alt="Yum Yum Bubble Gum" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta?</p>
            <div className="btn">
              <button>BUY NOW</button>
              <button>BUY IN STORES</button>
            </div>
          </div>
          <div className="prod p" id="prod2">
            <h2>Lemon-o-Licious</h2>
            <img src="/assets/pic15.webp" alt="Lemon-o-Licious" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta?</p>
            <div className="btn">
              <button>BUY NOW</button>
              <button>BUY IN STORES</button>
            </div>
          </div>
          <div className="prod" id="prod3">
            <h2>Refreshing Cola</h2>
            <img src="/assets/pic16.webp" alt="Refreshing Cola" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta?</p>
            <div className="btn">
              <button>BUY NOW</button>
              <button>BUY IN STORES</button>
            </div>
          </div>
          <div className="prod" id="prod4">
            <h2>Tengy Orange</h2>
            <img src="/assets/pic17.webp" alt="Tengy Orange" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta?</p>
            <div className="btn">
              <button>BUY NOW</button>
              <button>BUY IN STORES</button>
            </div>
          </div>
          <div className="prod" id="prod5">
            <h2>Raspberry Freshness</h2>
            <img src="/assets/pic18.webp" alt="Raspberry Freshness" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta?</p>
            <div className="btn">
              <button>BUY NOW</button>
              <button>BUY IN STORES</button>
            </div>
          </div>
          <div className="prod" id="prod6">
            <h2>Juicy Mango</h2>
            <img src="/assets/pic19.webp" alt="Juicy Mango" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta?</p>
            <div className="btn">
              <button>BUY NOW</button>
              <button>BUY IN STORES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
