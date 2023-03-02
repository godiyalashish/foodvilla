import { Link } from "react-router-dom";
import { imgLink } from "../../config";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, slaString,id}) =>{
    const navigate = useNavigate();
    const showRestaurantDetails = (id) => {
        console.log("hello")
        navigate('/restaurant/'+id);
    }
    return(
    <div className="p-3 w-52 flex flex-col shadow-xl bg-pink-50 rounded-md hover:scale-110 transition duration-500 ease-in-out" onClick={()=>showRestaurantDetails(id)}>
        <img src={imgLink+cloudinaryImageId}/>
        <div className="p-2 flex-1">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{slaString}</h4>
        </div>
    </div>
)};

export default RestaurantCard;