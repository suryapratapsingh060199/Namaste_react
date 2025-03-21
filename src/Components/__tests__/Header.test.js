import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { fireEvent, render,screen } from "@testing-library/react";

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
          <Provider store={appStore} >
            <Header/>
          </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items ", () => {
    render(
        <BrowserRouter>
          <Provider store={appStore} >
            <Header/>
          </Provider>
        </BrowserRouter>
    );
    
    const cartItems = screen.getByText("🛒-(0 items)");   // (/🛒/) -> Use for something matching found. 

    expect(cartItems).toBeInTheDocument();
});