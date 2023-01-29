import React from "react";
import "./footer.css";
import MakeLogo from "./MakeLogo/MakeLogo";

import machine from "../../assets/fontScreen/machine_coudre.png";

import insta from "../../assets/logo/insta.png";
import facebook from "../../assets/logo/facebook.png";

const Footer = () => {
  return (
    <div id="Footer" className="footer">
      <img src={machine} alt="machine à coudre" className="machine" />

      <div className="contacts">
        <h2>CONTACTS</h2>

        <div className="contact-items">
          <div className="adresse ">
            <h3>Adresse postale</h3>
            <p>adresse de l'atelier de Djibi</p>
          </div>

          <div className="mail ">
            <h3>Adresse e-mail</h3>
            <p>mail-De-Djibi@saraba.com</p>
          </div>

          <div className="tel ">
            <h3>Numero de téléphone</h3>
            <p>(FR)+33 07 76 72 17 42</p> <br />
            <p>(DKR)+221 77 823 78 28</p>
          </div>

          <div className="social-media ">
            <h3>Vous pouvez nous suivre sur nos réseaux</h3>
            <div className="media-icons">
              <a
                href="https://www.instagram.com/sarabacouture/"
                target="_blank"
                rel="noreferrer"
              >
                <MakeLogo pathLogo={insta} nomLogo="instagram" logoSize="3vw" />
              </a>
              {/* <a href="">
                <MakeLogo
                  pathLogo={facebook}
                  nomLogo="facebook"
                  logoSize="4vw"
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
