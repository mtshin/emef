import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Brush from "@material-ui/icons/Brush";
import Portrait from "@material-ui/icons/Portrait";

// core components
import Button from "components/CustomButtons/Button.js";
import CourseRegisterModal from "components/Course/CourseRegisterModal.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function AdultCourses() {
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
            tabButton: "Painting (Adult)",
            tabIcon: Brush,
            tabContent: (
              <div>
                <p className={classes.description}>
                  A oil, acrylic, and water color painting class tailored to students of any level. You will learn to paint
                  portraits, landscapes, still lifes, and abstractions using well-known historical artwork and other
                  instructor-curated subject matter.
                  <br />
                  Beginners will learn the fundamentals of color mixing, composition, and paint application by working from
                  still-life arrangements. Students will also learn how to create the illusion of light and depth as well as
                  texture while developing their own personal styles.
                  <br />
                  Those with more experience are welcome to concentrate on advanced techniques and work at their own levels.
                  Assistance is available for individual projects.
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;1-4 PM, Saturdays
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;18+
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$20/hr + Material Fees ($6/hr, optional)
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
                      courseName: "Painting (Adult)",
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
            tabButton: "Art Portfolio Preparation",
            tabIcon: Portrait,
            tabContent: (
              <div>
                <p className={classes.description}>
                  Make your art portfolio stand out and truly highlight your talents with the guidance of a professional!
                  This is a very interactive class in which our instructor will work one on one with you throughout the
                  entire process from curating existing projects, creating new works to express a wide skill set, etc.
                  <br />
                  By the last class your final portfolio will worthy of representing you!
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;1-4 PM, Saturdays
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;High School
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$30/hr + Material Fees ($6/hr, optional)
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
                      courseName: "Art Portfolio Preparation",
                      courseTuition: 30,
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
