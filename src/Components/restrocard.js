import React, {useContext} from "react";
import { AiFillStar } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { IMG_CDN_URL } from "../Components/constants";
import UserContext from "../Utils/UserContext";

const restrocard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwoString,
  slaString,
  aggregatedDiscountInfo,
}) => {
  const {user}=useContext(UserContext);
  console.log("cusine"+cuisines)
  return (
    <div className="p-4 hover:shadow-md hover:border">
      <div>
        <img
          className="restroimg"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="img"
        />
      </div>
      <div className="text-md font-semibold pt-3">{name}</div>
      <div className="text-xs text-slate-400">{cuisines?.join(", ")}</div>
      <div className="flex justify-between my-3 text-xs">
        <div className="flex items-center bg-green-500 p-1 text-white">
          <span>
            <AiFillStar className="starico" />
          </span>
          <span className="star">{avgRating}</span>
        </div>
        <div>.</div>
        <div>{slaString}</div>
        <div>.</div>
        <div>{costForTwoString}</div>
      </div>
      <div className="flex items-center justify-center border-t p-2 text-[#8a584b] text-sm">
        <span>
          <TbDiscount2 className="offerico" />
        </span>
        <span className="sNAfh">
          {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
        </span>
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default restrocard;
