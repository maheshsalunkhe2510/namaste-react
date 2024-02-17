import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
    render(<ContactUs></ContactUs>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

describe("contact us", () => {
    it("should load button inside contact component", () => {
        render(<ContactUs></ContactUs>);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });

    test("should load input inside contact component", () => {
        render(<ContactUs></ContactUs>);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });

    test("should load 2 input inside contact component", () => {
        render(<ContactUs></ContactUs>);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });

})