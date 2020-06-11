/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Code, Eco, Palette } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="EMEF"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Eco}
          dropdownList={[
            <Tooltip
              id="instagram-facebook"
              title="EMEF Home"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" component={Link} to="/" className={classes.navLink} fullWidth>
                <i className={classes.socialIcons + " fa fa-tree"} />
                &nbsp;EMEF Home
              </Button>
            </Tooltip>,
            <Tooltip
              id="instagram-facebook"
              title="Follow EMEF on Facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/EvergreenEducationFoundation"
                target="_blank"
                className={classes.navLink}
                fullWidth
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
                &nbsp; Follow EMEF
              </Button>
            </Tooltip>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="EAS"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Palette}
          dropdownList={[
            <Tooltip
              id="instagram-facebook"
              title="EAS Home"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" component={Link} to="/eas" className={classes.navLink} fullWidth>
                <i className={classes.socialIcons + " fa fa-paint-brush"} />
                &nbsp;EAS Home
              </Button>
            </Tooltip>,
            <Tooltip
              id="instagram-facebook"
              title="Follow EAS on Facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/easemef/"
                target="_blank"
                className={classes.navLink}
                fullWidth
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
                &nbsp;Follow EAS
              </Button>
            </Tooltip>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="EAMCS"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Code}
          dropdownList={[
            <Tooltip
              id="instagram-facebook"
              title="EAMCS Home"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" component={Link} to="/eamcs" className={classes.navLink} fullWidth>
                <i className={classes.socialIcons + " fa fa-calculator"} />
                &nbsp;EAMCS Home
              </Button>
            </Tooltip>,
            <Tooltip
              id="instagram-facebook"
              title="Follow EAMCS on Facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/EvergreenMath"
                target="_blank"
                className={classes.navLink}
                fullWidth
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
                &nbsp;Follow EAMCS
              </Button>
            </Tooltip>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Work with us"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="transparent" component={Link} to="/employment" className={classes.navLink} fullWidth>
            <i className={classes.socialIcons + " fa fa-handshake"} />
            &nbsp;Employment
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
