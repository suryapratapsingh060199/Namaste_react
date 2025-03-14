import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/shimmer";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./Components/Grocery"));


const FoodApp = () => {
    const  [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name : "Surya Pratap Singh"
        }
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
            <div className="app">
              <Header/>
              <Outlet/>
              <Footer/>
           </div>
        </UserContext.Provider>      
    )
}
    
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <FoodApp/>,
        children : [
            {
                path : "/",
                element :<Body/>,
            },
            {
                path : "/about",
                element : <About/>,
            },
            {
                path : "/contact",
                element : <Contact/>,
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>,
            }
        ],
        errorElement : <Error/>,
    },
    

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);