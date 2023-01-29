import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  welcome: {
    height: "auto",
    width: "100%",
    marginTop: "3.4vw",
    overflow: "hidden",
  },
  logo: {
    width: "20vw",
    height: "auto",
    position: "absolute",
    marginLeft: "2.5vw",
    marginTop: "3vw",
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
    width: "40vw",
    position: "absolute",
    marginTop: "-28vw",
    marginLeft: "57vw",
    display: "flex",
    justifyContent: "space-around;",
    alignItems: "center",
    fontFamily: "Josefin Sans",
    fontSize: "3.5vw",
  },
  clothesLink: {
    textDecoration: "none",
    color: "white",
    boxShadow: "2px 2px 2px 0px",
    transition: "0.5s",
    padding: "0.4vw",
    "&:hover": {
      color: "black",
      boxShadow: "-2px -2px 2px 0px black",
    },
  },
}));
