import React from "react";
// Load EAS Paypal script
import usePaypalScript from "hooks/usePaypalScript.js";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import EASLandingPageCarousel from "components/Carousel/EASLandingPageCarousel.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import EASAboutSection from "./Sections/EASAboutSection.js";
import EASCoursesSection from "./Sections/EASCoursesSection.js";
import EASGallerySection from "./Sections/EASGallerySection.js";
// import EASRegisterSection from "./Sections/EASRegisterSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  usePaypalScript(process.env.REACT_APP_PAYPAL_EAS_API_KEY);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="EMEF"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Evergreen Art Studio</h1>
              <h4>{/* EAS Landing page desc filler */}</h4>
            </GridItem>
          </GridContainer>
          <EASLandingPageCarousel />
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <EASAboutSection />
          <EASGallerySection />
          <EASCoursesSection />
          {/* <EASRegisterSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
