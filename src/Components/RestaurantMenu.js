import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex] = useState(null);

    if(resInfo === null){
        return <Shimmer/>;
    };

    const{name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    

    return(
        <div className="text-center ">
            <h1 className="font-bold text-2xl my-2">{name}</h1>
            <p className="font-bold text-lg my-2">{cuisines.join(",")} - {costForTwoMessage} </p>    
            {categories.map((category,index) => (
                //controlled component
                <RestaurantCategory 
                    key = {category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex ={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}                             
                />))}      
        </div>
    );
};
export default RestaurantMenu;