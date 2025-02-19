const RestaurantCard = ({resData}) => {
    const { name, cuisines, avgRating , cloudinaryImageId } = resData?.info;
    return(
    <div className="res-card">
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} Stars</h4>
    </div>

);
}

export default RestaurantCard;