import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StandardizedExamCourses from "../Courses/StandardizedExamCourses";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function EAMCSStandardizedExamCoursesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Standardized Exam Classes</h2>
          <h4 className={classes.description}>
            Standardized exam prep for Math, Reading, and Writing.
          </h4>
        </GridItem>
        <StandardizedExamCourses />
      </GridContainer>
    </div>
  );
}
