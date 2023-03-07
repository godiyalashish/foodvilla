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
        <div className="mt-24">
            <div className="p-3 flex items-center bg-teal-900">
                <div>
                    <img className="m-2" src={imgLink+restauraunt.cloudinaryImageId}/>
                </div>
                <div className="flex flex-col text-white px-5 gap-x-4">
                    <h1 className="text-5xl font-bold mb-3">{restauraunt.name}</h1>
                    <h2 className="text-xl font-bold">{restauraunt?.city}</h2>
                    <h2 className="text-xl font-bold">{restauraunt?.area}</h2>
                    <h2 className="text-xl font-bold">Cost for two {restauraunt?.costForTwoMsg}</h2>
                </div>
                
            </div>
            <div>
            <h2 className="text-2xl font-bold m-3 text-center">Menu</h2>
                <div data-testid="rest-menu" className="flex gap-x-7 gap-y-5 flex-wrap justify-center items-strech auto-rows-max auto-cols-max">
                    {
                        Object.values(restauraunt?.menu?.items).map(item =><MenuItem key={item.id} {...item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;