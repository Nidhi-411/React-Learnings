
 import RestaurantCard from "./RestaurantCard"
 import Shimmer from "./Shimmer";
 import { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";

 
const Body = () =>
{ // local state variable
  const [listOfRestaurant , setlistOfRestaurant] = useState([]);
  const[listOfRestaurantForSearch , setListOfRestaurantForSearch]= useState([]); 
  const [searchText , setSearchText] =  useState("");

  console.log("Body Render");

   useEffect(()=>{
      fetchData();
   } , []);

   const fetchData = async()=>{

     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25470&lng=77.39370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
   
    setlistOfRestaurant(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurantForSearch(json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants) 
    } 

    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false)
    {
       return(
        <h1>Looks like u r offline , Please check your connection</h1>
       )
    }
  
    return listOfRestaurant.length === 0 ?  <Shimmer/> :
    ( <div className="body">
    <div className="filter">
        <div className="search">
          <input type="text" className="search-box" 
          value={searchText} 
          onChange = {(e)=> {
            setSearchText(e.target.value);
          }}/>  
         <button onClick={()=>{
            // filter the restro-cards and update the ui
            // searchtext
           const filteredRestaurant = listOfRestaurantForSearch.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setlistOfRestaurant(filteredRestaurant);
         }}>search</button>
        </div>

      <button className="filter-btn" 
       onClick={()=>{
        const filteredList = listOfRestaurant.filter(
           (res) => res.info.avgRating > 4
          );
        
          setlistOfRestaurant(filteredList);
       }}

       >
        Top Rated Restaurant</button>
    </div>
    <div className="res-container">
        {
           listOfRestaurant.map( (restaurant) => 
         (
            <Link to={"/restaurants/"+restaurant.info.id} className="style-none"><RestaurantCard key={restaurant.info.id} resData={restaurant}/></Link>
         ))
        }
    </div>
  </div>)
}

export default Body;