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
// import EAMCSLandingPageCarousel from "components/Carousel/EAMCSLandingPageCarousel.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import EAMCSAboutSection from "./Sections/EAMCSAboutSection.js";
import EAMCSMathCoursesSection from "./Sections/EAMCSMathCoursesSection.js";
import EAMCSCSCoursesSection from "./Sections/EAMCSCSCoursesSection.js";
// import EAMCSRegisterSection from "./Sections/EAMCSRegisterSection.js";
import EAMCSStandardizedExamCoursesSection from "./Sections/EAMCSStandardizedExamCoursesSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  usePaypalScript(process.env.REACT_APP_PAYPAL_EAMCS_API_KEY); // TODO: Replace with legit EAMCS API key when making the change
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="EAMCS"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/eamcs_bg_large.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Evergreen Academy of Math & Computer Science</h1>
              <h4>{/* EAMCS landing page desc filler */}</h4>
            </GridItem>
          </GridContainer>
          {/* Temporarily removed until pictures are available */}
          {/* <EAMCSLandingPageCarousel /> */}
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <EAMCSAboutSection />
          <EAMCSMathCoursesSection />
          <EAMCSStandardizedExamCoursesSection />
          <EAMCSCSCoursesSection />
          {/* <EAMCSRegisterSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
