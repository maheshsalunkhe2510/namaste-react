import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => { // destructure {p1,p2} 
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = props?.resData;
    return <div className="res-card" >
        <div className="res-logo">
            <img src={CDN_URL + cloudinaryImageId}></img>
        </div>
        <h3>{name} </h3>
        <h6>{cuisines.join(',')}</h6>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
    </div>
}

export default RestaurantCard;