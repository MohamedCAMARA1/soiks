import React from "react";

import logo from "../../assets/logo/logo_Soiks.svg";
import useStyles from "./welcomeStyle";
import "./Welcome.css";

const Welcome = () => {
  const classes = useStyles();

  return (
    <div id="Welcome" className={classes.welcome}>
      <img className={classes.logo} src={logo} alt="logo SOIKS" />

      <div className="imgWelcome_container">
        <div className="women">
          <div className="woman_turned"></div>
        </div>
        <div className="men">
          <div className="man_turned"></div>
        </div>
        <div className="phis_eco">
          <div className="phis_eco_turned"></div>
        </div>
      </div>

      <div className={classes.typeOfClothes}>
        <a href="/" className={`${classes.clothesLink} ${classes.woman_link}`}>
          FEMME
        </a>
        <a href="/" className={`${classes.clothesLink} ${classes.man_link}`}>
          HOMME
        </a>

        <a
          href="/"
          className={`${classes.clothesLink} ${classes.phisEco_link}`}
        >
          PHIS-ECO
        </a>
      </div>
      <span className={classes.spandiv}>By SOIKS</span>
    </div>
  );
};

export default Welcome;
