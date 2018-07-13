import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Unsecured/Landing";
import LoginSignup from "./components/Unsecured/Login/LoginSignup";
import requireAuth from "./Auth";
import Dashboard from "./components/Dashboard";

export const Main = (
  <Switch>
    <Route exact path="/" render={() => <Landing />} />
    <Route path="/login" render={() => <LoginSignup />} />
    <Route path="/dashboard" component={requireAuth(Dashboard)} />
  </Switch>
);
