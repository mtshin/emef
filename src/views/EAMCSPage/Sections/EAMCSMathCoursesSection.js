import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import SaveAlt from "@material-ui/icons/SaveAlt";

// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MathCoursesBasic from "../Courses/MathCoursesBasic";

// docs
import EAMCSClassRegistrationForm from "assets/docs/EAMCS/EAMCSClassRegistrationForm.pdf";
import ScholarshipApplicationForm from "assets/docs/ScholarshipApplicationForm.pdf";
import FinancialAidApplicationForm from "assets/docs/FinancialAidApplicationForm.pdf";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";
import MathCoursesAdvanced from "../Courses/MathCoursesAdvanced";

const useStyles = makeStyles(styles);

export default function EAMCSMathCoursesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Math Classes</h2>
          <h4 className={classes.description}>
            Math classes for all levels focused for school, standardized exam prep (incl. Reading & Writing), or overall
            problem solving. If you have an inquiry for a class not listed please do not hesitate to contact us. You can also
            apply for a scholarship and/or financial aid with the corresponding forms below.
          </h4>
        </GridItem>
        <GridItem cs={12} sm={12} md={8}>
          <a
            href={EAMCSClassRegistrationForm}
            download="EAMCSClassRegistrationForm.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button round color="info">
              <SaveAlt />
              EAMCS Class Registration Form
            </Button>
          </a>
        </GridItem>
        <GridItem cs={12} sm={12} md={8}>
          <a
            href={ScholarshipApplicationForm}
            download="ScholarshipApplicationForm.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.buttonSidePadding}
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
        <MathCoursesBasic />
        <MathCoursesAdvanced />
      </GridContainer>
    </div>
  );
}
