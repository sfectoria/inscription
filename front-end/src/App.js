import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inscription from "./pages/Inscription";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import logo from "./assets/images/logo.jpg";
import post from "./assets/images/post.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const datacount="2024-09-21T15:00:00"
  const [day, setDay] = useState("--");
  const [hour, setHour] = useState("--");
  const [minute, setMinute] = useState("--");
  const [second, setSecond] = useState("--");

  useEffect(() => {
    const interval = setInterval(countDownDate, 1000);
    return () => clearInterval(interval);
  }, []);

  const countDownDate = function () {
    let timeleft = new Date(datacount).getTime() - new Date().getTime();

    setDay(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinute(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSecond(Math.floor((timeleft % (1000 * 60)) / 1000));
  };
  return (
    <div className="" style={{ direction: "rtl" ,background:"#FCF7FD"}}>
      <BrowserRouter>
        <div className=" container-md    p-2 ">
          
          <div className="  d-flex col-12  justify-content-center ">
            <img
              src={post}
              alt="logoTun"
              style={{ objectFit: "contain",maxWidth:"500px" }}
              className=" w-100"
            />
          </div>
          <div
            className=" d-flex justify-content-center col-12  flex-wrap gap-2 text-danger py-3"
            // data-count="2023/12/5"
            // style={{direction:"ltr"}}

          >
            <div className="d-flex">
              <h3>{day}</h3>
              <h4>يوم</h4>
            </div>
            <div className="d-flex">
              <h3>{hour}</h3>
              <h4>ساعات</h4>
            </div>
            <div className="d-flex">
              <h3>{minute}</h3>
              <h4>دقائق</h4>
            </div>
            <div className="d-flex">
              <h3>{second}</h3>
              <h4>ثواني</h4>
            </div>
          </div>
        </div>
        <Routes>
          <Route index element={<Inscription />} />
          <Route path="member/:memberId" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
