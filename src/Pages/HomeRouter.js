import React from "react";
import Header from "../Components/Header";
import { Switch, Route, Link } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Notification from "../Components/Notification";
import plus from "../Images/plus.svg";
import PostDetailsPage from "./PostDetailsPage";
import NewPostPage from "./NewPostPage";

export default function HomeRouter() {
  return (
    <div className="sections">
      <div id="left-section">
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage} exact />
          <Route path="/home/profile" component={ProfilePage} exact />
          <Route path="/home/postdetails" component={PostDetailsPage} exact />
          <Route path="/home/new" component={NewPostPage} exact />
        </Switch>

        <Link to="/home/new">
          <div className="add-new-post">
            <img src={plus} alt="" />
          </div>
        </Link>
      </div>
      <Notification />
    </div>
  );
}
