import React from "react";
import { Switch, Route } from "react-router-dom";

import CameraHandler from "../CameraHandler";

const Main = () => (
  <main className="main__wrapper">
    <Switch>
      <Route exact path="/" component={CameraHandler} />
    </Switch>
  </main>
);

export default Main;
