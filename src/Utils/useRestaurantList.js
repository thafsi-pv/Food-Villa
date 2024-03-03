import { useState,useEffect } from "react";
import {RESTRO_LIST_URL} from '../Components/constants'
const useRestaurantList = () => {
  const [allRestaurentz, setAllRestaurent] = useState([]);
  //const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    //getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
        RESTRO_LIST_URL
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurent(json?.data?.cards[0]?.data?.data?.cards);
    //setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    console.log("allRestro" + allRestaurentz);
  }
  console.log("allRestro"+allRestaurentz)
  //return { allRestro: allRestaurent, filteredRestro: filteredRestaurant };
return allRestaurentz;
  
};

export default useRestaurantList;
