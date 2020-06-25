import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ArtTrack from "@material-ui/icons/ArtTrack";
import Palette from "@material-ui/icons/Palette";

// core components
import Button from "components/CustomButtons/Button.js";
import CourseRegisterModal from "components/Course/CourseRegisterModal.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function KidCourses() {
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
        color="warning"
        horizontal={{
          tabsGrid: { xs: 12, sm: 4, md: 4 },
          contentGrid: { xs: 12, sm: 8, md: 8 }
        }}
        tabs={[
          {
            tabButton: "AM (Art & Math)",
            tabIcon: ArtTrack,
            tabContent: (
              <div>
                <p className={classes.description}>
                  A Montessori inspired class teaching children the principles of Art & Math with an emphasis on hands-on
                  learning activities. The use of utilizing sensory materials has been a tried and true approach for teaching
                  children of this age group fundamental skills to grow upon.
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;12-1 PM, Saturdays
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;3-6
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$20/hr + Material Fees ($6/hr, optional)
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Registration:</b>&nbsp;$20 (first time only)
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Instructor:</b>&nbsp;Jungrim &quot;Victoria&quot; Yea
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "AM (Art & Math)",
                      courseTuition: 20,
                      courseRegistration: 20,
                      courseMaterial: 6
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
            tabButton: "Drawing & Painting (Kids)",
            tabIcon: Palette,
            tabContent: (
              <div>
                <p className={classes.description}>
                  Explore the line, shape, color, texture, form, and space of art from historical works, contemporary pieces,
                  nature, and real objects to learn how to see and what to see. Create your own masterpieces in subjects
                  (still life, animal, portrait, landscape, etc.) and materials (pencil, poil pastel, oil paint, watercolor,
                  acrylic, etc.) of your choice!
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;1-4 PM, Saturdays
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;Pre-K to High School
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$15/hr + Material Fees ($6/hr, optional)
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Registration:</b>&nbsp;$20 (first time only)
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Instructor:</b>&nbsp;Jungrim &quot;Victoria&quot; Yea
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Drawing & Painting (Kids)",
                      courseTuition: 15,
                      courseRegistration: 20,
                      courseMaterial: 6
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
      <CourseRegisterModal
        modal={modal}
        setModal={setModal}
        courseName={courseInfo.courseName}
        courseTuition={courseInfo.courseTuition}
        courseRegistration={courseInfo.courseRegistration}
        courseMaterial={courseInfo.courseMaterial}
        easLegacyPurchaseOverride={true}
      />
    </GridItem>
  );
}
