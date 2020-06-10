import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

// gallery card photos
import EASPhoto from "assets/img/bg.jpg";
import EAMCSPhoto from "assets/img/bg2.jpg";

import { cardTitle } from "assets/jss/material-kit-react.js";

const cardStyles = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(styles);
const useCardStyles = makeStyles(cardStyles);

export default function EASGallerySection() {
  const classes = useStyles();
  const cardClasses = useCardStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Gallery</h2>
          <h4 className={classes.description}>Explore works done from our students and instructors!</h4>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column"
                }}
                className={cardClasses.imgCardTop}
                src={EASPhoto}
                alt="EASPhoto"
              />
              <CardBody
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              >
                <h4 className={cardClasses.cardTitle}>Studio Gallery</h4>
                <p>Works done by our EAS instructors. Please inquire for commissions or purchase!</p>
                <Button component={Link} to="/eas/studioGallery" color="primary">
                  View Studio Gallery
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <img
                style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}
                className={cardClasses.imgCardTop}
                src={EAMCSPhoto}
                alt="EAMCSPhoto"
              />
              <CardBody
                style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}
              >
                <h4 className={cardClasses.cardTitle}>Student Gallery</h4>
                <p>Works done by our students in EAS classes.</p>
                <Button component={Link} to="/eas/studentGallery" color="primary">
                  View Studio Gallery
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
