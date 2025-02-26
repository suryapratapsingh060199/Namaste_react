import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState(""); 

    useEffect(() => {
        fetchData();
    } , [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6097298&lng=77.30964689999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (filteredRestaurant.length === 0) { 
       return <Shimmer/>;
    }
    return (
        <div className="body">
            <div className="filter-btn">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}/>
                <button className="searchbtn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());});
                        setFilteredRestaurant(filteredList);
                }} >Search</button>
            </div>
            <button className="top-btn"
              onClick={ () => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.2);
                setFilteredRestaurant(filteredList);
            }}>
                Top Restaurants
            </button>
            </div>   
            <div className="res-container"> 
                {filteredRestaurant.map((restaurant) => (
                    <Link key = {restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                ))}  
            </div>
        </div>
    
    );
};
 
export default Body ;