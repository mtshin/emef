import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";

// core components
import Button from "components/CustomButtons/Button.js";
import CourseRegisterModalNoMaterials from "components/Course/CourseRegisterModalNoMaterials.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function CSCoursesAdvanced() {
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
        color="rose"
        horizontal={{
          tabsGrid: { xs: 12, sm: 4, md: 4 },
          contentGrid: { xs: 12, sm: 8, md: 8 }
        }}
        tabs={[
          {
            tabButton: "Coms III (Website construction I)",
            tabIcon: Code,
            tabContent: (
              <div>
                <p className={classes.description}>
                  Learn the language that all websites are built from at the core. You will learn the fundamentals and best
                  practices of website design to build a solid foundation for web development!
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online only
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Textbook:</b>&nbsp;HTML and CSS: Design and Build Websites 1st Edition, ISBN-10 - 1118008189
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
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Instructor:</b>&nbsp;Jeho &quot;Daniel&quot; Shin
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Coms III (Website construction I)",
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
            tabButton: "Coms IV (Website construction II)",
            tabIcon: Code,
            tabContent: (
              <div>
                <p className={classes.description}>
                  Take your design skills to the next level with our advanced HTML & CSS class. Learn how to turn static
                  designs into responsive, scalable, and beautiful templates.
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online only
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Textbook:</b>&nbsp;Design and Build Websites 1st Edition, ISBN-10 - 1118008189
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
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Instructor:</b>&nbsp;Jeho &quot;Daniel&quot; Shin
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Coms IV (Website construction II)",
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
            tabButton: "Coms V (Basic Programming)",
            tabIcon: DeveloperBoard,
            tabContent: (
              <div>
                <p className={classes.description}>
                  The backend may not be visible but it is just as essential if not more in some cases than the frontend!
                  This class will take you through the basics of sthe most popular backend languages (Java, Javascript,
                  Python to name a few) so that you can tackle any problem or feature an app needs!
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online only
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Textbook:</b>&nbsp; Programming: Computer Programming for Beginners: Learn the Basics of Java, SQL & C++
                  - 2. Edition (Coding, C Programming, Java Programming, SQL Programming, JavaScript, Python, PHP) ISBN-10 -
                  1518662587
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
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Instructor:</b>&nbsp;Jeho &quot;Daniel&quot; Shin
                </p>
                <Button
                  style={{ boxShadow: "none" }}
                  color="info"
                  round
                  onClick={() => {
                    setCourseInfo({
                      courseName: "Coms V (Basic Programming)",
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
