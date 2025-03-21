import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => Promise.resolve({
       json: () => Promise.resolve(MOCK_DATA)
    })
);

it("Should Load RestaurantMenu component",async () => {
    await act (async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    });

    const accordionHeader = screen.getByText("Cake (26)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("fooditems").length).toBe(26);

    const addBtns = screen.getAllByRole("button",{name: "Add +"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("🛒-(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("🛒-(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(28);

    fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));

    expect(screen.getAllByTestId("fooditems").length).toBe(26);

    expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();

});