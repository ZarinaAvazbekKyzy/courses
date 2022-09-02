import React from "react";
import "./Footer.css";
import logo from "../../image/logo.svg";
import Facebook from "../../image/Facebook.svg";
import inst from "../../image/inst.svg";
import Twitter from "../../image/Twitter.svg";
import YouTube from "../../image/YouTube.svg";
import inc from "../../image/inc.svg";
import telegram from "../../image/telegram.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="block">
        <img src={logo} alt="logo" />
        <span>
          Createx Online School is a leader in online studying. <br />
          We have lots of courses and programs from the main <br /> market
          experts. We provide relevant approaches <br /> to online learning,
          internships and employment in the <br /> largest companies in the
          country.{" "}
        </span>
        <div className="medias">
          <a href="https://www.facebook.com/groups/185636926664364">
            <img src={Facebook} alt="facebookpage" />
          </a>
          <a href="https://www.instagram.com/makerskg/">
            <img src={inst} alt="inst" />
          </a>
          <a href="https://twitter.com/FreeCourses4all">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={YouTube} alt="youtube" />
          </a>
          <a href="#">
            <img src={inc} alt="inc" />
          </a>
          <a href="#">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
      <div className="block">
        <h2>SITE MAP</h2>
        <Link to="/about">
          <p>About Us</p>
        </Link>
        <Link to="/contacts">
          <p>Contacts</p>
        </Link>
      </div>
      <div className="block">
        <h2>COURSES</h2>
        <p>Marketing</p>
        <p>Management</p>
        <p>HR & Recruting</p>
        <p>Design</p>
        <p>Development</p>
      </div>
      <div className="block">
        <h2>CONTACT US</h2>
        <p>(405) 555-0128</p>
        <p>hello@createx.com</p>
      </div>
    </div>
  );
};

export default Footer;
