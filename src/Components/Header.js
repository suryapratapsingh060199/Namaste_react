import { useState } from "react";

const Header = () => {
    
    const [btnName,setBtnName] = useState("Login");

    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnName === "Login" ? setBtnName ("Logout") : setBtnName ("Login") }}>
                    {btnName}
                </button> 
            </ul>
        </div>
    </div>
);
}

export default Header;