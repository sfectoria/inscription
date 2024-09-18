import React from "react";
import email from "../assets/images/email.png";
import tel from "../assets/images/tel.png";
import heart from "../assets/images/heart.png";
import logo from "../assets/images/logojalyss.jpg";

function Footer() {
  return (
    <div className="mT-5">
      <div
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#47174B" }}
      >
        <div
          className=" d-flex flex-wrap justify-content-around gap-5 p-5"
          style={{ direction: "ltr" }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={logo}
              alt="logo"
              height={60}
              width={60}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
            <p className="mt-2 text-center">
            رياديون في عالم المعرفة
            </p>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={tel}
              alt="tel"
              height={60}
              width={60}
              style={{ objectFit: "cover" }}
            />
            <p className="mt-2" style={{ direction: "ltr" }}>
              (+216) 003 165 51
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={email}
              alt="email"
              height={60}
              width={60}
              style={{ objectFit: "cover" }}
            />
            <p className="mt-2">jalysscom.book@gmail.com</p>
          </div>
        </div>

        <div
          className="p-3 d-flex flex-wrap justify-content-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div>
            <span>© 2024 </span>All rights reserved. | This template is made
            with
          TUNIRISE
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
