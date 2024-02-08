import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";


const Body = () => {
    const [restaurantsListData, setRestaurantsListData] = useState([]);
    const [searchInputText, setSearchInputText] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    useEffect(() => {
        console.log('use effect is called');
        fetchData();
    }, []);

    fetchData = async () => {
        data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.183561174748895&lng=72.99311242997646&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        });
        let res = await data.json()
        console.log(res);
        const resData = res.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsListData(resData);
        setFilterRestaurant(resData);
    };
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
                filterRestaurant.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant.info} />)
            }
        </div>
    </div>
}
export default Body;