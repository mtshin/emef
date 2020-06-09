import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import SaveAlt from "@material-ui/icons/SaveAlt";

// core components
import CSCoursesBasic from "../Courses/CSCoursesBasic";
import CSCoursesAdvanced from "../Courses/CSCoursesAdvanced";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// docs
import EAMCSClassRegistrationForm from "assets/docs/EAMCS/EAMCSClassRegistrationForm.pdf";
import ScholarshipApplicationForm from "assets/docs/ScholarshipApplicationForm.pdf";
import FinancialAidApplicationForm from "assets/docs/FinancialAidApplicationForm.pdf";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function EAMCSCSCoursesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Computer Science Classes</h2>
          <h4 className={classes.description}>
            Computer Science is an every growing field and we are here to help get you up to speed! Learn crucial
            technologies that will translate to real world applications. If you have an inquiry for a class not listed please
            do not hesitate to contact us. You can also apply for a scholarship and/or financial aid with the corresponding
            forms below.
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
        <CSCoursesBasic />
        <CSCoursesAdvanced />
      </GridContainer>
    </div>
  );
}
