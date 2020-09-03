import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import SaveAlt from "@material-ui/icons/SaveAlt";
// core components
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// docs
import ScholarshipApplicationForm from "assets/docs/ScholarshipApplicationForm.pdf";
import FinancialAidApplicationForm from "assets/docs/FinancialAidApplicationForm.pdf";

import styles from "assets/jss/material-kit-react/views/galleryPage.js";

const useStyles = makeStyles(styles);

export default function FinancialAid(props) {
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
      {
        //TODO: Replace background pic
      }{" "}
      <Parallax extraSmall filter image={require("assets/img/finaid_bg_large.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classNames(classes.section, classes.botMargin)}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Financial Aid</h2>
                <h4 className={classes.description}>
                  It is our mission to provide education to all without discrimination of any kind
                  including but not limited to financial circumstances. Please fill out the relevant
                  forms and send to <a href="mailto:emef@teachers.org">emef900@gmail.com</a> or{" "}
                  <a href="mailto:emef@teachers.org">emef@teachers.org</a>.
                </h4>
              </GridItem>
              <GridItem cs={12} sm={12} md={8} className={classes.topMargin}>
                <a
                  href={ScholarshipApplicationForm}
                  download="ScholarshipApplicationForm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button round color="info">
                    <SaveAlt />
                    Scholarship Application Form
                  </Button>
                </a>
              </GridItem>
              <GridItem cs={12} sm={12} md={8}>
                <a
                  href={FinancialAidApplicationForm}
                  download="FinancialAidApplicationForm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button round color="info">
                    <SaveAlt />
                    Financial Aid Application Form
                  </Button>
                </a>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
