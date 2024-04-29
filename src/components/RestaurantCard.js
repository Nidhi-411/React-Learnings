 import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>
{  
  const { resData } = props;
  const {cloudinaryImageId , cuisines,avgRating,costForTwo, name , deliveryTime } = resData?.info;

   return (
     <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="res-logo rounded-xl" alt="res-log" src= {CDN_URL+cloudinaryImageId } />
      <h3 className="font-bold text-lg py-4 ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{ costForTwo  } </h4>
      <h4>{deliveryTime} minuts</h4>
     </div>
   )
}

// heigher order component
// input - RestaurantCard  , output RestaurantCardPromoted

 export const withOpenLable = ( RestaurantCard)=>
{
   return (props)=>{
       return(
        <div>
        <label className="absolute m-1 p-1 bg-green-600 text-black">Open</label>
        <RestaurantCard {...props}/>
        </div>
       )
   }
}

export default RestaurantCard;