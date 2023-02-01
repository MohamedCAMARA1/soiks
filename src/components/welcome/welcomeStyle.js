import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  welcome: {
    height: "auto",
    width: "100%",
    marginTop: "4vw",
    overflow: "hidden",
  },
  logo: {
    width: "14vw",
    height: "auto",
    position: "absolute",
    marginLeft: "60.5vw",
    marginTop: "10vw",
    zIndex: "999",
  },
  fontImg: {
    height: "auto",
    width: "105vw",
  },
  WelcomePageTitle: {
    width: "45vw",
    height: "13vw",
    position: "absolute",
    marginTop: "-18vw",
    marginLeft: "27vw",
    background: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly;",
    alignItems: "center",
    fontFamily: "Josefin Sans",
    color: "#C19440",
  },
  typeOfClothes: {
    overflow: "hidden",
    // width: "15.5vw",
    width: "100%",
    height: "4vw",
    position: "absolute",
    marginTop: "-7vw",
    // marginLeft: "7vw",
    display: "flex",
    justifyContent: "space-around;",
    alignItems: "stretch",
    fontFamily: "Josefin Sans",
    fontSize: "3.5vw",
  },
  clothesLink: {
    width: "20vw",
    backgroundColor: "#D2C286",
    borderRadius: "20px",
    textDecoration: "none",
    color: "white",
    transition: "0.3s",
    padding: "0.5vw",
    textAlign: "center",

    "&:hover": {
      backgroundColor: "#FFA064",
    },
  },
  phisEco_link: {
    marginRight: "-5vw",
    backgroundColor: "#008037",
    "&:hover": {
      backgroundColor: "#03AF4D",
      boxShadow: "#273A43 2.4px 2.4px 3.2px",
    },
  },
  woman_link: {
    marginLeft: "-5vw",
  },
  spandiv: {
    zIndex: "3",
    position: "relative",
    fontSize: "1.2vw",
    color: "#008037",
    fontWeight: "bold",
    top: "-2.5vw",
    left: "93vw",
  },
}));
