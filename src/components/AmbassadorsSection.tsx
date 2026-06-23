import React from "react";

export default function AmbassadorsSection() {
  return (
    <div className="page7">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path
          fill="#FC363A"
          fillOpacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,165.3C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="page7div">
        <div className="top">
          <h1>SKIPPI</h1>
          <h1>SKIPPI</h1>
          <h1>SKIPPI</h1>
          <h1>SKIPPI</h1>
          <h1>SKIPPI</h1>
          <h1>SKIPPI</h1>
        </div>
        <div className="ambassdor">
          <h1>SKIPPI AMBASSADORS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum aspernatur, sit neque
            iste aperiam.
          </p>
        </div>
        <div className="influence">
          <div className="vediocont">
            <div className="content">
              <video muted loop autoPlay playsInline src="/assets/anupam.mp4"></video>
            </div>
            <div className="namedetail">
              <div className="divl">
                <div className="amimg">
                  <img src="/assets/pic24.jpg" alt="Anupam" />
                </div>
                <h2>Anupam</h2>
              </div>
              <div className="divr">
                <h4>
                  875.9K &nbsp;<i className="ri-user-3-fill"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="vediocont">
            <div className="content">
              <video muted loop autoPlay playsInline src="/assets/simple.mp4"></video>
            </div>
            <div className="namedetail">
              <div className="divl">
                <div className="amimg">
                  <img src="/assets/pic25.webp" alt="Peoples" />
                </div>
                <h2>Peoples</h2>
              </div>
              <div className="divr">
                <h4>
                  875.9K &nbsp;<i className="ri-user-3-fill"></i>
                </h4>
              </div>
            </div>
          </div>
          <div className="vediocont">
            <div className="content">
              <video muted loop autoPlay playsInline src="/assets/founder.mp4"></video>
            </div>
            <div className="namedetail">
              <div className="divl">
                <div className="amimg">
                  <img src="/assets/pic26.cms" alt="Founders" />
                </div>
                <h2>Founders</h2>
              </div>
              <div className="divr">
                <h4>
                  875.9K &nbsp;<i className="ri-user-3-fill"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
