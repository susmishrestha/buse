import React from "react";
import Category from "../Components/Category";
import Post from "../Components/Post";
import all from "../Images/all.svg";
import electronics from "../Images/electronics.svg";
import furniture from "../Images/furniture.svg";
import jewellery from "../Images/jewellery.svg";
import clothes from "../Images/clothes.svg";
import utensils from "../Images/utensils.svg";
import laptop from "../Images/laptop.svg";
import decoration from "../Images/decoration.svg";
import table from "../Images/table.svg";
import chair from "../Images/chair.svg";
import bed from "../Images/bed.svg";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="categories">
        <h2>Categories</h2>

        <Category picture={all} category="All" />
        <Category picture={electronics} category="Electronics" />
        <Category picture={furniture} category="Furniture" />
        <Category picture={jewellery} category="Jewellery" />
        <Category picture={clothes} category="Clothes" />
        <Category picture={utensils} category="Utensils" />
        <Category picture={laptop} category="Laptop" />
        <Category picture={decoration} category="Decoration" />
      </div>
      <div className="posts">
        <Post
          title="Bed"
          price={30000}
          location="Pokhara"
          rating="4"
          image={bed}
        />
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
