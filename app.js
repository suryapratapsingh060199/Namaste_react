import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.shutterstock.com/shutterstock/photos/2234412247/display_1500/stock-photo-minsk-belarus-december-black-background-night-lots-of-hot-wings-or-strips-of-kfc-2234412247.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const RestaurantCard = ({resData}) => {
    const { resName, cusines, rating } = resData;
    return(
    <div className="res-card">
        <img className="abc" src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=1024x1024&w=is&k=20&c=QPHFTWoscwMSXOEGKoAKOjlCnMGszppFBrqQHdy4EGc="/>
        <h3>{resName}</h3>
        <h4>{cusines}</h4>
        <h5>{rating}</h5>
    </div>

);
}

const resList = [
    {resName:"KFC",cusines:"Burger,Chicken",rating:4.3},
    {resName:"Dominos",cusines:"Pizza,HotDog",rating:4.1},
    {resName:"McDonald",cusines:"Burger",rating:4.5},
    {resName:"Meghana Foods",cusines:"South Indian",rating:4.0},
    {resName:"Apna Dhaba",cusines:"Biryani,Mutton",rating:4.6},
    {resName:"Rollwal",cusines:"Egg Curry,Egg Roll",rating:4.2}
]

const Body = () => (
    <div className="body">
        <div className="s">Search</div>
        <div className="res-container"> 
            {resList.map((restaurant) => (
                <RestaurantCard resData={restaurant}/>
            ))}  
        </div>
    </div>

);

const Footer = () => (
    <div className=""></div>
);


const FoodApp = () => (
    <div className="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp/>);