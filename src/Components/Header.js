import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart?.items || []);

    return(
    <div className="flex justify-between bg-gray-200 border border-solid border-black shadow-lg m-1 p-1" >
        <div className="logo-container">
            <img className="h-32 w-36 p-1 " src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbGwam47ZNXoiRMw9cLWE33du7TUhVA11YppKSdpNt3n_kWzCQ"/>
        </div>
        <div className="nav-items">
            <ul className="flex text-xl p-4 m-4">
                <li className="p-2 m-2">Online Status : {onlineStatus ? "✅" : "🛑" }</li>
                <li className="p-2 m-2"><Link to="/">Home</Link></li>
                <li className="p-2 m-2"><Link to="/about">About Us</Link></li>
                <li className="p-2 m-2"><Link to="/contact">Contact Us</Link></li>
                <li className="p-2 m-2"><Link to="/grocery">Grocery</Link></li>
                <li className="p-2 m-2 "><Link to="/cart">🛒-({cartItems.length} items)</Link></li>
                <button className="login p-2 m-2 bg-yellow-100 rounded-md cursor-pointer hover:bg-yellow-300" onClick={() => {
                    btnName === "Login" ? setBtnName ("Logout") : setBtnName ("Login") }}>
                    {btnName}
                </button> 
                <li className="p-2 m-2 ">{loggedInUser}</li>
            </ul>
        </div>
    </div>
);
}

export default Header;