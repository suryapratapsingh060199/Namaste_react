import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return(
    <div className="flex justify-between bg-gray-200 border border-solid border-black shadow-lg m-1 p-1" >
        <div className="logo-container">
            <img className="w-52 h-28 p-1" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"/>
        </div>
        <div className="nav-items">
            <ul className="flex text-xl p-4 m-4">
                <li className="p-2 m-2">Online Status : {onlineStatus ? "🟢" : "🔴" }</li>
                <li className="p-2 m-2"><Link to="/">Home</Link></li>
                <li className="p-2 m-2"><Link to="/about">About Us</Link></li>
                <li className="p-2 m-2"><Link to="/contact">Contact Us</Link></li>
                <li className="p-2 m-2"><Link to="/grocery">Grocery</Link></li>
                <li className="p-2 m-2">Cart</li>
                <button className="login p-2 m-2 bg-yellow-100 rounded-md cursor-pointer hover:bg-yellow-300" onClick={() => {
                    btnName === "Login" ? setBtnName ("Logout") : setBtnName ("Login") }}>
                    {btnName}
                </button> 
            </ul>
        </div>
    </div>
);
}

export default Header;