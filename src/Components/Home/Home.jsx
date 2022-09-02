import React from "react";
import "./Home.css";
import illustration from "../../image/illustration.png";
import desc from "../../image/desc.png";
import picture1 from "../../image/picture1.png";
import cert from "../../image/cert.png";
import uni1 from "../../image/uni1.png";
import uni2 from "../../image/uni2.png";
import uni3 from "../../image/uni3.png";
import member1 from "../../image/member1.png";
import member2 from "../../image/member2.png";
import member3 from "../../image/member3.png";
import member4 from "../../image/member4.png";
import hats from "../../image/hats.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <div className="homeHeadTop">
          <div className="homeHeadLeft">
            <h1>
              Enjoy studying <br /> with Createx <br /> Online Courses
            </h1>
            <div className="homeHeadBtns">
              <button className="redBtn">About Us</button>
              <button className="whiteBtn">Explore Courses</button>
            </div>
          </div>
          <div className="homeHeadRight">
            <img src={illustration} alt="illustration" id="illustration" />
          </div>
        </div>

        <div className="homeHeadBottom">
          <div className="headPoint">
            <h2 className="homeHeadText">1200 </h2>{" "}
            <span className="headPointSpan"> Students graduated</span>
          </div>
          <div className="headPoint">
            <h2 className="homeHeadText">84 </h2>
            <span className="headPointSpan"> Completed courses</span>
          </div>
          <div className="headPoint">
            <h2 className="homeHeadText">16 </h2>
            <span className="headPointSpan"> Qualified tutors</span>
          </div>
          <div className="headPoint">
            <h2 className="homeHeadText">5 </h2>
            <span className="headPointSpan"> Years of experience</span>
          </div>
        </div>
      </div>
      <div className="desc">
        <div className="descRight">
          <img src={desc} alt="girl" id="girl" />
        </div>
        <div className="descLeft">
          <div className="descLeftHead">
            <h3>Who we are</h3>
            <h2 className="homeHeadText">Why Createx?</h2>
          </div>

          <ul>
            <li className="descText">
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </li>
            <li className="descText">
              Vulputate placerat amet pulvinar lorem nisl.
            </li>
            <li className="descText">
              Consequat feugiat habitant gravida quisque elit bibendum id
              adipiscing sed.
            </li>
            <li className="descText">
              Etiam duis lobortis in fames ultrices commodo nibh.
            </li>
            <li className="descText">Tincidunt sagittis neque sem ac eget.</li>
            <li className="descText">
              Ultricies amet justo et eget quisque purus vulputate dapibus
              tortor.
            </li>
          </ul>
          <button className="redBtn">More about us</button>
        </div>
      </div>
      <div className="benefits">
        <div className="benefitsTop">
          <h3>Our benefits</h3>
          <h2 className="homeHeadText">That’s how we do it</h2>
        </div>
        <div className="benefitsBottom">
          <div className="benefitsLeft">
            <h2 className="homeHeadText">Only practicing tutors</h2>
            <ul>
              <li className="descText">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </li>
              <li className="descText">
                Vulputate placerat amet pulvinar lorem nisl.
              </li>
              <li className="descText">
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </li>
              <li className="descText">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </li>
              <li className="descText">
                Tincidunt sagittis neque sem ac eget.
              </li>
              <li className="descText">
                Ultricies amet justo et eget quisque purus vulputate dapibus
                tortor.
              </li>
            </ul>
          </div>
          <div className="benefitsRight">
            <img src={picture1} alt="picture of girls" id="pic1" />
          </div>
        </div>
      </div>

      <div className="certificate">
        <div className="certificateRight">
          <img src={cert} alt="image" className="certificateImg" />
        </div>
        <div className="certificateLeft">
          <h3>Createx Certificate</h3>
          <h2 className="homeHeadText">Your expertise will be confirmed</h2>
          <li className="descText">
            We are accredited by international professional organizations and
            institutes:
          </li>
          <div className="unis">
            <img src={uni1} alt="image" />
            <img src={uni2} alt="image" />
            <img src={uni3} alt="image" />
          </div>
        </div>
      </div>
      <div className="team">
        <div className="teamHead">
          <h3>Meet our team</h3>
          <h2 className="homeHeadText">That’s how we do it</h2>
        </div>
        <div className="teamBottom">
          <div className="member">
            <img src={member1} alt="person" />
          </div>
          <div className="member">
            <img src={member2} alt="person" />
          </div>
          <div className="member">
            <img src={member3} alt="person" />
          </div>
          <div className="member">
            <img src={member4} alt="person" />
          </div>
        </div>
      </div>

      <div className="subscribe">
        <div className="pic">
          <img src={hats} alt="illustration" id="hats" />
        </div>
        <div className="botPage">
          <h3>Don’t miss anything</h3>
          <h2 className="homeHeadText">
            If you have questions write into our <br /> Telegram bot
          </h2>
          <button className="redBtn">
            <a href="https://t.me/createXcourses_bot"> Telegram bot</a>
          </button>
        </div>
        <div className="pic">
          <img src={hats} alt="illustration" id="hats" />
        </div>
      </div>
    </div>
  );
};

export default Home;
