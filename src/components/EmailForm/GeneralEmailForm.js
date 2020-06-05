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

export default function GeneralEmailForm() {
  // snackbar notification state
  const { enqueueSnackbar } = useSnackbar();

  //email message state
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // saves the user's name entered to state
  function nameChange(event) {
    let nameValid = event.target.value ? true : false;
    let submitValid = nameValid && emailValid && messageValid;
    setName(event.target.value);
    setNameValid(nameValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's email entered to state
  function emailChange(event) {
    let emailValid = event.target.value ? true : false;
    let submitValid = emailValid && nameValid && messageValid;
    setEmail(event.target.value);
    setEmailValid(emailValid);
    setSubmitDisabled(!submitValid);
  }

  // saves the user's message entered to state
  function messageChange(event) {
    let messageValid = event.target.value ? true : false;
    let submitValid = messageValid && emailValid && nameValid;
    setMessage(event.target.value);
    setMessageValid(messageValid);
    setSubmitDisabled(!submitValid);
  }

  //onSubmit of email form
  function handleSubmit(event) {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const serviceId = "gmail";
    const templateId = "template_bj5jj4C5";
    const userId = "user_Lj8b6KG37nt5rEVTL7Cy1";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    sendMessage(
      serviceId,
      templateId,
      {
        email: email,
        name: name,
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
        <CustomInput
          labelText="Your Message"
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
