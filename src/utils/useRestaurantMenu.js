import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        let data = await fetch(RESTAURANT_DETAILS + resId);
        let json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;