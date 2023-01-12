import React from "react";
import { AiFillStar } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { IMG_CDN_URL } from "../Components/constants";

const restrocard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  slaString,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="restro hovernow">
      <div>
        <img
          className="restroimg"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="img"
        />
      </div>
      <div className="restroname">{name}</div>
      <div className="cusine">{cuisines.join(", ")}</div>
      <div className="restrostar">
        <div className="starcont">
          <span>
            {" "}
            <AiFillStar className="starico" />
          </span>
          <span className="star">{avgRating}</span>
        </div>
        <div>.</div>
        <div>{slaString}</div>
        <div>.</div>
        <div>{costForTwoString}</div>
      </div>
      <div className="couponcont">
        <span>
          <TbDiscount2 className="offerico" />
        </span>
        <span class="sNAfh">
          {aggregatedDiscountInfo.shortDescriptionList[0].meta}
        </span>
      </div>
    </div>
  );
};

export default restrocard;
