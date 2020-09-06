import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import CSCoursesBasic from "../Courses/CSCoursesBasic";
import CSCoursesAdvanced from "../Courses/CSCoursesAdvanced";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

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
            technologies that will translate to real world applications.
          </h4>
        </GridItem>
        <CSCoursesBasic />
        <CSCoursesAdvanced />
      </GridContainer>
    </div>
  );
}
