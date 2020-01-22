import React from "react";
import Post from "../Components/Post";
import bed from "../Images/bed.svg";
import Profile from "../Components/Profile";

export default function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="profiles">
        <Profile />
        <div></div>
      </div>
      <div className="posts">
        <Post
          title="Bed"
          price={30000}
          location="Pokhara"
          rating="4"
          image={bed}
        />
      </div>
    </div>
  );
}
