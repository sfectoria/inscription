import React from "react";
import email from "../assets/images/email.png";
import tel from "../assets/images/tel.png";
import heart from "../assets/images/heart.png";
import logo from "../assets/images/logo.jpg";

function Footer() {
  return (
    <div className=" my-5">
      <div
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1a2e45" }}
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
              Union Générale Tunisienne des Etudiants (UGTE) - <br /> الإتحاد
              العام التونسي للطلبة
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
              (+216) 50 031 190
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
            <p className="mt-2">ugte.tn@hotmail.com</p>
          </div>
        </div>

        <div
          className="p-3 d-flex flex-wrap justify-content-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div>
            <span>© 2023 </span>All rights reserved. | This template is made
            with
            <img
              src={heart}
              alt="heart"
              width={20}
              height={20}
              style={{ marginRight: 6, marginLeft: 6 }}
            />
            by
            <a
              className="text-white"
              href="https://www.sfectoria.com"
              style={{ marginLeft: 10 }}
            >
              SFECTORIA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
