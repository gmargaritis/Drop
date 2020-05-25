import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Quiz from "./quiz";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/quiz" component={Quiz} />
    </Switch>
  );
};

export default Routes;
