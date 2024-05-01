import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Menu_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = ()=> { 
  
   const [showIndex , setShowIndex] = new useState(0);

   const {resId} = useParams(); 
    
   const resInfo = useRestaurantMenu(resId);
   
     if(resInfo === null)
      {
         return(
            <Shimmer/>
         )
      }  
     
    const { name , cuisines , costForTwoMessage  }   = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards }= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   // console.log(categories);
   return (<div className="text-center">
          <h1 className="font-bold my-10 text-2xl" >{name}</h1>
         <p className="font-bold text-lg">{cuisines.join(", ")}
           {costForTwoMessage}</p> 

           {categories.map( (category , index ) =>
            <RestaurantCategory key={category.card.card.title}
             data= {category.card.card} 
             showItems={ index == showIndex && true}
             setShowIndex={()=>setShowIndex(index)}
            
             />) }
     </div>
   
      
   )
}
 
export default RestaurantMenu;