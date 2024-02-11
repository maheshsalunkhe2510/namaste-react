import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer"
const Body = () => {
    const [restaurantsListData, setRestaurantsListData] = useState([]);
    const [searchInputText, setSearchInputText] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    useEffect(() => {
        console.log('use effect is called');
        fetchData();
    }, []);

    fetchData = async () => {
        data = await fetch(RESTAURANT_LIST_URL, {
        });
        let res = await data.json()
        console.log(res);
        const resData = res.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsListData(resData);
        setFilterRestaurant(resData);
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>Looks like you're offline!! PLease check your internet connection</h1>
    }
    if (restaurantsListData?.length === 0) {
        return <Shimmer />
    }
    return <div className="body">
        <div className="searchBar flex items-center">
            <div className="m-4 p-4">
                <input className="border border-solid border-black" value={searchInputText} onChange={(event) => {
                    setSearchInputText(event.target.value);
                }} />
            </div>
            <div>
                <button className="search-btn px-4 m-4 bg-green-200 py-2 rounded-lg" onClick={() => {
                    let filteredList = restaurantsListData.filter(res => res.info.name.toLowerCase().includes(searchInputText.toLowerCase()));
                    setFilterRestaurant(filteredList);
                }}>
                    search
                </button>
            </div>
            <div className="filter flex">
                <div className="m-4 p-4">
                    <button
                        className="filter-btn px-4 m-4 bg-green-200 py-2 rounded-lg"
                        onClick={() => {
                            let filteredList = restaurantsListData.filter(res => res.info.avgRating > 4.5);
                            setFilterRestaurant(filteredList);
                        }} >To rated button </button>
                </div>
            </div>
        </div>

        <div className="res-container flex flex-wrap">
            {

                filterRestaurant.map(restaurant =>
                    <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant.info} />
                    </Link>
                )
            }
        </div>
    </div>
}
export default Body;