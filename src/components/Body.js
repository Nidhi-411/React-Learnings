
 import RestaurantCard ,{withOpenLable} from "./RestaurantCard"
 import Shimmer from "./Shimmer";
 import { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "../utils/useOnlineStatus";

 
const RestaurantWithLable = withOpenLable(RestaurantCard);

const Body = () =>
{ // local state variable
  const [listOfRestaurant , setlistOfRestaurant] = useState([]);
  const[listOfRestaurantForSearch , setListOfRestaurantForSearch]= useState([]); 
  const [searchText , setSearchText] =  useState("");

  console.log("Body Render " , listOfRestaurant);

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
    <div className="filter flex">
        <div className="search m-4 p-4" >
          <input type="text" className="border border-solid border-black" 
          value={searchText} 
          onChange = {(e)=> {
            setSearchText(e.target.value);
          }}/>  
         <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
            // filter the restro-cards and update the ui
            // searchtext
           const filteredRestaurant = listOfRestaurantForSearch.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
           );
           setlistOfRestaurant(filteredRestaurant);
         }}>search</button>
        </div>
       
       <div className="search m-4 p-4 flex items-center">
       <button className="filter-btn  px-4 py-2 bg-gray-100 " 
       onClick={()=>{
        const filteredList = listOfRestaurant.filter(
           (res) => res.info.avgRating > 4
          );
        
          setlistOfRestaurant(filteredList);
       }}

       >
        Top Rated Restaurant</button>
       </div>
      
    </div>
    <div className="flex flex-wrap">
        {
           listOfRestaurant.map( (restaurant) => 
         (
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="style-none">
            {/**if the restraurant is opend then add a opened lable to it */
               restaurant.info.isOpen ? <RestaurantWithLable resData={restaurant} /> :
          
             <RestaurantCard  resData={restaurant}/>
         }

            </Link>
         ))
        }
    </div>
  </div>)
}

export default Body;