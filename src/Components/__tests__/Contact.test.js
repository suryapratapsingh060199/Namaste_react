import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is used to group our test cases 

describe("Contact Us Page Test Case", () => {
    test("Should load Contact Us component", () => {
        render(<Contact/>);
        // Querying
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });

    // test and it is same it is just alias of test.

    it("Should load 2 input boxes on Contact Us component", () => {
        render(<Contact/>);
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length)
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});
