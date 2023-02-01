import React from "react";
import "./footer.css";
import MakeLogo from "./MakeLogo/MakeLogo";

import machine from "../../assets/fontScreen/machine_coudre.png";

import facebook from "../../assets/logo/facebook.png";
import insta from "../../assets/logo/insta.png";
import twitter from "../../assets/logo/twitter.png";

const Footer = () => {
  return (
    <div id="Footer" className="footer">
      <img src={machine} alt="machine à coudre" className="machine" />

      <div className="contacts">
        <h2>CONTACTS</h2>

        <div className="contact-items">
          <div className="adresse ">
            <h3>Adresse postale</h3>
            <p>adresse de l'atelier au senegal</p>
          </div>

          <div className="mail ">
            <h3>Adresse e-mail</h3>
            <p>contact@soiks.com</p>
          </div>

          <div className="tel ">
            <h3>Numero de téléphone</h3>
            <p> (FR) 06 28 97 63 26 // 06 52 76 46 79</p> <br />
            <p>(DKR)221 783 721 381 // 221 784 059 474</p>
          </div>

          <div className="social-media ">
            <h3>Vous pouvez nous suivre sur nos réseaux</h3>
            <div className="media-icons">
              <a href={1} target="_blank" rel="noreferrer">
                <MakeLogo pathLogo={insta} nomLogo="instagram" logoSize="3vw" />
              </a>
              <a href={1}>
                <MakeLogo
                  pathLogo={facebook}
                  nomLogo="facebook"
                  logoSize="4vw"
                />
              </a>

              <a href={1}>
                <MakeLogo pathLogo={twitter} nomLogo="twitter" logoSize="4vw" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyrighting">
        <p>©tout droit reservé</p>
        <p>by moupi</p>
      </div>
    </div>
  );
};

export default Footer;
