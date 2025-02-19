import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

const FoodApp = () => (
    <div className="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>
);
const router = createBrowserRouter([
    {
        path : "/",
        element : <FoodApp/>,
    },
    {
        path : "/about",
        element : <About/>,
    },
    {
        path : "/contact",
        element : <Contact/>,
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);