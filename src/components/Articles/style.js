import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  // articles: {
  //   background: "black",
  //   marginTop: "4vw",
  //   marginBottom: "4vw",
  //   width: "99%",
  // },
}));
