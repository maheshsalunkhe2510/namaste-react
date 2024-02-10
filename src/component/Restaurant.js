import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS } from "../utils/constants";
import Shimmer from "./Shimmer"
const Restaurant = () => {
    const [resInfo, setInfo] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        let data = await fetch(RESTAURANT_DETAILS + resId);
        let json = await data.json();
        setInfo(json.data);
        console.log(json.data);

    }
    // const [resId] = useParams();
    console.log('render the component ..................');
    if (resInfo === null) {
        return <Shimmer />
    }
    const { name, cuisines, avgRating, locality } = resInfo.cards[0]?.card?.card?.info;
    const menuItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    //cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info
    return (
        < div >
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{locality} </h3>
            <h3>{avgRating} </h3>
            <div>
                <ul>
                    {menuItems.map(menu =>
                        <li key={menu?.card?.info?.id}>{menu?.card?.info?.name}  price {menu?.card?.info?.price}</li>
                    )}

                </ul>
            </div>
        </div >
    )
};
export default Restaurant;