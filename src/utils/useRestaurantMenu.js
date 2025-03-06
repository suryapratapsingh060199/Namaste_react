import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6092802&lng=77.30300489999999&restaurantId="+resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    

    
    return resInfo;
};
export default useRestaurantMenu;