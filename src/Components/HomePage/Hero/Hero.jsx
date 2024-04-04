import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const nav = useNavigate();
  const hanleNav = ()=>{
    nav("/checkout")
  }
  return (
    <div className="HeroPage">
      <div className="HeroPageWrapper">
        <div className="leftHero">
          <div className="Docdiv">
            <h1>
              Unleash Your Inner Athlete, Embrace <br /> Your Best Self
            </h1>
          </div>

          <div className="makingdiv">
            <h1>Transform Your Body, Elevate Your Mind</h1>
          </div>
          <div className="btndiv">
            <button className="started" onClick={hanleNav}>Get Started </button>
          </div>
        </div>
        {/* 
        <div className="rightHero">
          <div className="imgdiv">
            "{" "}
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV4ZXJjaXNlfGVufDB8fDB8fHww"
              alt=""
            />
            "{" "}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
