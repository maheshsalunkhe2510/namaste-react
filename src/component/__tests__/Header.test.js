import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "login" });
    expect(loginButton).toBeInTheDocument();
});

it("Should render header component with cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    );
    // const loginButton = screen.getByText("Cart-(0 items)");
    const loginButton = screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout on click ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "login" });
    fireEvent.click(loginButton);
    const logOutBtn = screen.getByRole("button", { name: "logout" });
    expect(logOutBtn).toBeInTheDocument();

});