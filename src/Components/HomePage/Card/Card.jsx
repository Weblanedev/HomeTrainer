import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__container--left">
        <img
          src="https://www.hometrainer.ng/wp-content/uploads/2024/03/kevin-turcios-WxfHL1Ab-Qk-unsplash-scaled.jpg"
          alt=""
        />
      </div>
      <div className="card__container--right">
        <span className="eating__for__impact">
          Eating For Impact: Some Ways to Eat for Energy
        </span>
        <p className="small__content">
          Because food is fuel for your body. What you eat — and when — can
          directly impact your energy levels.
        </p>
        <p className="small__content">
          If you’ve been feeling extra sluggish or want to steady the highs and
          lows that hit you throughout the day, try these energy-boosting tips.
        </p>
        <div className="tips">
          <div className="tips__content--container">
            <img src="/icons/Done.png" alt="" />
            <div className="tips__text">
              START YOUR DAY WITH A BALANCED BREAKFAST
            </div>
          </div>
          <div className="tips__content--container">
            <img src="/icons/Done.png" alt="" />
            <div className="tips__text">
              CHOOSE COMPLEX CARBS TO AVOID A CRASH
            </div>
          </div>
          <div className="tips__content--container">
            <img src="/icons/Done.png" alt="" />
            <div className="tips__text">OPT FOR LOW-SUGAR ALTERNATIVES</div>
          </div>
          <div className="tips__content--container">
            <img src="/icons/Done.png" alt="" />
            <div className="tips__text">EAT ENOUGH PROTEIN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
