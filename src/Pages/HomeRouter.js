import React from "react";
import Header from "../Components/Header";
import { Switch, Route } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Notification from "../Components/Notification";
import plus from "../Images/plus.svg";

export default function HomeRouter() {
  return (
    <div className="sections">
      <div id="left-section">
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} exact />
          <Route path="/home/profile" component={ProfilePage} exact />
        </Switch>

        <div className="add-new-post">
          <img src={plus} alt="" />
        </div>
      </div>
      <Notification />
    </div>
  );
}
