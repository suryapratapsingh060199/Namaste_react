import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>  Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA)
    })
);

it("Should search Restaurant List for the burger text input", async() => {
    await act(async() => {render(<BrowserRouter ><Body/></BrowserRouter>)});

    const cardsBeforeSearch = screen.findAllByTestId("resCard");

    expect((await cardsBeforeSearch).length).toBe(20);

    const searchBtn = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target: {value: "burger"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.findAllByTestId("resCard");

    expect((await cardsAfterSearch).length).toBe(4);
});

it("Should filter Top Restaurants", async () => {
    await act(async() => {render(<BrowserRouter><Body/></BrowserRouter>)});

    const cardsBeforeSearch = screen.findAllByTestId("resCard");

    expect((await cardsBeforeSearch).length).toBe(20);

    const topBtn = screen.getByRole("button",{name: "Top Restaurants"});

    expect(topBtn).toBeInTheDocument();

    fireEvent.click(topBtn);

    const cards = screen.findAllByTestId("resCard");

    expect((await cards).length).toBe(3);
   
});