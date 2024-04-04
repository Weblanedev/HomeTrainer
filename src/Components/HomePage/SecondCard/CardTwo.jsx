import React from "react";
import "./Card2.css"

const CardTwo = () => {
  return (
    <div className="card__container card2">
      <div className="card__container--right gap--10px">
      <span className="fitness__strength">
        FITNESS AND STRENGTH
        </span>
        <span className="eating__for__impact aligned__self--start">
          How to Find the Best Yoga Style For You
        </span>
        <p className="small__content aligned__self--start">
          According to Ashley Sondergaard, a registered yoga teacher, and host
          of the Yoga Magic Podcast, the key question to ask yourself when
          searching for a yoga style is: What do I want out of my yoga practice?
          Maybe you’re looking to reduce stress, strengthen muscles, increase
          flexibility or tap into your spirituality. Whatever benefits you’re
          hoping for, chances are there’s a yoga style for you.
        </p>
      </div>
      <div className="card__container--left">
        <img
          src="https://www.hometrainer.ng/wp-content/uploads/2024/03/patrick-malleret-p-v1DBkTrgo-unsplash-scaled.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardTwo;
