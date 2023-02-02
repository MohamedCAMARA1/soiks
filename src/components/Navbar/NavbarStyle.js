import { makeStyles } from "@material-ui/core/styles";

// const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    // height: "4.5vw",
    // height: `calc(${heightScreen / 617}vw)`,
    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
    background:
      "linear-gradient(to right,rgba(1,1,1,1), #423939, rgba(210,194,134,1))",
  },

  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },

  refreshHome: {
    // fontFamily: "Josefin Sans",
    fontSize: "2vw",
    textDecoration: "none",
    letterSpacing: "3vw",
    fontWeight: "600",
    color: "#C19440",
    [theme.breakpoints.down("md")]: {
      fontSize: "4vw",
    },
    // [theme.breakpoints.down("md")]: { fontSize: "4vw" },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bandes: {
    width: "2vw",
    margin: "2vw",
    [theme.breakpoints.down("md")]: {
      width: "4vw",
    },
  },
  grow: {
    flexGrow: 1,
  },

  [theme.breakpoints.down("sm")]: {},
}));
