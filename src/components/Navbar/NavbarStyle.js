import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    // boxShadow: "none",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background:
      "linear-gradient(300deg, rgba(210,194,134,1) 10%,rgba(130,119,89,1) 28%, rgba(1,1,1,1) 36.5%)",
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },

  image: {
    marginRight: "10px",
  },
  refreshHome: {
    // fontFamily: "Josefin Sans",
    fontSize: "2vw",
    textDecoration: "none",
    letterSpacing: "3vw",
    fontWeight: "600",
    color: "#C19440",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  bandes: { width: "2vw", margin: "2vw" },
  grow: {
    flexGrow: 1,
  },
}));
