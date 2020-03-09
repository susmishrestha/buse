import React from "react";

export default function NewComment() {
  const commentRef = React.createRef();

  const comment = () => {
    console.log(commentRef.current.value);
    // console.log(commentRef.current.value);
  };

  return (
    <div>
      <div className="newComment">
        <h4>Comment :</h4>
        <textarea
          className="large normal"
          type="text"
          placeholder="Write a comment"
          ref={commentRef}
        />
        <br />
        <div style={{ textAlign: "right" }}>
          <button onClick={comment}>Post</button>
        </div>
      </div>
    </div>
  );
}
