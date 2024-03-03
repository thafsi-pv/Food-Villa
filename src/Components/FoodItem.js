import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "./constants";
import {removeItem} from "../Utils/CartSlice"


const FoodItem = ({ name, cloudinaryImageId, Description, Price }) => {

  const dispatch=useDispatch();
  const handleRemoveItem=(name)=>{
    dispatch(removeItem(name))
  }

  return (
    <div>
      <div className="p-4 hover:shadow-md hover:border">
        <div className="float-right cursor-pointer hover:text-red-500" >
          <span onClick={()=>handleRemoveItem(name)}>X</span>
        </div>
        <div>
          <img
            className="restroimg"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="img"
          />
        </div>
        <div className="text-md font-semibold pt-3">{name}</div>
        <div className="text-xs text-slate-400">{Description}</div>
        <div className="flex justify-between my-3 text-xs">
          <p>{Price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
