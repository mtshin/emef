import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import ClassEmailForm from "components/EmailForm/ClassEmailForm.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";

const useStyles = makeStyles(styles);

export default function EASCoursesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <ClassEmailForm />
        </GridItem>
      </GridContainer>
    </div>
  );
}
