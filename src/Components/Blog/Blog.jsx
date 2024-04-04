import React from "react";
import "./Blog.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import Card from "../HomePage/Card/Card";
import CardTwo from "../HomePage/SecondCard/CardTwo";

const Blog = () => {
  
  return (
    <>
      {/* <Header /> */}
      <ScrollToTopOnMount />
      <div className="blog__container">
        <div className="HeroPage__container">
          <p className="hero__text">HEALTH TIPS</p>
        </div>

        <div className="blog__post--container">
          <div className="blog__post--wrapper">
            <div className="blog__post--content">
              <div className="blog__post--pictureContent">
                <img
                  src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-img-1.jpg"
                  alt=""
                />
              </div>
              <div className="blog__post--textContent">
                <span className="blog__post--section">health</span>
                <p className="blog__post--heading">KEEP YOUR BODY IT’S BEST</p>
                <p className="blog__post--writeUp">
                  Regular exercise helps in improving physical fitness by
                  increasing strength, endurance, flexibility, and coordination.
                  This enhances overall functionality and reduces the risk of
                  injuries in daily activities. Exercise helps in burning
                  calories, which aids in weight management. By combining
                  exercise with a balanced diet, individuals can maintain a
                  healthy weight, reducing the risk of obesity and related
                  health conditions such as diabetes, heart disease, and certain
                  cancers. Aerobic exercises, such as running, swimming, and
                  cycling, promote a healthy heart and circulatory system. They
                  improve blood circulation, lower blood pressure, and reduce
                  the risk of cardiovascular diseases like heart attacks and
                  strokes.
                </p>
                <hr className="blog__post--hr" />
              </div>
            </div>
            <div className="blog__post--content">
              <div className="blog__post--pictureContent">
                <img
                  src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-img-2.jpg"
                  alt=""
                />
              </div>
              <div className="blog__post--textContent">
                <span className="blog__post--section">health</span>
                <p className="blog__post--heading">
                  THE HEALTHY LIFE, THE BEST
                </p>
                <p className="blog__post--writeUp">
                  Weight-bearing exercises, such as weightlifting and resistance
                  training, help in building and maintaining muscle mass and
                  bone density. This is particularly important in preventing
                  osteoporosis and reducing the risk of fractures, especially as
                  one ages. Exercise has been shown to have numerous benefits
                  for mental health. It reduces stress, anxiety, and depression
                  by releasing endorphins, the body's natural mood elevators.
                  Regular physical activity also improves cognitive function,
                  memory, and sleep quality.
                </p>
                <hr className="blog__post--hr" />
              </div>
            </div>
            <div className="blog__post--content">
              <div className="blog__post--pictureContent">
                <img
                  src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-img-3.jpg"
                  alt=""
                />
              </div>
              <div className="blog__post--textContent">
                <span className="blog__post--section">health</span>
                <p className="blog__post--heading">EAT RIGHT, BE BRIGHT</p>
                <p className="blog__post--writeUp">
                  Regular physical activity is the cornerstone of maintaining
                  peak performance and optimal health. Just as Lorem Ipsum
                  signifies the importance of structured content, exercise
                  signifies the importance of structured movement. Engaging in
                  consistent exercise routines not only strengthens the body but
                  also enhances overall well-being. It's like nurturing a
                  garden; each workout session cultivates resilience, vitality,
                  and balance within. So, let's embark on this journey together,
                  sculpting our bodies and minds into masterpieces of vitality
                  and strength.
                </p>
                <hr className="blog__post--hr" />
              </div>
            </div>

            <div className="blog__post--prompt">
              <span className="blogPost__text">
                A GREAT PLACE TO BE. FOR THAT FEMININE LOOK YOU ALWAYS WANTED.
              </span>
            </div>

            <div className="blog__post--content">
              <div className="blog__post--pictureContent">
                <img
                  src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-img-4.jpg"
                  alt=""
                />
              </div>
              <div className="blog__post--textContent">
                <span className="blog__post--section">health</span>
                <p className="blog__post--heading">
                  HOW TO CHOOSE THE RIGHT EQUIPMENT
                </p>
                <p className="blog__post--writeUp">
                  To ensure you make the most informed decision, consider the
                  following comprehensive guide: Firstly, assess your fitness
                  goals. Whether you aim to lose weight, build muscle, improve
                  cardiovascular health, or enhance flexibility, understanding
                  your objectives will guide you in selecting the appropriate
                  equipment to support your specific goals. Once you've
                  identified your goals, consider your current fitness level.
                  Beginners may opt for equipment with adjustable resistance or
                  intensity settings, allowing for gradual progression as
                  strength and endurance improve. On the other hand, more
                  advanced individuals may prefer equipment that offers greater
                  resistance or challenges to continue pushing their limits.
                </p>
                <hr className="blog__post--hr" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card />
    <CardTwo />
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
