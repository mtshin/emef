/* eslint-disable react/prop-types */
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.js";
import CourseEmailForm from "components/EmailForm/CourseEmailForm.js";
import CoursePurchaseButton from "components/Course/CoursePurchaseButton.js";
import CoursePurchaseSelections from "components/Course/CoursePurchaseSelections.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles = makeStyles(styles);

export default function CourseRegisterModal({
  modal,
  setModal,
  courseName,
  courseTuition,
  courseRegistration,
  courseMaterial,
  easLegacyPurchaseOverride,
  eamcsLegacyPurchaseOverride
}) {
  const classes = useStyles();
  const [checkedState, setCheckedState] = useState({
    Tuition: false,
    Registration: false,
    Material: false
  });

  const [hoursState, setHoursState] = useState({ hoursformat: "" });

  const [customPaymentState, setCustomPaymentState] = useState({ custompaymentformat: "" });

  const handleCheckedChange = (event) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  const handleHoursChange = (event) => {
    setHoursState({
      ...hoursState,
      [event.target.name]: event.target.value
    });
  };

  const handleCustomPaymentChange = (event) => {
    setCustomPaymentState({
      ...customPaymentState,
      [event.target.name]: event.target.value
    });
  };

  const calculateTotalAmount = () => {
    let amount = 0;

    if (customPaymentState.custompaymentformat <= 0) {
      if (checkedState.Tuition && hoursState.hoursformat > 0 && checkedState.Registration) {
        if (checkedState.Material) {
          amount = (courseTuition + courseMaterial) * hoursState.hoursformat + courseRegistration;
        } else {
          amount = courseTuition * hoursState.hoursformat + courseRegistration;
        }
      } else if (checkedState.Registration && !checkedState.Tuition) {
        amount = courseRegistration;
      } else if (checkedState.Tuition && hoursState.hoursformat > 0 && !checkedState.Registration) {
        if (checkedState.Material) {
          amount = (courseTuition + courseMaterial) * hoursState.hoursformat;
        } else {
          amount = courseTuition * hoursState.hoursformat;
        }
      }
    } else {
      amount = customPaymentState.custompaymentformat;
    }

    return Math.round(amount * 100) / 100;
  };

  const resetPaymentStates = () => {
    setCheckedState({
      Tuition: false,
      Registration: false,
      Material: false
    });
    setHoursState({ hoursformat: "" });
    setCustomPaymentState({ custompaymentformat: "" });
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={modal}
      TransitionComponent={Transition}
      onClose={() => {
        setModal(false);
      }}
      aria-labelledby="classic-modal-slide-title"
      aria-describedby="classic-modal-slide-description"
      disableBackdropClick={true}
    >
      <DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => {
            resetPaymentStates();
            setModal(false);
          }}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h4 className={classes.modalTitle}>
          <b>{courseName}</b>
        </h4>
      </DialogTitle>
      <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
        <h5 className={classes.modalTitle}>
          <b>Pre-Registration</b>
        </h5>
        <p>
          Submit the form below to begin the registration process (fields marked with an * are required). We will get back to
          you as soon as possible for next steps and to get to know each other better in order for us to best meet your
          needs! <br />
        </p>
        <CourseEmailForm courseName={courseName} />
        <h5 className={classes.modalTitle}>
          <b>Registration & Payment</b>
        </h5>

        <p>
          The first time registration fee and registration form found in the main Classes section must be submitted on or
          before the first day of the class. Tuition can be paid on or before the first class of each session. You may also
          choose to pay a custom amount.
        </p>

        <p>
          We accept other payment methods as well for your convenience (e.g. cash, personal check, etc.). Please contact us
          directly to set up an alternative payment plan!
        </p>

        <p>
          <b>Please enter desired class hours for tuition/material fees and select payment(s):</b>
        </p>
        <CoursePurchaseSelections
          checkedState={checkedState}
          handleCheckedChange={handleCheckedChange}
          hoursState={hoursState}
          handleHoursChange={handleHoursChange}
          customPaymentState={customPaymentState}
          handleCustomPaymentChange={handleCustomPaymentChange}
          setCheckedState={setCheckedState}
        />
        <br />
        <h5 className={classes.modalTitle} id="totalPrice">
          <b>Total: ${calculateTotalAmount()}</b>
        </h5>
        <br />
        <p>
          To purchase with Venmo, please ensure the app is configured properly by allowing{" "}
          <a href="https://help.venmo.com/hc/en-us/articles/115010455987-Getting-Started-Purchasing-with-Venmo">
            Enable Mobile Web Purchase or Connect Browsers
          </a>
          .
        </p>
        <CoursePurchaseButton
          amount={calculateTotalAmount()}
          easLegacyPurchaseOverride={easLegacyPurchaseOverride}
          eamcsLegacyPurchaseOverride={eamcsLegacyPurchaseOverride}
        />
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Button
          onClick={() => {
            resetPaymentStates();
            setModal(false);
          }}
          color="primary"
          simple
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
