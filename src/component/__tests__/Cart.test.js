import { render, act, screen, fireEvent } from "@testing-library/react";
import Restaurant from "../Restaurant";
import MOCK_RES_DATA from "../mocks/resMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve(MOCK_RES_DATA),
    }));

it("should load restaurant menu component ", async () => {
    await act(async () => {
        render(

            <BrowserRouter>
                <Provider store={appStore}>
                    <Header></Header>
                    <Restaurant />
                    <Cart />
                </Provider>
            </BrowserRouter >
        )
    });
    const accordionHeader = screen.getByText("Sharing Combos (21)");
    fireEvent.click(accordionHeader);
    expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();
    const foodList = screen.getAllByTestId('foodItem');
    expect(foodList.length).toBe(21);
    const addButtons = screen.getAllByRole("button", { name: "Add+" });
    fireEvent.click(addButtons[0]);
    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();
    fireEvent.click(addButtons[1]);
    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Cart-(2 items)"));
    expect(screen.getAllByTestId('foodItem').length).toBe(23);
    const clearButtons = screen.getByRole("button", { name: "Clear Card" });
    fireEvent.click(clearButtons);
    expect(screen.getAllByTestId('foodItem').length).toBe(21);
    expect(screen.getByText('Cart is empty. Add Items to the card')).toBeInTheDocument();

});