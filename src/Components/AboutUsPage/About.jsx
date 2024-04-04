import React, { useEffect } from "react";
// import Header from "../HomePage/Header/Header";
// import Footer from "../HomePage/Footer/Footer";
import "./About.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";

const About = () => {

  
  return (
    <>
      {/* <Header /> */}
      <ScrollToTopOnMount />
      <div className="aboutUs__page">
        <div className="aboutUs__hero--page" id="about">
          <h1 className="aboutUs__hero--text">About Us</h1>
          <div className="aboutUs__hero--text1">
            Discover our team of dedicated fitness experts, meticulously
            selected and extensively trained to guide you through your wellness
            journey.
          </div>
        </div>

        <div className="card__container card2">
          <div className="card__container--right gap--10px">
            <span className="fitness__strength">ABOUT US</span>
            <span className="eating__for__impact aligned__self--start">
              Why HomeTrainer
            </span>
            <p className="small__content aligned__self--start">
              At the heart of our fitness app lies a commitment to integrity and
              professionalism. We pride ourselves on delivering on our promises
              and maintaining the highest standards of service. With a team of
              dedicated professionals, we bring a wealth of experience in
              managing projects with precision and expertise. Our journey is
              marked by successful deployments and management of various fitness
              initiatives, ensuring that our users receive top-notch support and
              guidance every step of the way.
            </p>
            {/* <p className="small__content">
          If you’ve been feeling extra sluggish or want to steady the highs and
          lows that hit you throughout the day, try these energy-boosting tips.
        </p> */}
          </div>
          <div className="card__container--left about__cardImage">
            <img
              src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-single-img.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
