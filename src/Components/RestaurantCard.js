import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({resData}) => {
    const { name, cuisines, avgRating , cloudinaryImageId,costForTwo} = resData?.info;
    const {loggedInUser} = useContext(UserContext);
    return(
    <div className="m-2 p-2 w-[300] h-auto text-center bg-gray-100 hover:bg-gray-300 rounded-lg">
        <img className="w-64 h-44 rounded-lg mx-auto" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name}/>
        <h2 className="font-bold py-2 text-lg">{name}</h2>
        <h4 className="py-2">{cuisines.join(",")}</h4>
        <div className="py-2">{avgRating} Stars - {costForTwo}</div>
        <div className="py-2 m-2 font-bold">{loggedInUser}</div>
    </div>

);
}

export default RestaurantCard;