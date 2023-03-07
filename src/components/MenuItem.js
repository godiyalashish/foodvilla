import { imgLink } from "../../config";
import { useDispatch } from "react-redux";
import { addItem, remove, removeItem } from "../utils/cartSlice";

const MenuItem = (props) =>{
    const dispatch = useDispatch();
    const handelAddItem = (item) =>{
        dispatch(addItem({...item, count:1}))
    }

    const handelRemoveItem = (item) =>{
        dispatch(removeItem(item));
    }
    return(
        <div className="flex p-2 rounded-lg bg-pink-50 shadow-lg ">
            <div className="w-20 h-20 rounded-xl">
                <img src={imgLink+props.cloudinaryImageId}/>
            </div>
            <div className="p-2">
                <p className="text-lg font-bold">{props.name}</p>
                <p className="text-lg">Price: ₹{props.price/100}</p>
                {(props.isVeg === 1) ? <p>Veg</p> : <p>Non-veg</p>}
                <button data-testid="addItem" className="p-2 bg-green-300 mt-2 rounded-lg hover:bg-green-600" onClick={() => handelAddItem(props)}>+ Add to cart</button>
                <button className="p-2 bg-green-300 ml-1 rounded-lg hover:bg-green-600 " onClick={() => handelRemoveItem(props)}>- Remove from cart</button>
            </div>
        </div>
    )
}

export default MenuItem;