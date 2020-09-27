import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import jehoPhoto from "assets/img/faces/card-profile1-square.jpg";
import jungrimPhoto from "assets/img/faces/avatar.jpg";
import matthewPhoto from "assets/img/faces/christian.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Staff</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={jehoPhoto} alt="jehoPhoto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jeho &apos;Daniel&apos; Shin
                <br />
                <small className={classes.smallTitle}>CEO | President</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do.
                  Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={jungrimPhoto} alt="jungrimPhoto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jungrim &apos;Victoria&apos; Yea
                <br />
                <small className={classes.smallTitle}>Treasurer | Secretary</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do.
                  Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={matthewPhoto} alt="matthewPhoto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Matthew Shin
                <br />
                <small className={classes.smallTitle}>Director</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do.
                  Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
