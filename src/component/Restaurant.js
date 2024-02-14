import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const Restaurant = () => {
    const { resId } = useParams();
    const [sowIndex, setShowIndex] = useState();
    const resInfo = useRestaurantMenu(resId);
    console.log('render the component ..................');
    if (resInfo === null) {
        return <Shimmer />
    }
    const { name, cuisines, avgRating, costForTwoMessage } = resInfo.cards[0]?.card?.card?.info;
    const ItemCategory = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //s console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    return (
        < div className="text-center" >
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold my-6 text-2xl">
                {cuisines.join(', ')} - {costForTwoMessage}
            </p>
            <div>
                {
                    ItemCategory.map((category, index) =>
                        <RestaurantCategory
                            showItems={index === sowIndex}
                            key={category?.card?.card.title}
                            data={category?.card?.card}
                            setShowIndex={() => (
                                index === sowIndex ? setShowIndex(null) : setShowIndex(index))}
                        ></RestaurantCategory>
                    )}

            </div>
        </div >
    )
};
export default Restaurant;