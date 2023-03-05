import { useDispatch } from "react-redux";
import { imgLink } from "../../config";
import { addItem, removeItem } from "../utils/cartSlice";

const CartItem = (props) =>{
    const dispatch = useDispatch();
    const handelAddItem =(item) =>{
        dispatch(addItem(item));
    }
    const handelRemoveItem =(item) =>{
        dispatch(removeItem(item));
    }
    const {name, price, cloudinaryImageId,count} = props.item;
    return (
        <div className="flex p-2  bg-pink-50 rounded-lg mb-2">
            <div className="h-28 w-28 mr-2 ">
                <img className="rounded-lg" src={imgLink+cloudinaryImageId}/>
            </div>
            <div className="flex flex-col">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-xl">Price: ₹{price/100}</p>
                <p>Quantity: {count}</p>
            </div>
            <div className="flex items-center gap-x-2 justify-end">
                <button className="bg-green-200 p-2 m-1 font-bold rounded-lg h-10 hover:bg-green-400" onClick={()=>handelAddItem(props.item)} >Add +</button>
                <button className="bg-red-200 p-2 m-1 font-bold rounded-lg h-10 hover:bg-red-400" onClick={()=>handelRemoveItem(props.item)}>Remove -</button>
            </div>
        </div>
    )
};

export default CartItem;