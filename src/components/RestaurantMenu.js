import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Menu_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = ()=> { 

   const {resId} = useParams(); 
    
   const resInfo = useRestaurantMenu(resId);
   
     if(resInfo == null)
      {
         return(
            <Shimmer/>
         )
      }  
     
    const { name , cuisines , costForTwoMessage  }   = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards }= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
   return (<div>
        <h1>{name}</h1>
       
            <h4>{cuisines.join(", ")}</h4>
           <h4>{costForTwoMessage}</h4> 
           <br></br>
        <h1>Menu</h1>
      
         <ul>
            {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>)}
         </ul>
     </div>)
}

export default RestaurantMenu;