import React from "react";

export default function NotificationItem({ pp, userName, post, time }) {
  return (
    <div className="notification">
      <img className="noti-pp" src={pp} alt="" />
      <span>
        <strong> {userName} </strong> commented on your post. {time}
      </span>
      <img className="noti-post" src={post} alt="" />
    </div>
  );
}
