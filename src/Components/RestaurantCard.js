const RestaurantCard = ({resData}) => {
    const { resName, cusines, rating } = resData;
    return(
    <div className="res-card">
        <img className="abc" src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=1024x1024&w=is&k=20&c=QPHFTWoscwMSXOEGKoAKOjlCnMGszppFBrqQHdy4EGc="/>
        <h3>{resName}</h3>
        <h4>{cusines}</h4>
        <h5>{rating}stars</h5>
    </div>

);
}

export default RestaurantCard;