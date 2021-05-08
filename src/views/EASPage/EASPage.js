import EASAboutSection from "./Sections/EASAboutSection.js";
import EASCoursesSection from "./Sections/EASCoursesSection.js";
import EASGallerySection from "./Sections/EASGallerySection.js";
import EAS_BG_LARGE from "assets/img/eas_bg_large.jpg";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import usePaypalScript from "hooks/usePaypalScript.js";

// Load EAS Paypal script

// nodejs library that concatenates classes

// @material-ui/core components


// @material-ui/icons

// core components




// import Button from "components/CustomButtons/Button.js";
// import EASLandingPageCarousel from "components/Carousel/EASLandingPageCarousel.js";





// Sections for this page



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
        brand="EAS"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={EAS_BG_LARGE}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Evergreen Art Studio</h1>
              <h4>{/* EAS Landing page desc filler */}</h4>
            </GridItem>
          </GridContainer>
          {/* Temporarily removed until pictures are available */}
          {/* <EASLandingPageCarousel /> */}
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
