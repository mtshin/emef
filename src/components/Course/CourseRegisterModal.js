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
import CoursePurchaseSelection from "components/Course/CoursePurchaseSelections.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles = makeStyles(styles);

export default function CourseRegisterModal({ modal, setModal, courseName, courseTuition, courseRegistration }) {
  const classes = useStyles();
  const [checkedState, setCheckedState] = useState({
    Tuition: false,
    Registration: false
  });

  const handleCheckedChange = (event) => {
    console.log(event.target);
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  const calculateTotalAmount = () => {
    let amount = 0;
    if (checkedState.Tuition && checkedState.Registration) {
      amount = courseTuition + courseRegistration;
    } else if (checkedState.Registration && !checkedState.Tuition) {
      amount = courseRegistration;
    } else if (checkedState.Tuition && !checkedState.Registration) {
      amount = courseTuition;
    }
    console.log(amount);
    return amount;
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={modal}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setModal(false)}
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
          onClick={() => setModal(false)}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <h4 className={classes.modalTitle}>
          <b>{courseName}</b>
        </h4>
      </DialogTitle>
      <DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
        <h5 className={classes.modalTitle}>
          <b>Registration Process</b>
        </h5>
        <p>
          Please submit the form below to begin the registration process (fields marked with an * are required). We will get
          back to you as soon as possible for next steps and to get to know each other better in order for us to best meet
          your needs! <br />
        </p>
        <CourseEmailForm courseName={courseName} />
        <h5 className={classes.modalTitle}>
          <b>Payment Process</b>
        </h5>

        <p>
          The first time registration fee and registration form must be submitted on or before the first day of the course.
          Tuition can be paid on or before the first course of each session.
        </p>
        <p>
          <b>Please select desired payment(s):</b>
        </p>
        <CoursePurchaseSelection checkedState={checkedState} handleChange={handleCheckedChange} />
        <br />
        <CoursePurchaseButton amount={calculateTotalAmount()} />
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <Button onClick={() => setModal(false)} color="primary" simple>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
