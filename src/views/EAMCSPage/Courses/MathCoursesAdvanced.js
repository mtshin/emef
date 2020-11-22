import React, { useState } from "react";

import Button from "components/CustomButtons/Button.js";
import Class from "@material-ui/icons/Class";
import CourseRegisterModalNoMaterials from "components/Course/CourseRegisterModalNoMaterials.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

// @material-ui/core components


// @material-ui/icons


// core components







const useStyles = makeStyles(styles);

export default function MathCoursesAdvanced() {
  const [modal, setModal] = useState(false);
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    courseTuition: "",
    courseRegistration: "",
    courseMaterial: ""
  });

  const classes = useStyles();
  return (
    <GridItem xs={12} sm={12} md={12} lg={6}>
      <NavPills
        color="rose"
        horizontal={{
          tabsGrid: { xs: 12, sm: 4, md: 4 },
          contentGrid: { xs: 12, sm: 8, md: 8 }
        }}
        tabs={[
          {
            tabButton: "Advanced Math",
            tabIcon: Class,
            tabContent: (
              <div>
                <p className={classes.description}>
                  An advanced version of our Basic Math class targeted for older students and more advanced concepts.
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online or in class
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;High School
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$30/hr
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Registration:</b>&nbsp;$20 (first time only)
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Instructor:</b>&nbsp;Jeho &quot;Daniel&quot; Shin
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Advanced Math",
                      courseTuition: 30,
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
