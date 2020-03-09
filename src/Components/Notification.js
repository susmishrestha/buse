import React from "react";
import profilePic from "../Images/pp.jpg";
import dropdown from "../Images/down-arrow.svg";
import NotificationItem from "./NotificationItem";
import pp1 from "../Images/pp1.jpg";
import bed from "../Images/bed.svg";
import pp2 from "../Images/pp2.jpg";
import { Link, withRouter } from "react-router-dom";

function Notification({ history }) {
  const [showLogout, setShowLogout] = React.useState(false);
  return (
    <div className="notifications">
      <div className="notification-header">
        <span>
          <strong>Notifications</strong>
        </span>
        <Link to="/home/profile">
          <img id="pp" src={profilePic} alt="" />
        </Link>
        <img
          id="drop-down"
          src={dropdown}
          onClick={() => {
            setShowLogout(!showLogout);
          }}
          alt=""
        />
      </div>
      {showLogout && (
        <div
          style={{
            position: "fixed",
            background: "white",
            right: "2.4rem",
            top: "6.5rem",
            border: "1px solid #CCC",
            padding: "0.5rem 1rem"
          }}
        >
          <div
            onClick={() => {
              history.push("/login");
              localStorage.removeItem("token");
            }}
          >
            Logout
          </div>
        </div>
      )}
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem pp={pp1} userName="Aaryan KC" post={bed} time="1h" />
      <NotificationItem
        pp={pp2}
        userName="Amik Bhandari"
        post={bed}
        time="2w"
      />
    </div>
  );
}

export default withRouter(Notification);
