import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import AdultCourses from "../Courses/AdultCourses";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import KidCourses from "../Courses/KidCourses";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function EASCoursesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Courses</h2>
          <h4 className={classes.description}>
            We offer a variety of courses for all age groups or niche purposes.
            Check out our catalog below!
          </h4>
        </GridItem>
        <KidCourses />
        <AdultCourses />
      </GridContainer>
    </div>
  );
}
