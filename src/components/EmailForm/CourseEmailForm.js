import React, { useState } from "react";
// react component plugin for creating datetime dropdown picker
import Datetime from "react-datetime";

// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

// Snackbar notifications on submit
import { useSnackbar } from "notistack";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";
import emailjs from "emailjs-com";

const useStyles = makeStyles(styles);

// eslint-disable-next-line react/prop-types
export default function CourseEmailForm({ courseName }) {
  // snackbar notification state
  const { enqueueSnackbar } = useSnackbar();

  //email message state
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [hoursPerWeek, setHoursPerWeek] = useState();
  const [message, setMessage] = useState();
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [startDateValid, setStartDateValid] = useState(false);
  const [endDateValid, setEndDateValid] = useState(false);
  const [hoursPerWeekValid, setHoursPerWeekValid] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // saves the user's name entered to state
  function nameChange(event) {
    let nameValid = event.target.value ? true : false;
    let submitValid = nameValid && emailValid && startDateValid && endDateValid && hoursPerWeekValid;
    setName(event.target.value);
    setNameValid(nameValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's email entered to state
  function emailChange(event) {
    let emailValid = event.target.value ? true : false;
    let submitValid = emailValid && nameValid && startDateValid && endDateValid && hoursPerWeekValid;
    setEmail(event.target.value);
    setEmailValid(emailValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's start date selected to state
  function startDateChange(event) {
    let startDateValid = event.format("LL") ? true : false;
    let submitValid = startDateValid && emailValid && nameValid && endDateValid && hoursPerWeekValid;
    setStartDate(event.format("LL"));
    setStartDateValid(startDateValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's end date selected to state
  function endDateChange(event) {
    let endDateValid = event.format("LL") ? true : false;
    let submitValid = endDateValid && emailValid && nameValid && startDateValid && hoursPerWeekValid;
    setEndDate(event.format("LL"));
    setEndDateValid(endDateValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's hours per week entered to state
  function hoursPerWeekChange(event) {
    let hoursPerWeekValid = event.target.value ? true : false;
    let submitValid = hoursPerWeekValid && emailValid && nameValid && startDateValid && endDateValid;
    setHoursPerWeek(event.target.value);
    setHoursPerWeekValid(hoursPerWeekValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's message entered to state
  function messageChange(event) {
    let submitValid = emailValid && nameValid && startDateValid && endDateValid && hoursPerWeekValid;
    setMessage(event.target.value);
    setSubmitDisabled(!submitValid);
  }

  //onSubmit of email form
  function handleSubmit(event) {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const serviceId = "gmail";
    const templateId = "class_template";
    const userId = "user_Lj8b6KG37nt5rEVTL7Cy1";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    sendMessage(
      serviceId,
      templateId,
      {
        name: name,
        email: email,
        course: courseName,
        startDate: startDate,
        endDate: endDate,
        hoursPerWeek: hoursPerWeek,
        message: message
      },
      userId
    );
  }

  //Custom EmailJS method
  const sendMessage = (serviceId, templateId, variables, userId) => {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then(() => {
        // Email successfully sent alert
        enqueueSnackbar("Form successfully sent!", {
          variant: "success",
          autoHideDuration: 5000
        });
      })
      // Email Failed to send Error alert
      .catch((error) => {
        enqueueSnackbar(`Failed to send form! ${error}`, {
          variant: "error",
          autoHideDuration: 5000
        });
      });
  };

  const classes = useStyles();

  // Define valid start/end date by forcing earliest as today for Datetime component
  const yesterday = Datetime.moment().subtract(1, "day");
  const valid = (current) => {
    return current.isAfter(yesterday);
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Your Name *"
            id="name"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: (event) => nameChange(event)
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Your Email *"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: (event) => emailChange(event)
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <FormControl fullWidth>
            <InputLabel shrink>Start Date *</InputLabel>
            <br />
            <Datetime
              inputProps={{ placeholder: "Choose a start date", readOnly: true }}
              onChange={(event) => startDateChange(event)}
              isValidDate={valid}
              timeFormat={false}
            />
            <br />
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <FormControl fullWidth>
            <InputLabel shrink>End Date *</InputLabel>
            <br />
            <Datetime
              inputProps={{ placeholder: "Choose an end date", readOnly: true }}
              onChange={(event) => endDateChange(event)}
              isValidDate={valid}
              timeFormat={false}
            />
          </FormControl>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Hours/Week (e.g. 1-3 PM, Saturdays) *"
            id="hoursPerWeek"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: (event) => hoursPerWeekChange(event)
            }}
          />
        </GridItem>
        <CustomInput
          labelText="Other (e.g. additional contact information, motivation for course, special requests)"
          id="message"
          formControlProps={{
            fullWidth: true,
            className: classes.textArea
          }}
          inputProps={{
            multiline: true,
            rows: 5,
            onChange: (event) => messageChange(event)
          }}
        />
        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="primary" disabled={submitDisabled}>
            Submit
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
}
