import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu";
const Restaurant = () => {
    const { resId } = useParams();
    console.log(resId);
    // const [resId] = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log('render the component ..................');
    if (resInfo === null) {
        return <Shimmer />
    }
    const { name, cuisines, avgRating, locality } = resInfo.cards[0]?.card?.card?.info;
    const menuItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return (
        < div className="px-96 align-middle" >
            <h1 className="font-bold  align-middle m-5">{name}</h1>
            <h3 className="m-5">{cuisines.join(',')}</h3>
            <h3 className="m-5">{locality} </h3>
            <h3 className="m-5">{avgRating} </h3>
            <div>
                <ul>
                    {menuItems.map(menu =>
                        <li className="m-5 px=05 fo" key={menu?.card?.info?.id}>{menu?.card?.info?.name}  price {menu?.card?.info?.price}</li>
                    )}

                </ul>
            </div>
        </div >
    )
};
export default Restaurant;