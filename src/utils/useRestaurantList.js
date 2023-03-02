import { useEffect, useState } from "react";

const useRestaurantList = () =>{
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    useEffect(()=>{
        getRestaurants();
    },[])

    const getRestaurants = async() =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6457831&lng=77.138989&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return [restaurantList, filterRestaurant];
}

export default useRestaurantList;