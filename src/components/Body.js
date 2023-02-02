import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../../config";
import { useEffect } from 'react';

const filterData =(searchValue, restaurantList) =>{
   return restaurantList.filter((restaraunt) => restaraunt.data.name.toLowerCase().includes(searchValue.toLowerCase()))
}

const Body = () => {
    useEffect(()=>{
        getRestaurants();
    },[])
    const [searchValue, setSearchValue] = useState();
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);

    const getRestaurants = async() =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6457831&lng=77.138989&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return (restaurantList.length === 0)? <h1>Shimmer ui</h1> : (
    <>
        <div className="search-container">
            <input className="search-input" placeholder="Search" value = {searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            <button className="search-btn" onClick={()=>setFilterRestaurant(filterData(searchValue, restaurantList))}>Search</button>

        </div>
        <div className="restaurant-cards">
            
            {filterRestaurant.length === 0 ? <h1>No results found Search again!</h1> :
                filterRestaurant.map((restaurant) =>{
                return <RestaurantCard {...restaurant.data} key = {restaurant.data.uuid}/>
            })}
        </div>
    </>
)};

export default Body;