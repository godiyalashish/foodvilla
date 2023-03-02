import { useState, useEffect } from "react";
import { GET_RESTAURANT_MENU } from "../../config.js";

const useRetaurant = (resId) =>{
    const[restaraunt, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    }, []);

    const getRestaurantInfo = async () =>{
        const data = await fetch(GET_RESTAURANT_MENU+resId);
        const json = await data.json();
        setRestaurant(json.data);
    }
    return restaraunt
}

export default useRetaurant; 