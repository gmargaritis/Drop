import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Quiz from './Components/Quiz';

const Routes = () => {
  return (
    // Create paths and render the right components
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/quiz" component={Quiz} />
    </Switch>
  );
};

export default Routes;
