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
import EASStudioGallery from "views/EASPage/Galleries/EASStudioGallery.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/components" component={Components} />
        <Route path="/eas/studioGallery" component={EASStudioGallery} />
        <Route path="/eas" component={EASPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </SnackbarProvider>,
  document.getElementById("root")
);
