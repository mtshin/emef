import Card from "components/Card/Card.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import jehoPhoto from "assets/img/faces/Daniel.png";
import jungrimPhoto from "assets/img/faces/Victoria.jpg";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import matthewPhoto from "assets/img/faces/Matthew.png";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

// @material-ui/icons

// import CardBody from "components/Card/CardBody.js";



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
                CEO | President
                <br />
                <small className={classes.smallTitle}>Jeho &apos;Daniel&apos; Shin</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do.
                  Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={jungrimPhoto} alt="jungrimPhoto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Treasurer | Secretary
                <br />
                <small className={classes.smallTitle}>Jungrim &apos;Victoria&apos; Yea</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do.
                  Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={matthewPhoto} alt="matthewPhoto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Director
                <br />
                <small className={classes.smallTitle}>Matthew Shin</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do.
                  Feel free to add some <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Administrative Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Beverly Wu</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Education Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Haleema &apos;Halee&apos; Tahseen</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Education Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Julia Dorris</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Education Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Nandni Patel</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Education Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Peter James</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Education Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Peyton Liu</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Math Teacher Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Caleb Heaslip</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Staff Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Paula Lynch</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Staff Assistant (Volunteer)
                <br />
                <small className={classes.smallTitle}>Sushmita &apos;Sonia&apos; Chatterji</small>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
