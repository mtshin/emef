import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import MathCoursesBasic from "../Courses/MathCoursesBasic";

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
            problem solving.
          </h4>
        </GridItem>
        <MathCoursesBasic />
        <MathCoursesAdvanced />
      </GridContainer>
    </div>
  );
}
