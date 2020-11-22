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

export default function MathCoursesBasic() {
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
            tabButton: "Basic Math",
            tabIcon: Class,
            tabContent: (
              <div>
                <p className={classes.description}>
                  From homework, tests, problem solving speed, and everything in between we are here to help! This class is
                  tailored to fill gaps in math subjects at various levels and help increase your effeciency in overall
                  problem solving as well.
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Schedule:</b>&nbsp;Mon-Sat (8-10 PM)
                  <br />
                  Sat: (9 AM-4 PM)
                  <br />* Online or in class
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Age:</b>&nbsp;1st Grade - 8th Grade
                </p>
                <p className={(classes.description, classes.courseDetails)}>
                  <b>Tuition:</b>&nbsp;$20/hr
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
                      courseName: "Basic Math",
                      courseTuition: 20,
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
