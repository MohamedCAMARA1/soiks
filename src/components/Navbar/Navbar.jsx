import React from "react";

import {
  AppBar,
  Toolbar,
  iconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  IconButton,
  ThemeProvider,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./NavbarStyle";
import bandes from "../../assets/logo/bandes_soiks.svg";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    // <div className={classes.navbar}>
    //   Navba
    //   <a href="#Welcome">home</a>
    //   <a href="#Articles">Articles</a>
    //   <a href="#AboutUs">a prospos de nous</a>
    //   <a href="#Footer">footer</a>
    // </div>

    <>
      <AppBar className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            vriant="h6"
            className={classes.title}
            color="inherit"
            component={"span"}
          >
            <img src={bandes} alt="bandes logo" className={classes.bandes} />
            <a href="/" className={classes.refreshHome}>
              SOIKS
            </a>

            {/*classes.grow pour mettre un espace qui occupera le maximum d'espace entre le membre de gauche et celui de droite*/}
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton area-aria-label="show cart items" color="inherit">
                <Badge
                  badgeContent={5}
                  // badgeContent={totalItems}
                  color="secondary"
                  overlap="rectangular"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
