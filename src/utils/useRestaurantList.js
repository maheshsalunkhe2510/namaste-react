import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from './constants'
const useRestaurantList = (setFilterRestaurant) => {
    const [restaurantsListData, setRestaurantsListData] = useState([])
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_URL, {
        });
        console.log(data);
        let res = await data.json()
        const resData = res.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsListData(resData);
        setFilterRestaurant(resData);
    };
    return restaurantsListData;
};

export default useRestaurantList;