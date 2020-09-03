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
import Map from "components/Map/Map.js";
import Parallax from "components/Parallax/Parallax.js";

// Sections for this page
import TeamSection from "./Sections/TeamSection.js";

import styles from "assets/jss/material-kit-react/views/galleryPage.js";

const useStyles = makeStyles(styles);

export default function Employment(props) {
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
      <Parallax extraSmall filter image={require("assets/img/employment_bg_large.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classNames(classes.container, classes.botPadding)}>
          <TeamSection />
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Employment</h2>
                <h4 className={classes.description}>
                  Interested in working with us? We welcome those who share our values to reach out
                  to us. Please forward all inquiries with your resume/CV to{" "}
                  <a href="mailto:emef@teachers.org">emef900@gmail.com</a> or{" "}
                  <a href="mailto:emef@teachers.org">emef@teachers.org</a>. We look forward to
                  hearing from you!
                </h4>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>EAS Opportunities</h2>
                <h3 className={classes.title}>- Art Teacher -</h3>
                <h5 className={classes.description}>
                  Part-time opportunity. BFA or related field required. MTEL preferred but not
                  required.
                </h5>
                <h3 className={classes.title}>- Art Intern/Volunteer -</h3>
                <h5 className={classes.description}>
                  Paid internship or volunteer opportunity preferrably for students pursuing a BFA.
                  Learn under the mentorship of Jungrim &quot;Victoria&quot; Yea (MFA, EAS Art
                  Instructor).
                </h5>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>EAMCS Opportunities</h2>
                <h3 className={classes.title}>- Math/SAT/CS Teacher -</h3>
                <h5 className={classes.description}>
                  Part-time opportunity with the option to work remotely or onsite. BS in Math,
                  Computer Science or related field required. MTEL preferred but not required.
                </h5>
                <h3 className={classes.title}>- Math/SAT/CS Intern/Volunteer -</h3>
                <h5 className={classes.description}>
                  Paid internship or volunteer opportunity with the option to work remotely or
                  onsite. Preferrably for students pursuing a BS in Math, Computer Science, or
                  Education in these fields.
                </h5>
              </GridItem>
            </GridContainer>
          </div>
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
}
