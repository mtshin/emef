/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classNames from "classnames";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

// @material-ui/icons
import Check from "@material-ui/icons/Check";

// core components
import NumberFormat from "react-number-format";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";

const useStyles = makeStyles(styles);

function HoursFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      suffix=" hours"
      allowNegative={false}
    />
  );
}

function MoneyFormat(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
      allowNegative={false}
      decimalScale={2}
    />
  );
}

export default function CoursePurchaseSelectionsNoMaterials({
  checkedState,
  handleCheckedChange,
  hoursState,
  handleHoursChange,
  customPaymentState,
  handleCustomPaymentChange,
  setCheckedState
}) {
  const classes = useStyles();
  const wrapperDiv = classNames(classes.checkboxAndRadio, classes.checkboxAndRadioHorizontal);

  const [disableTuition, setDisableTuition] = useState(true);

  const toggleTuition = (event) => {
    if (event.target.value > 0) {
      setDisableTuition(false);
    } else {
      setDisableTuition(true);
      setCheckedState({ ...checkedState, Tuition: false });
    }
  };

  return (
    <div className={wrapperDiv}>
      <div>
        <TextField
          disabled={customPaymentState.custompaymentformat > 0}
          label="Total Course Time"
          value={hoursState.hoursformat}
          onChange={(event) => {
            toggleTuition(event);
            handleHoursChange(event);
          }}
          name="hoursformat"
          InputProps={{ inputComponent: HoursFormat }}
        />
      </div>
      <br />
      <div>
        <FormControlLabel
          control={
            <Checkbox
              disabled={customPaymentState.custompaymentformat > 0 || disableTuition}
              checked={checkedState.Tuition}
              onChange={(event) => {
                handleCheckedChange(event);
              }}
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
              disabled={customPaymentState.custompaymentformat > 0}
              checked={checkedState.Registration}
              onChange={handleCheckedChange}
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
      <br />
      <h5>Or</h5>
      <div>
        <TextField
          label="Custom Amount"
          value={customPaymentState.custompaymentformat}
          onChange={handleCustomPaymentChange}
          name="custompaymentformat"
          InputProps={{ inputComponent: MoneyFormat }}
        />
      </div>
    </div>
  );
}
