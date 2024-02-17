import Body from "../Body"
import RES_LIST_MOCK_DATA from "../mocks/RestaurantListData.json"
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import UserContext from "../../utils/UserContext";
//mock browser fetch call 
global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(RES_LIST_MOCK_DATA);
            },
        });
});

it("should search restaurant list for ice cream text input", async () => {
    await act(async () => {
        render(
            <BrowserRouter> <Body ></Body></BrowserRouter>
        )
    });
    const cardsOnload = screen.getAllByTestId('resCard')
    expect(cardsOnload.length).toBe(20);
    const searchButton = screen.getByRole("button", { name: "search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "ice cream" } });
    fireEvent.click(searchButton);
    const cardsAfterSearch = screen.getAllByTestId('resCard')
    expect(cardsAfterSearch.length).toBe(2);
});

it("should filter top rated restaurant", async () => {
    await act(async () => {
        render(
            <BrowserRouter> <Body ></Body></BrowserRouter>
        )
    });
    const cardsOnload = screen.getAllByTestId('resCard')
    expect(cardsOnload.length).toBe(20);
    const filterButton = screen.getByTestId("filterButton");
    fireEvent.click(filterButton);
    const cardsAfterFilter = screen.getAllByTestId('resCard')
    expect(cardsAfterFilter.length).toBe(3);
});