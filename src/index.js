import "assets/scss/material-kit-react.scss?v=1.9.0";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages for this product
import Components from "views/Components/Components.js";
import EAMCSPage from "views/EAMCSPage/EAMCSPage.js";
import EASPage from "views/EASPage/EASPage.js";
import EASStaffGallery from "views/EASPage/Galleries/EASStaffGallery.js";
import EASStudentGallery from "views/EASPage/Galleries/EASStudentGallery.js";
import Employment from "views/EmploymentPage/Employment.js";
import FinancialAid from "views/FinancialAidPage/FinancialAid.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import News from "views/NewsPage/News.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ScrollToTop from "components/Navigation/ScrollToTop.js";
import React from "react";
import ReactDOM from "react-dom";
// For notifications
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/staff" exact component={Employment} />
        <Route path="/forms" exact component={FinancialAid} />
        <Route path="/news" exact component={News} />
        <Route path="/landing-page" exact component={LandingPage} />
        <Route path="/profile-page" exact component={ProfilePage} />
        <Route path="/login-page" exact component={LoginPage} />
        <Route path="/components" exact component={Components} />
        <Route path="/eas/staffGallery" exact component={EASStaffGallery} />
        <Route path="/eas/studentGallery" exact component={EASStudentGallery} />
        <Route path="/eas" exact component={EASPage} />
        <Route path="/eamcs" exact component={EAMCSPage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </SnackbarProvider>,
  document.getElementById("root")
);
