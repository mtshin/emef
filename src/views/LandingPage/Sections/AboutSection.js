import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import Favorite from "@material-ui/icons/Favorite";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import DonationContent from "components/Donation/Donation.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Who We Are</h2>
          <h4 className={classes.description}>
            Evergreen Mission and Education Foundation 2016 INC. (EMEF) was
            founded on June 2016 based on Christian faith by Jeho
            &apos;Daniel&apos; Shin. Business divisions such as EAS (Evergreen
            Art Studio) and EAMCS (Evergreen Academy of Math and Computer
            Science) were also established in order to provide affordable
            education crafted to fit students&apos; needs. This foundation was
            established on a dream to support the education of students
            financially and it alongside its business divisions hold neither
            religious or ethnic discrimination for all beneficiaries.
          </h4>
        </GridItem>
      </GridContainer>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <CustomTabs
              headerColor="success"
              tabs={[
                {
                  tabName: "Mission Statement",
                  tabIcon: Chat,
                  tabContent: (
                    <Quote
                      className={classes.textCenter}
                      text="A small bud fallen from a plant must be kept in the water for roots to sprout. Only after the root becomes strong enough to support the bud will it be able to thrive in the soil. In a similar sense, we have to wait until the time God set for us before we move onto the next step in life. This is the way of our life in Jesus. Evergreen Mission and Education Foundation 2016 INC. supports students and churches in need. No students should be left behind due to financial situation. We care for students in hope with the love of Jesus. Waiting is hope and hope is waiting."
                      author="Jeho
            'Daniel' Shin"
                    />
                  )
                },
                {
                  tabName: "Donation",
                  tabIcon: Favorite,
                  tabContent: (
                    <div>
                      <DonationContent />
                    </div>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
