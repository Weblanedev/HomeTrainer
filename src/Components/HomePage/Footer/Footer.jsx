import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  function handleNav(val) {
    localStorage.setItem("navItem",val)

    if (val === "home") {
      nav("/");
      window.location.reload()
    } else if (val === "about") {
      nav("/aboutUs");
      window.location.reload()
    } else if (val === "blog") {
      nav("/blog");
      window.location.reload()
    } else if (val === "contact") {
      nav("/contactUs");
      window.location.reload()
    }
  }
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__top">
          {/* <div className="footer__top--container">
            <div className="footer__title">About Atb Tech</div>
            <div className="footer__content">
              <p className="footer__content--text">
                At the heart of our fitness app lies a commitment to integrity
                and professionalism. We pride ourselves on delivering on our
                promises and maintaining the highest standards of service. With
                a team of dedicated professionals, we bring a wealth of
                experience in managing projects with precision and expertise.
                Our journey is marked by successful deployments and management
                of various fitness initiatives, ensuring that our users receive
                top-notch support and guidance every step of the way.
              </p>
            </div>
          </div> */}
          <div className="footer__top--container">
            <div className="footer__title">What We Offer</div>
            <div className="footer__content">
              <p className="footer__content--text">Personalized Workouts</p>
              <p className="footer__content--text">Expert Guidance</p>
              <p className="footer__content--text">
                Customized Nutrition Plans
              </p>
              <p className="footer__content--text">
                Interactive Training Sessions
              </p>
              <p className="footer__content--text">Progress Tracking</p>
              <p className="footer__content--text">Community Suppor</p>
              <p className="footer__content--text">
                Accessible Anytime, Anywhere
              </p>
            </div>
          </div>
          <div className="footer__top--container">
            <div className="footer__title">Other Links</div>
            <div className="footer__content">
              <p className="footer__content--text">Privacy And Policy</p>
              <p className="footer__content--text">Terms And conditions</p>
            </div>
          </div>
          <div className="footer__top--container">
            <div className="footer__title">Customer Care</div>
            <div className="footer__content">
              <p
                className="footer__content--text"
                onClick={() => handleNav("contact")}
              >
                Contact Us
              </p>
              <p
                className="footer__content--text"
                onClick={() => handleNav("about")}
              >
                About Us
              </p>
              <p
                className="footer__content--text"
                onClick={() => handleNav("blog")}
              >
                Blog
              </p>
              {/* <p className="footer__content--text"></p> */}
            </div>
          </div>
        </div>
        <div className="footer__down">
          <h1 className="footer__logo" onClick={() => handleNav("home")}>
            HomeTrainer.
          </h1>
        </div>
        <div className="footer__footer">
          <p className="footer__footer--text">© 2023 HomeTrainer.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
