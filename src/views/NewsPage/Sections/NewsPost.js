import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/newsPost.js";
import GridContainer from "components/Grid/GridContainer";

const useStyles = makeStyles(styles);

export default function NewsPost(props) {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRounded, classes.imgFluid, classes.newsPostImage);
  const { ...rest } = props;
  return (
    <GridContainer justify="center" className={rest.noSpacing ? "" : classes.newsPostBottomSpacing}>
      <GridItem xs={12} sm={12} md={6}>
        <img src={rest.imageSrc} alt={`${rest.title}Photo`} className={imageClasses} />
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <h2 className={classes.title}>{rest.title}</h2>
        <h4 className={classes.description}>{rest.description}</h4>
        <p className={classes.newsPostDate}>{rest.date}</p>
      </GridItem>
    </GridContainer>
  );
}
