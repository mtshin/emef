import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function EAMCSAboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Philosophy</h2>
          <h4 className={classes.description}>
            We truly believe anyone can be an artist and convey this message to our students through our teaching
            methodology. A potent visual thinking process is crucial to an artist and is developed by observing works through
            multiple perspectives and approaching subjects/mediums based on artistic fundamentals. Positive thinking,
            passion, open mindedness, respectfulness, willingness to share ideas, and strong fundamentals are the core values
            of the EAS culture and is reflected in our final works.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <VideoPlayer
            url="https://www.facebook.com/EvergreenMath/videos/3115002501878985/"
            width="100%"
            height="100%"
            controls={true}
            style={{ paddingTop: "3rem" }}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="success">
                <b>Our Teaching Philosophy</b>
              </CardHeader>
              <CardBody>
                <p>You can be an Artist. EAS teaches with the love of Jesus to instill hope and faith.</p>
                <Quote
                  className={classes.textCenter}
                  text="Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand."
                  author="Albert Einstein"
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
