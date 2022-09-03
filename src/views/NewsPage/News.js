import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NEWS_BG_LARGE from "assets/img/news_bg_large.jpg";
import NewsPost from "./Sections/NewsPost";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/galleryPage.js";

// nodejs library that concatenates classes

// @material-ui/core components

// core components

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
          color: "white",
        }}
        {...rest}
      />
      <Parallax extraSmall filter image={NEWS_BG_LARGE} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classNames(classes.section, classes.botMargin)}>
            <>
              <GridContainer
                justify="center"
                className={classNames(classes.botPadding, classes.botMargin)}
              >
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.title}>News</h2>
                  <h4 className={classes.description}>
                    The latest news and happenings in the EMEF organization.
                  </h4>
                </GridItem>
              </GridContainer>
              <NewsPost
                title={"Early Childhood Credential Certified"}
                description={
                  <h4 className={classes.description}>
                    A crowning achievement by our talented Jungrim
                    &apos;Victoria&apos; Yea for earning the{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://amshq.org/"
                    >
                      American Montessori Society&apos;s
                    </a>{" "}
                    Early Childhood Credential certification! This is a
                    testament to her passion and inspirational work ethic. We
                    are so proud and blessed to have a true educator who seeks
                    to expand her skillset, thereby maximizing impact to more
                    students!
                  </h4>
                }
                imageSrc={
                  "https://lh3.google.com/u/0/d/1f-wExwfdnzZ9VEa0viZcwcs2CaFTfqxD=w2160-h3625-iv1"
                }
                date={"9/2/2022"}
              />
              <NewsPost
                title={"Community Champions"}
                description={
                  <h4 className={classes.description}>
                    Special thanks to{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.constellation.com/community/community-champions.html"
                    >
                      Constellation&apos;s Community Champions program
                    </a>{" "}
                    recognizing EMEF&apos;s impact to our local communities. We
                    strive to provide education for all and instill a mindset to
                    pass the genorisity along to reach as many in need as
                    possible.
                  </h4>
                }
                imageSrc={
                  "https://lh3.google.com/u/0/d/1WlQv8jEb3Kby2cpMnvrRPqFn_IXXPTL-=w1408-h3516-iv1"
                }
                date={"6/11/2021"}
              />
              <NewsPost
                title={"Ten Years"}
                description={
                  <h4 className={classes.description}>
                    We celebrate EMEF CEO & President, Jeho &apos;Daniel&apos;
                    Shin, completing ten years of his tenure at Harvard Medical
                    School, especially as of late due to the COVID-19 pandemic.
                    Congratulations and kudos for this amazing accomplishment!
                  </h4>
                }
                imageSrc={
                  "https://lh3.google.com/u/0/d/1ibp5KOk462QHTbVdsm4U33UBdztlCmNk=w1920-h937-iv1"
                }
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
