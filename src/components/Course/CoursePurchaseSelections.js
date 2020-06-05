/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const useStyles = makeStyles(styles);

export default function CoursePaymentSelections({ checkedState, handleChange }) {
  const classes = useStyles();
  const wrapperDiv = classNames(classes.checkboxAndRadio, classes.checkboxAndRadioHorizontal);

  return (
    <div className={wrapperDiv}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedState.checkedTuition}
            onChange={handleChange}
            name="Tuition"
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{ checked: classes.checked }}
          />
        }
        label="Tuition"
        classes={{ label: classes.label }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={checkedState.checkedRegistration}
            onChange={handleChange}
            name="Registration"
            checkedIcon={<Check className={classes.checkedIcon} />}
            icon={<Check className={classes.uncheckedIcon} />}
            classes={{ checked: classes.checked }}
          />
        }
        label="Registration"
        classes={{ label: classes.label }}
      />
    </div>
  );
}
