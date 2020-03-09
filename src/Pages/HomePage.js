import React from "react";
import Category from "../Components/Category";
import Post from "../Components/Post";
import table from "../Images/table.svg";
import chair from "../Images/chair.svg";
import bed from "../Images/bed.svg";
import myAxios, { baseURL, getAuthorizationHeaders } from "../axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    myAxios
      .get("/user/category", getAuthorizationHeaders())
      .then(response => {
        setCategories(response.data.category);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="homePage">
      <div className="categories">
        <h2>Categories</h2>

        {categories.map(category => (
          <Category
            picture={baseURL + category.url}
            category={category.name}
            active={category.name === "All"}
          />
        ))}
      </div>
      <div className="posts">
        <Link to="/home/postdetails">
          <Post
            title="Bed"
            price={30000}
            location="Pokhara"
            rating="4"
            image={bed}
          />
        </Link>
        <Post
          title="Table"
          price={20000}
          location="Jhapa"
          rating="4.5"
          image={table}
        />
        <Post
          title="Chair"
          price={10000}
          location="Butwal"
          rating="3"
          image={chair}
        />
      </div>
    </div>
  );
}
