import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import CourseEmailForm from "components/EmailForm/CourseEmailForm.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";

const useStyles = makeStyles(styles);

export default function EASRegisterSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Registration</h2>
          <h4 className={classes.description}>
            Interested in a course? Submit the form to begin! Tuition must be
            paid on or before the first course of each session or paid in
            advanced to reserve a course. Please contact us directly at the
            phone numer or emails below and we will get back to you as soon as
            possible!
          </h4>
        </GridItem>
        <GridItem cs={12} sm={12} md={8}>
          <CourseEmailForm />
        </GridItem>
      </GridContainer>
    </div>
  );
}
