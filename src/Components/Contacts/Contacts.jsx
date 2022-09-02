import React from "react";
import "./Contacts.css";
import address from "../../image/address.png";
import hats from "../../image/hats.png";
const Contacts = () => {
  return (
    <div>
      <div className="contacts__top">
        <div className="contacts__left">
          <div className="contacts__left__top">
            <h3>Contact info</h3>
            <h2 className="contactHead">Get in touch</h2>
          </div>
          <div className="contacts__left__middle">
            <div className="contacts_data">
              <h4>Talk to us:</h4>
              <h3>hello@createx.com</h3>
            </div>
            <div className="contacts_data">
              <h4>Call us:</h4>
              <h3>(405) 555-0128</h3>
            </div>{" "}
            <div className="contacts_data">
              <h4>Address:</h4>
              <h3>2464 Royal Ln. Mesa, New Jersey 45463, USA</h3>
            </div>
          </div>
        </div>
        <div className="contacts__right">
          <img src={address} alt="address" id="contactAddress" />
        </div>
      </div>

      <div className="subscribeContacts">
        <div className="pic">
          <img src={hats} alt="illustration" id="illustration" />
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
          <img src={hats} alt="illustration" id="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
