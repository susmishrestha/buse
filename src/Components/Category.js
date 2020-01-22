import React from "react";

export default function Category(props) {
  return (
    <div className="category">
      <img src={props.picture} alt="" />
      <span className="category-name">{props.category}</span>
    </div>
  );
}
