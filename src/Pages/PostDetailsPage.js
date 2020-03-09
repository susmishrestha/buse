import React from "react";
import NewComment from "../Components/NewComment";
import Comments from "../Components/Comments";
import bed from "../Images/bed.svg";
import back from "../Images/back-arrow.svg";
import Details from "../Components/Details";

export default function PostDetailsPage() {
  return (
    <div className="postDetails">
      <div className="back-post-grid">
        <img className="back-arrow" src={back} alt="" />
        <div>
          <img className="post-image" src={bed} alt="" />
          <div className="information">
            <Details title="General Details">
              <div>Ad Id: 100</div>
              <div>Ad Post Date: 10-01-2020</div>
              <div>Ad Expiry Date: 10-02-2020</div>
            </Details>

            <Details title="Seller Details">
              <div>Sold By:Ankit Karna</div>
              <div>Email:abc@gmail.com</div>
              <div>Phone Number:9875431356</div>
              <div>Location:Lokanthali,Bhaktapur</div>
            </Details>
            <Details title="Pricing Details">
              <div> Price:25000</div>
              <div> Condition:Brand New</div>
            </Details>
            <Details title="Description">
              <div>
                European Design (Euro) Khaat Khat Bed Comes with One Side
                drawer. Size: 5ft x 6.5 ft Matress size (Matress not icluded )
                Glossy shining quality finish.
              </div>
            </Details>

            <NewComment />
            <Comments userName="Ankit Karna" comment="I want to buy." />
          </div>
        </div>
      </div>
    </div>
  );
}
