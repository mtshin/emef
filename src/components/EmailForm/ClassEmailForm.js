import React, { useState } from "react";
// @material-ui/core components
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

export default function ClassEmailForm() {
  // snackbar notification state
  const { enqueueSnackbar } = useSnackbar();

  //email message state
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [course, setCourse] = useState();
  const [startEndDates, setStartEndDates] = useState();
  const [hoursPerWeek, setHoursPerWeek] = useState();
  const [message, setMessage] = useState();
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [courseValid, setCourseValid] = useState(false);
  const [startEndDatesValid, setStartEndDatesValid] = useState(false);
  const [hoursPerWeekValid, setHoursPerWeekValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // saves the user's name entered to state
  function nameChange(event) {
    let nameValid = event.target.value ? true : false;
    let submitValid =
      nameValid &&
      emailValid &&
      courseValid &&
      startEndDatesValid &&
      hoursPerWeekValid &&
      messageValid;
    setName(event.target.value);
    setNameValid(nameValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's email entered to state
  function emailChange(event) {
    let emailValid = event.target.value ? true : false;
    let submitValid =
      emailValid &&
      nameValid &&
      courseValid &&
      startEndDatesValid &&
      hoursPerWeekValid &&
      messageValid;
    setEmail(event.target.value);
    setEmailValid(emailValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's course(s) entered to state
  function courseChange(event) {
    let courseValid = event.target.value ? true : false;
    let submitValid =
      courseValid &&
      emailValid &&
      nameValid &&
      startEndDatesValid &&
      hoursPerWeekValid &&
      messageValid;
    setCourse(event.target.value);
    setCourseValid(courseValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's start end dates entered to state
  function startEndDatesChange(event) {
    let startEndDatesValid = event.target.value ? true : false;
    let submitValid =
      startEndDatesValid &&
      courseValid &&
      emailValid &&
      nameValid &&
      hoursPerWeekValid &&
      messageValid;
    setStartEndDates(event.target.value);
    setStartEndDatesValid(startEndDatesValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's hours per week entered to state
  function hoursPerWeekChange(event) {
    let hoursPerWeekValid = event.target.value ? true : false;
    let submitValid =
      hoursPerWeekValid &&
      courseValid &&
      emailValid &&
      nameValid &&
      startEndDatesValid &&
      messageValid;
    setHoursPerWeek(event.target.value);
    setHoursPerWeekValid(hoursPerWeekValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's message entered to state
  function messageChange(event) {
    let messageValid = event.target.value ? true : false;
    let submitValid =
      messageValid &&
      emailValid &&
      nameValid &&
      courseValid &&
      startEndDatesValid &&
      hoursPerWeekValid;
    setMessage(event.target.value);
    setMessageValid(messageValid);
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
        course: course,
        startEndDates: startEndDates,
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
          autoHideDuration: 3000
        });
      })
      // Email Failed to send Error alert
      .catch(() => {
        enqueueSnackbar("Failed to send form!", {
          variant: "error",
          autoHideDuration: 3000
        });
      });
  };

  const classes = useStyles();
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Your Name"
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
            labelText="Your Email"
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
          <CustomInput
            labelText="Desired Course(s)"
            id="course"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: (event) => courseChange(event)
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Start & End Dates (e.g. 7/11/2020 - 9/5/2020)"
            id="startEndDates"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: (event) => startEndDatesChange(event)
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Hours per Week (e.g. 1-3 PM, Saturdays)"
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
          labelText="Additional Information (e.g. reason, other expectations/requests, etc.)"
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
            Send Message
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
}
