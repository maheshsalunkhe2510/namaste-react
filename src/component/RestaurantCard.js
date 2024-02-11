import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => { // destructure {p1,p2} style={{ backgroundColor: "#f0f0f0" }}
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = props?.resData;
    return (
        <div className="res-card p-4 m-4 w-[250px]  bg-gray-100 hover:bg-gray-400" >
            <img
                className="rounded-lg"
                src={CDN_URL + cloudinaryImageId}>
            </img>
            <h3 className="font-bold py-2 text-lg">{name} </h3>
            <h4 className="">{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;