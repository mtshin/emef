/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <b>&copy; {1900 + new Date().getYear()} Evergreen Mission and Education Foundation 2016 INC.</b>
        <br />
        379 Liberty St. STE 201A & 201C <br />
        Rockland, MA 02370
        <br />
        <a href="tel:617-454-4347">(617) 454-4347</a>
        <br />
        <a href="mailto:emef900@gmail.com">emef900@gmail.com</a>
        <b> | </b>
        <a href="mailto:emef900@teachers.org">emef900@teachers.org</a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
