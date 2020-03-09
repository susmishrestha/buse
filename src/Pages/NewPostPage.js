import React from "react";
import myAxios, { getAuthorizationHeaders } from "../axios";
import Button from "../Components/Button";

export default function NewPostPage() {
  const [categories, setCategories] = React.useState([]);
  const titleRef = React.useRef();
  const addressRef = React.useRef();
  const priceRef = React.useRef();
  const descriptionRef = React.useRef();
  const conditionRef = React.useRef();
  const categoryRef = React.useRef();
  const fileRef = React.useRef();

  React.useEffect(() => {
    myAxios
      .get("/user/category", getAuthorizationHeaders())
      .then(response => {
        setCategories(
          response.data.category.filter(category => category.name !== "All")
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ paddingTop: "7rem" }}>
      <h3>Add Post</h3>
      <div style={{ width: "50%" }}>
        <form action="" method="post">
          <input
            type="text"
            className="text"
            placeholder="Ad Post Title"
            ref={titleRef}
          />
          <input
            type="text"
            className="text"
            placeholder="Your Address"
            ref={addressRef}
          />
          <input
            type="text"
            className="text"
            placeholder="Price"
            ref={priceRef}
          />
          <textarea
            name=""
            id=""
            rows="5"
            className="text"
            placeholder="Description"
            ref={descriptionRef}
          ></textarea>
          Condition:
          <div style={{ height: "16px" }}></div>
          <select name="condition" className="text" ref={conditionRef}>
            <option value="Brand New">Brand New</option>
            <option value="Brand New">Like New</option>
            <option value="Brand New">Used</option>
          </select>
          Category:
          <div style={{ height: "16px" }}></div>
          <select name="condition" className="text" ref={categoryRef}>
            {categories.map(category => (
              <option value={category.name}>{category.name}</option>
            ))}
          </select>
          Select Image File:
          <div style={{ height: "16px" }}></div>
          <input
            type="file"
            name="myFile"
            onChange={e => {
              fileRef.current = e.target.files[0];
            }}
          />
          <div style={{ height: "16px" }}></div>
          <Button fullWidth={true} variant={3}>
            Add Post
          </Button>
          <div style={{ height: "48px" }}></div>
        </form>
      </div>
    </div>
  );
}
