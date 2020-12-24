import React, { useState } from "react";

import Button from "components/CustomButtons/Button.js";
import CourseRegisterModalNoMaterials from "components/Course/CourseRegisterModalNoMaterials.js";
import GridItem from "components/Grid/GridItem.js";
import Keyboard from "@material-ui/icons/Keyboard";
import NavPills from "components/NavPills/NavPills.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

// @material-ui/core components

// @material-ui/icons

// core components

const useStyles = makeStyles(styles);

export default function CSCoursesBasic() {
  const [modal, setModal] = useState(false);
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    courseTuition: "",
    courseRegistration: ""
  });

  const classes = useStyles();
  return (
    <GridItem xs={12} sm={12} md={12} lg={6}>
      <NavPills
        color="warning"
        horizontal={{
          tabsGrid: { xs: 12, sm: 4, md: 4 },
          contentGrid: { xs: 12, sm: 8, md: 8 }
        }}
        tabs={[
          {
            tabButton: "Coms 0 (Beginner)",
            tabIcon: Keyboard,
            tabContent: (
              <div>
                <p className={classes.description}>
                  It&apos;s never too late to learn! This class is tailored towards students who are looking to immerse
                  themselves in computer skills that have now become a near necessity in our daily lives!
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online or in class
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Textbook:</b>&nbsp;Computers for Seniors - ISBN 9781119049548
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;Seniors
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$25/hr
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Registration:</b>&nbsp;$20 (first time only)
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Coms 0 (Beginner)",
                      courseTuition: 25,
                      courseRegistration: 20
                    });
                    setModal(true);
                  }}
                >
                  Register
                </Button>
              </div>
            )
          },
          {
            tabButton: "Coms I (Microsoft Office I)",
            tabIcon: Keyboard,
            tabContent: (
              <div>
                <p className={classes.description}>
                  Our introductory course to Microsoft Office. We will cover the essential tools and shortcuts throughout the
                  MS Office suite in order to maximize your productivity!
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online or in class
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Textbook:</b>&nbsp;Introductory (Shelly Cashman) 1st Edition, ISBN-10 - 1285166027
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;Any
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$25/hr
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Registration:</b>&nbsp;$20 (first time only)
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Coms I (Microsoft Office I)",
                      courseTuition: 25,
                      courseRegistration: 20
                    });
                    setModal(true);
                  }}
                >
                  Register
                </Button>
              </div>
            )
          },
          {
            tabButton: "Coms II (Microsoft Office II)",
            tabIcon: Keyboard,
            tabContent: (
              <div>
                <p className={classes.description}>
                  An advanced version of our Coms I (Microsoft Office I) focusing on more niche techniques, shortcuts, and
                  workflows to help you tackle any MS Office task.
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online or in class
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Textbook:</b>&nbsp;Introductory (Shelly Cashman) 1st Edition, ISBN-10 - 1285166027
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;Any
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$25/hr
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Registration:</b>&nbsp;$20 (first time only)
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Coms II (Microsoft Office II)",
                      courseTuition: 25,
                      courseRegistration: 20
                    });
                    setModal(true);
                  }}
                >
                  Register
                </Button>
              </div>
            )
          }
        ]}
      />
      <CourseRegisterModalNoMaterials
        modal={modal}
        setModal={setModal}
        courseName={courseInfo.courseName}
        courseTuition={courseInfo.courseTuition}
        courseRegistration={courseInfo.courseRegistration}
        eamcsLegacyPurchaseOverride={true}
      />
    </GridItem>
  );
}
