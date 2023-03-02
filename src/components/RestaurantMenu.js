import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {imgLink} from '../../config.js';
import Shimmer from './Shimmer';
import useRetaurant from "../utils/useRestaurant.js";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";
import MenuItem from "./MenuItem.js";

const RestaurantMenu = () =>{
    const {id} = useParams();
    const restauraunt = useRetaurant(id);
    const dispatch = useDispatch();
    const handelAddItem = () =>{
        dispatch(addItem("grapes"));
    }

    return (!restauraunt) ? <Shimmer /> :(
        <div className="res_details">
            <div className="Restaurant_details p-3">
                <h1 className="text-3xl font-bold">{restauraunt.name}</h1>
                <img className="m-2" src={imgLink+restauraunt.cloudinaryImageId}/>
                <h2 className="text-xl font-bold">{restauraunt?.city}</h2>
                <h2 className="text-xl font-bold">{restauraunt?.area}</h2>
                <h2 className="text-xl font-bold">{restauraunt?.costForTwoMsg}</h2>
            </div>
            <div className="menu">
            <h2 className="text-2xl font-bold m-3 text-center">Menu</h2>
                <div className="flex gap-x-7 gap-y-5 flex-wrap justify-center items-strech auto-rows-max auto-cols-max">
                    {
                        Object.values(restauraunt?.menu?.items).map(item =><MenuItem key={item.id} {...item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;