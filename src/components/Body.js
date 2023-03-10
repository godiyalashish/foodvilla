import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../../config";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [searchValue, setSearchValue] = useState();
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6457831&lng=77.138989&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="h-screen">
      <div className="p-2 my-2 bg-pink-50 mt-20">
        <input
            data-testid="search-input"
          className="p-2 ml-2 border-solid border-2 border-purple-400"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-700 text-white rounded"
          onClick={() =>
            setFilterRestaurant(filterData(searchValue, restaurantList))
          }
        >
          Search
        </button>
      </div>
      <div data-testid="restaurant-list" className="my-4 flex flex-wrap items-strech justify-center gap-x-2 gap-y-3 auto-rows-max ">
        {filterRestaurant?.length === 0 ? (
          <h1>No results found Search again!</h1>
        ) : (
          filterRestaurant?.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
