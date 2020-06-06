import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Class from "@material-ui/icons/Class";
import Schedule from "@material-ui/icons/Schedule";

// core components
import Button from "components/CustomButtons/Button.js";
import CourseCourseRegisterModal from "components/Course/CourseRegisterModal.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function KidCourses() {
  const [modal, setModal] = useState(false);

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
            tabButton: "AM (Art & Math) Class",
            tabIcon: Class,
            tabContent: (
              <div>
                <p className={classes.description}>
                  A Montessori inspired class teaching children of ages 3-6 the principles of Art & Math with an emphasis on
                  hands-on learning activities. The use of utilizing sensory materials has been a tried and true approach for
                  teaching children of this age group fundamental skills to grow upon.
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;12-1 PM, Saturdays
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$20/hr + Material Fees (optional)
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Registration:</b>&nbsp;$20 (first time only)
                </p>
                <Button style={{ boxShadow: "none" }} color="info" round onClick={() => setModal(true)}>
                  Modal
                </Button>
              </div>
            )
          },
          {
            tabButton: "Schedule",
            tabIcon: Schedule,
            tabContent: (
              <span>
                <p className={classes.description}>
                  Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables
                  for real-time schemas.
                </p>
              </span>
            )
          }
        ]}
      />
      <CourseCourseRegisterModal
        modal={modal}
        setModal={setModal}
        courseName="Art Class II"
        courseTuition={15}
        courseRegistration={30}
      />
    </GridItem>
  );
}
