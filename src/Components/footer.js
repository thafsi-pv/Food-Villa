import React,{useContext} from "react";
import { HiHeart } from "react-icons/hi";
import UserContext from "../Utils/UserContext";

function footer() {
  const {user}=useContext(UserContext);
  return (
    <div className=" bottom-0 w-full p-4 bg-slate-100">
      <div className="">
        <p className="flex items-center text-slate-500 justify-end">
          Made with &nbsp;<HiHeart className="text-red-400" /> &nbsp;Namaste React | 
          <span>&nbsp;CopyRights @ {user.name}</span>
        </p>
       
      </div>
    </div>
  );
}

export default footer;
