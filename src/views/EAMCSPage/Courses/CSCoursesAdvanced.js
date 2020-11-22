import React, { useState } from "react";

import Button from "components/CustomButtons/Button.js";
import Code from "@material-ui/icons/Code";
import CourseRegisterModalNoMaterials from "components/Course/CourseRegisterModalNoMaterials.js";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

// @material-ui/core components


// @material-ui/icons



// core components







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
                      courseName: "Coms III (Website construction I)",
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
                      courseName: "Coms IV (Website construction II)",
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
                      courseName: "Coms V (Basic Programming)",
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
