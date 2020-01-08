import React, { Component } from "react";
import Fb from "../assets/Diverse/Fb.svg";
import insta from "../assets/Diverse/insta.svg";
import twitter from "../assets/Diverse/twitter.svg";
import info from "../assets/Diverse/info.svg";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="gridlayout">
        <div className="middle">
          <div className="icons" style={{ background: "black" }}>
            <img src={Fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </div>

          <div className="footer">
            <div>
              <p style={{ fontWeight: "bold" }}>RetroCam</p>
              <p>Kannikegade 12</p>
              <p>Århus 8000 C</p>
              <p>Mail: Spamhester@spam.com</p>
            </div>

            <div>
              <p style={{ fontWeight: "bolder" }}>
                {" "}
                <img src={info} alt="" />
                Oplysninger:
              </p>
              <p>Dette website er et skoleprojekt.</p>
              <p>
                De viste vare er ikke til salg og er udelukkende vist til
                demostrationsformål.
              </p>
              <p>Websitet er opbygget i react af Hest. Jan 2020</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
