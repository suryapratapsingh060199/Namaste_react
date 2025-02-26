import Shimmer from "./shimmer";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const [resInfo , setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6092802&lng=77.30300489999999&restaurantId="+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo === null){
        return <Shimmer/>;
    };

    const{name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <div>{cuisines.join(",")} - {costForTwoMessage} </div>
            <h3>MENU</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key = {item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</li>
                ) )}
            </ul>
        </div>
    );

};
export default RestaurantMenu;