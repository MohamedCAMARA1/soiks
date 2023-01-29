import React from "react";
import "./aboutUs.css";
import AboutUs_img from "../../assets/fontScreen/About_us.png";

import first_value_img from "../../assets/clothes/duo.JPG";
import second_value_img from "../../assets/clothes/famille_basin.JPG";
import third_value_img from "../../assets/clothes/solo.JPG";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="aboutUs">
      <img src={AboutUs_img} alt="about us screen" className="AboutUs_img" />

      <div className="values_container">
        <h2>NOUS INNOVONS POUR VOUS ET VOS PROCHES</h2>

        <div className="values">
          <div className="first_value value">
            <img
              src={first_value_img}
              alt="style individuel accordé avec la montre"
            />
            <h4>Des vêtements qui vous correspondent</h4>

            <p>
              Un style atypique? Une personnalisation ?<br />
              Soumettez nous vos envies, nos tailleurs seront là pour vous!{" "}
            </p>
          </div>

          <div className="second_value value">
            <img src={second_value_img} alt="basin en famille" />

            <h4>Un large choix de vêtements</h4>
            <p>
              Nous créons pour vous. Découvrez le talent de tailleurs
              exceptionnels. <br />
              Qualité assuré!
            </p>
          </div>

          <div className="third_value value">
            <img src={third_value_img} alt="duo de basin blanc" />
            <h4>Fabrication 100% Sénégalaise</h4>
            <p>
              Les articles que nous proposons constitueront un excellent moyen
              pour vous d'assortir votre style. En plus, elles sont fabriquées
              au Sénégal.
            </p>
          </div>
        </div>
      </div>
      <div className="blank"></div>
      {/* /!\ peut être 1 caroussel pour la fil actu insta? */}
    </div>
  );
};

export default AboutUs;
