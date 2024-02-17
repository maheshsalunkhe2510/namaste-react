import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardData.json"
import "@testing-library/jest-dom"

it("Should render restaurant card component", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("BOX8 - Desi Meals");
    expect(name).toBeInTheDocument();
});

it("Should render restaurant card component with veg only label", () => {
    let RestaurantCardWithLabel = withVegLabel(RestaurantCard);
    render(<RestaurantCardWithLabel resData={MOCK_DATA} />);
    const labelVegOnly = screen.getByText("Veg Only");
    expect(labelVegOnly).toBeInTheDocument();
})