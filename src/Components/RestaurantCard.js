const RestaurantCard = ({resData}) => {
    const { name, cuisines, avgRating , cloudinaryImageId,costForTwo} = resData?.info;
    return(
    <div className="res-card">
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name}/>
        <h2>{name}</h2>
        <h4>{cuisines.join(",")}</h4>
        <div>{avgRating} Stars - {costForTwo}</div>
        
    </div>

);
}

export default RestaurantCard;