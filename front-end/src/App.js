import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inscription from "./pages/Inscription";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import logo from "./assets/images/logo.jpg";
import logoTun from "./assets/images/logoTun.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className=" " style={{ direction: "rtl" }}>
      
    <BrowserRouter>
    <div className="d-flex  justify-content-center p-2 ">
        <div className="align-items-start d-flex ">
          <img
            src={logoTun}
            alt="logoTun"
            style={{ objectFit: "contain" }}
            className=" w-100"
          />
        </div>
        <div className=" col-10 d-flex align-items-center justify-content-center">
          <h1 className="text-center" style={{ direction: "ltr" }}>
            <span> Union Générale Tunisienne des Etudiants (UGTE)</span>{" "}
            -الإتحاد العام التونسي للطلبة
          </h1>
        </div>
        <div className="align-items-start d-flex ">
          <img
            src={logo}
            alt="logo"
            style={{ objectFit: "contain" }}
            className="w-100"
          />
        </div>
      </div>
      <Routes>
        <Route index element={<Inscription />} />
        <Route path="member/:memberId" element={<Profile/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
