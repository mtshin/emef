import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import ResponsiveGallery from "components/Gallery/ResponsiveGallery";
import { studioPhotos } from "assets/img/gallery/EASStudio/studioPhotos";

import styles from "assets/jss/material-kit-react/views/galleryPage.js";

const useStyles = makeStyles(styles);

export default function EASStudioGallery(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax extraSmall filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Studio Gallery</h2>
                <h5 className={classes.description}>
                  All images shown are works done by our instructors at the EAS studio. Feel free to contact us if you are
                  interested in a commision or purchase!
                </h5>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <ResponsiveGallery photos={studioPhotos} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
