import EAMCSAboutSection from "./Sections/EAMCSAboutSection.js";
import EAMCSCSCoursesSection from "./Sections/EAMCSCSCoursesSection.js";
import EAMCSMathCoursesSection from "./Sections/EAMCSMathCoursesSection.js";
import EAMCSStandardizedExamCoursesSection from "./Sections/EAMCSStandardizedExamCoursesSection.js";
import EAMCS_BG_LARGE from "assets/img/eamcs_bg_large.jpg";
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
// import EAMCSLandingPageCarousel from "components/Carousel/EAMCSLandingPageCarousel.js";






// Sections for this page



// import EAMCSRegisterSection from "./Sections/EAMCSRegisterSection.js";


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
      <Parallax filter image={EAMCS_BG_LARGE}>
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
