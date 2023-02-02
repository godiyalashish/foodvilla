import { imgLink } from "../../config";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, slaString}) =>(
    <div className="restaurant-card">
        <img src={imgLink+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{slaString}</h4>
    </div>
);

export default RestaurantCard;