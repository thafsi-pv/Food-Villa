import React, { useState } from "react";
import RestroCard from "./restrocard";
import {restaurentList} from "./constants"

function body() {
    const [restaurant, setRestaurant]=useState(restaurentList)
    console.log(restaurentList)
  return (
    <div className="bodycontainer">
    {restaurant.map((rest)=>{
        console.log(rest.data);
        return(
            <RestroCard {...rest.data} key={rest.data.id}/>
        )
    })}
    </div>
  );
}

export default body;
