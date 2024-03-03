import React, { useState, useEffect, useContext } from "react";
import RestroCard from "./restrocard";
import { restaurentList } from "./constants";
import { BiSearchAlt } from "react-icons/bi";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useRestaurantList from "../Utils/useRestaurantList";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";

function body() {
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restroList = useRestaurantList();

  const { user, setuser } = useContext(UserContext);

  //const allRestaurent = restroList.allRestro;
  //const filteredRestaurantt = restroList.filteredRestro;
  useEffect(() => {
    //console.log(restroList)
    //setAllRestaurent(restroList);
    //setFilteredRestaurant(restroList);
  }, [restroList]);
  console.log(restroList);
  const online = useOnline();
  if (!online) {
    return <h1>🔴 No active internet connection...</h1>;
  }
  return allRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pt-16 flex flex-col mt-3 container mx-auto">
      <div className="searchContainer">
        <input
          data-testid="search-input"
          type="text"
          name=""
          className="txtSearch"
          placeholder="Search Restaurent"
          id=""
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            //console.log(e.target.value)
          }}
        />
        <button
          data-testid="searchBtn"
          className="btnSearch"
          onClick={() => {
            console.log("hhjhk");
            const dt = filterData(searchText, allRestaurent);
            console.log(dt);
            setFilteredRestaurant(dt);
          }}
        >
          <BiSearchAlt /> Search
        </button>
        <input

          className="border p-2 m-3"
          value={user.name}
          onChange={(e) => {
            setuser({ name: e.target.value, email: "newemail@email.com" });
          }}
        ></input>
      </div>
      <div className="grid grid-cols-4 gap-5" data-testid="res-list">
        {filteredRestaurant?.map((rest) => {
          //console.log(rest.data);
          return (
            <Link
              to={`/restaurent/" ${rest.data.id}`}
              key={rest.data.id}
              className=""
            >
              <RestroCard {...rest.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default body;
