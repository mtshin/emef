import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import PROFILE_BG from "assets/img/profile-bg.jpg";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import ResponsiveGallery from "components/Gallery/ResponsiveGallery";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { staffPhotos } from "assets/img/gallery/EASStaff/staffPhotos";
import styles from "assets/jss/material-kit-react/views/galleryPage.js";

// nodejs library that concatenates classes

// @material-ui/core components

// core components













const useStyles = makeStyles(styles);

export default function EASStaffGallery(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="EMEF"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax extraSmall filter image={PROFILE_BG} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Staff Gallery</h2>
                <h4 className={classes.description}>
                  All images shown are works done by our instructors at the EAS studio. Feel free to contact us if you are
                  interested in a commision or purchase!
                </h4>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.sectionGallery}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <ResponsiveGallery photos={staffPhotos} />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
