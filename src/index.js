import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// For notifications
import { SnackbarProvider } from "notistack";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import EASPage from "views/EASPage/EASPage.js";
import EAMCSPage from "views/EAMCSPage/EAMCSPage.js";
import EASStaffGallery from "views/EASPage/Galleries/EASStaffGallery.js";
import EASStudentGallery from "views/EASPage/Galleries/EASStudentGallery.js";
import Employment from "views/EmploymentPage/Employment.js";
import FinancialAid from "views/FinancialAidPage/FinancialAid.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <Router history={hist}>
      <Switch>
        <Route path="/staff" exact component={Employment} />
        <Route path="/forms" exact component={FinancialAid} />
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
    </Router>
  </SnackbarProvider>,
  document.getElementById("root")
);
