import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import GeneralEmailForm from "components/EmailForm/GeneralEmailForm.js";

import Map from "components/Map/Map.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Contact Us</h2>
      <h4 className={classes.description}>
        Interested in what we do? We are currently based in Rockland, MA and
        welcome all inquiries for our non-profit or business divisions. Give us
        a call or submit an inquiry below and we will get back to you as soon as
        possible!
      </h4>
      <Map />
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <GeneralEmailForm />
        </GridItem>
      </GridContainer>
    </div>
  );
}
