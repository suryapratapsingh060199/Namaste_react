import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState(""); 
    const {loggedInUser,setUserName} = useContext(UserContext);

    useEffect(() => {
        fetchData();
    } , [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6097298&lng=77.30964689999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
         return(
        <h1>
            Looks like offline, Please check your internet connection !!
        </h1>
        );

    if (filteredRestaurant.length === 0) { 
       return <Shimmer/>;
    }
    return (
        <div className="body">
            <div className="flex items-center">
            <div className="p-4 m-4">
                <input 
                 type="text" 
                 data-testid="searchInput"
                 className="border border-solid border-black" 
                 value={searchText} 
                 onChange={(e) => {setSearchText(e.target.value);}}
                />
                <button className="mx-4 px-4 py-1 bg-lime-300 rounded-md hover:bg-lime-500"
                 onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());});
                        setFilteredRestaurant(filteredList);
                }} > 
                    Search
                </button>
            </div>
            <button className="px-2 py-1 bg-slate-300 rounded-md hover:bg-slate-500"
              onClick={ () => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5);
                setFilteredRestaurant(filteredList);
            }}>
                Top Restaurants
            </button>
            <div className="p-4 m-4">
                <label className="text-lg">UserName : </label>
                <input className="m-1 p-1 rounded-md border border-solid border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            </div>   
            <div className="flex flex-wrap justify-evenly"> 
                {filteredRestaurant.map((restaurant) => (
                    <Link key = {restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                ))}  
            </div>
        </div>
    
    );
};
 
export default Body ;