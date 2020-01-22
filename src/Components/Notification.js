import React from "react";
import profilePic from "../Images/pp.jpg";
import dropdown from "../Images/down-arrow.svg";
import NotificationItem from "./NotificationItem";
import pp1 from "../Images/pp1.jpg";
import bed from "../Images/bed.svg";
import pp2 from "../Images/pp2.jpg";

export default function Notification() {
  return (
    <div className="notifications">
      <div className="notification-header">
        <span>
          <strong>Notifications</strong>
        </span>
        <img id="pp" src={profilePic} alt="" />
        <img id="drop-down" src={dropdown} alt="" />
      </div>
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
