import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/galleryPage.js";
import NewsPost from "./Sections/NewsPost";

const useStyles = makeStyles(styles);

export default function News(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="News"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax extraSmall filter image={require("assets/img/news_bg_large.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classNames(classes.section, classes.botMargin)}>
            <>
              <GridContainer justify="center" className={classNames(classes.botPadding, classes.botMargin)}>
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.title}>News</h2>
                  <h4 className={classes.description}>The latest news and happenings in the EMEF organization.</h4>
                </GridItem>
              </GridContainer>
              <NewsPost
                title={"Ten Years!"}
                description={
                  "We celebrate EMEF CEO & President, Jeho 'Daniel' Shin, completing ten years of his tenure at Harvard Medical School, especially as of late due to the COVID-19 pandemic. Congratulations and kudos for this amazing accomplishment!"
                }
                imageSrc={"https://lh3.google.com/u/0/d/1ibp5KOk462QHTbVdsm4U33UBdztlCmNk=w1920-h937-iv1"}
                date={"1/18/2021"}
                noSpacing
              />
            </>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
