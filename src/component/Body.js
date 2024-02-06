import RestaurantCard from "./RestaurantCard"
import restaurantsList from '../utils/mockData';
import { useState } from "react";

const Body = () => {

    const [restaurantsListData, setRestaurantsListData] = useState(restaurantsList);

    return <div className="body">
        <div className="filter">
            <button onClick={() => {
                let filteredList = restaurantsListData.filter(res=>res.info.avgRating>4.5);
                setRestaurantsListData(filteredList);
            }} className="filter-btn" >To rated button </button>
        </div>
        <div className="res-container">
            {
                restaurantsListData.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant.info} />)
            }
        </div>
    </div>
}
export default Body;