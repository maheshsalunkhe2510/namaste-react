import RestaurantCard, { withVegLabel } from "./RestaurantCard"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import useRestaurantList from "../utils/useRestaurantList";
const Body = () => {
    //const [restaurantsListData, setRestaurantsListData] = useState([]);
    const [searchInputText, setSearchInputText] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const { loggedInUser, setUserName } = useContext(UserContext);
    const restaurantsListData = useRestaurantList(setFilterRestaurant);
    useEffect(() => {
        console.log('use effect is called');

    }, []);
    const onlineStatus = useOnlineStatus();
    const VegLabel = withVegLabel(RestaurantCard);
    if (onlineStatus === false) {
        return <h1>Looks like you're offline!! PLease check your internet connection</h1>
    }
    if (restaurantsListData?.length === 0) {
        return <div className="flex flex-wrap">{
            [...Array(10)].map((x, i) =>
                <Shimmer key={i} />
            )
        }</div>
    }
    return filterRestaurant?.length && (<div className="body">
        <div className="searchBar flex items-center">
            <div className="m-4 p-4">
                <input
                    data-testid="searchInput "
                    className="border border-solid border-black"
                    value={searchInputText}
                    onChange={(event) => {
                        setSearchInputText(event.target.value);
                    }} />
            </div>
            <div>
                <button name="search" className="search-btn px-4 m-4 bg-green-200 py-2 rounded-lg" onClick={() => {
                    let filteredList = restaurantsListData.filter(res => res.info.name.toLowerCase().includes(searchInputText.toLowerCase()));
                    setFilterRestaurant(filteredList);
                }}>
                    search
                </button>
            </div>
            <div>
                <label className="p-2">User Name: </label>
                <input data-testid="userName" value={loggedInUser} className="border border-solid border-black" onChange={(e) => {
                    setUserName(e.target.value);
                }} />
            </div>
            <div className="filter flex">
                <div className="m-4 p-4">
                    <button
                        data-testid='filterButton'
                        className="filter-btn px-4 m-4 bg-green-200 py-2 rounded-lg"
                        onClick={() => {
                            let filteredList = restaurantsListData.filter(res => res.info.avgRating > 4.5);
                            setFilterRestaurant(filteredList);
                        }} >Top Rated Restaurant  </button>
                </div>
            </div>
        </div>

        <div className="res-container flex flex-wrap">
            {

                filterRestaurant.map(restaurant =>
                    <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}>
                        {restaurant.info?.veg ? (
                            <VegLabel resData={restaurant.info} />
                        ) : (<RestaurantCard resData={restaurant.info} />)}
                    </Link>
                )
            }
        </div>
    </div>)
}
export default Body;