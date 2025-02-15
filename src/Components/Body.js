import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/constants";
import { useState } from "react";



const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

    const filteTopRated = () => {
        const filteredList = listOfRestaurant.filter((res) => res.rating >= 4.5);
        setlistOfRestaurant(filteredList);
    }

    return (
        <div className="body">
            <button className="filter-btn"
              onClick={filteTopRated}>
                Top Rated Restaurant
            </button>
            <div className="res-container"> 
                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard resData={restaurant}/>
                ))}  
            </div>
        </div>
    
    );
};
 
export default Body ;