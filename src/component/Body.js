import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";
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
        const resData = res.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsListData(resData);
        setFilterRestaurant(resData);
    };
    if (restaurantsListData.length === 0) {
        return <Shimmer />
    }
    return <div className="body">
        <div className="searchBar">
            <input className="search-input" value={searchInputText} onChange={(event) => {
                setSearchInputText(event.target.value);
            }} />
            <button className="search-btn" onClick={() => {
                let filteredList = restaurantsListData.filter(res => res.info.name.toLowerCase().includes(searchInputText.toLowerCase()));
                setFilterRestaurant(filteredList);
            }}>
                search
            </button>
        </div>
        <div className="filter">
            <button onClick={() => {
                let filteredList = restaurantsListData.filter(res => res.info.avgRating > 4.5);
                setFilterRestaurant(filteredList);
            }} className="filter-btn" >To rated button </button>
        </div>
        <div className="res-container">
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