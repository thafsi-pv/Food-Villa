import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./constants";
import useRestaurent from "../Utils/useRestaurent";
import useOnline from "../Utils/useOnline";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../Utils/CartSlice";
import { SiFacebook } from "react-icons/si";
import Notification from "../Utils/Notification";
import VegIcon from "../Assets/Img/non-vegetarian-48.png";
import { FaRupeeSign } from "react-icons/fa";

const RestaurentMenu = () => {
  const [Notify, setNotify] = useState({ Tite: "", Subtytle: "", Type: "" });
  const { resId } = useParams();
  const restro = useRestaurent(resId);
  const online = useOnline();

  const dispath = useDispatch();
  const handleAddToCart = (item) => {
    dispath(addToCart(item));
    setNotify({
      Title: `Added to cart ${item.name}`,
      Subtitle: "Subtitle here",
      type: "success",
    });
  };

  if (!online) {
    return <h1>🔴 No active internet connection...</h1>;
  }
  return !restro ? (
    <Shimmer />
  ) : (
    <div className="menu pt-20">
      <div className="h-1/5 bg-[#181a29] flex justify-around text-white px-20">
        <div className="p-7 basis-1/4">
          <img
            src={IMG_CDN_URL + restro.cloudinaryImageId}
            alt=""
            className="w-[254] h-[165]"
          />
        </div>
        <div className="grow items-start basis-1/2 ">
          <div className="my-10">
            <p className="text-4xl font-light">{restro.name}</p>
            <p className="text-sm text-slate-500">
              {restro?.cuisines.join(", ")}
            </p>
            <p className="text-sm text-slate-500">
              {restro.locality + ", " + restro.area}
            </p>
            <div className="flex space-x-5 my-6">
              <div className="border-r py-3 px-4 border-slate-500">
                <p className="flex items-center text-sm font-bold">
                  <AiFillStar /> {restro.avgRatingString}
                </p>
                <p className="text-xs text-slate-500">
                  {restro.totalRatingsString}
                </p>
              </div>
              <div className="border-r py-3 px-4 border-slate-500">
                <p className="flex items-center text-sm font-bold">
                  {restro.sla.deliveryTime} Mins
                </p>
                <p className="text-xs text-slate-500">Delivery time</p>
              </div>
              <div className="border-r py-3 px-4 border-slate-500">
                <p className="flex items-center text-sm font-bold">
                  ₹ {restro.costForTwo / 100}
                </p>{" "}
                <p className="text-xs text-slate-500">Cost for two</p>
                <p className=""></p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/4">
          <div className="border p-4 m-10">
            <div>
              <p>Offer</p>
            </div>
            <div>50% off up to ₹80 | Use code WELCOME50</div>
            <div>Free SHARJASHAKE on orders above ₹499</div>
          </div>
        </div>
      </div>

      <div className="flex mx-auto w-3/4">
        <div className="grow-0 border-r-2">
          <h1>Recommended</h1>
          <ul>
            {Object.values(restro.menu?.items).map((item) => (
              <li key={item.id}>
                {item.name}
                <button
                  class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-4"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow p-10">
          <p className="font-bold">Recommended</p>
          <p className="text-sm text-slate-400 font-semibold">10 Items</p>
          <div>
            <span>
              <img className="h-6" src={VegIcon} alt="" />
            </span>
            <p className="font-medium text-">Alfahm</p>
            <div className="flex items-center">
              <span className="text-sm font-medium">
                <FaRupeeSign />
              </span>
              <p className="text-sm font-medium">167</p>
            </div>
          </div>
        </div>

        <div className="grow-0">Cart</div>
      </div>
      {Notify && (
        <Notification
          Title={Notify.Title}
          Subtitle={Notify.Subtitle}
          Type={Notify.Type}
        />
      )}
    </div>
  );
};

export default RestaurentMenu;
