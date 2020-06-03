import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core imports
import DonationChart from "components/Donation/DonationChart";
import DonationButton from "components/Donation/DonationButton";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function DonationContent() {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.textCenter}>
        Your generosity will make a difference in the lives of students and to
        that of the local community. Donations are split to support schools
        (including after school programs), students, local churches, EMEF, and
        local food pantries. The breakdown are as follows:
        <br />
      </p>
      <DonationChart />
      <DonationButton />
    </div>
  );
}
