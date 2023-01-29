import React from "react";

import welcomeFont from "../../assets/fontScreen/welcome_font.png";
import logo from "../../assets/logo/logo_Soiks.svg";
import useStyles from "./welcomeStyle";
import "./Welcome.css";

const Welcome = () => {
  const classes = useStyles();

  return (
    <div id="Welcome" className={classes.welcome}>
      <img className={classes.logo} src={logo} alt="logo SOIKS" />
      <img
        className={classes.fontImg}
        src={welcomeFont}
        alt="fond ecran Accueil"
      />

      <div className={classes.WelcomePageTitle}>
        <h1 style={{ fontSize: "6.5vw", fontWeight: "400", margin: "0" }}>
          SOIKS
        </h1>
        <h3
          style={{
            fontSize: "1.7vw",
            fontWeight: "300",
            margin: "0",
            letterSpacing: "0.5vw",
          }}
        >
          La mode rien que pour vous!
        </h3>
      </div>

      <div className={classes.typeOfClothes}>
        <a href="/" className={classes.clothesLink}>
          GETZNER
        </a>
        <a href="/" className={classes.clothesLink}>
          MAKISSAL
        </a>
      </div>
    </div>
  );
};

export default Welcome;
