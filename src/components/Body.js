import RestaurantCard from "./RestaurantCard";
import { useState, useEffectx, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
        const [listOfRestaurants, setListOfRestaurant] = useState([]);
        const [searchText,setSearchText] = useState("");
        const [filteredRestaurant, setFilteredRestaurant] = useState([]);

        useEffect(() => {
                fetchData();
        }, []);
        const fetchData = async () => {
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
                setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        return listOfRestaurants.length === 0 ?<Shimmer/> :  (
                <div className="body">
                        <div className="filter">
                                   <div className="search">
                                        <input type="text" className="search-box" value={searchText} onChange={(e) => {
                                                setSearchText(e.target.value)
                                        }} />
                                        <button onClick={() => {
                                                 console.log(listOfRestaurants.length, listOfRestaurants)
                                                const filteredRestaurant = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                                                console.log(filteredRestaurant)
                                                setFilteredRestaurant(filteredRestaurant);
                                        }}>
                                                Search
                                        </button>
                                        </div> 
                                <button className="filter-btn" onClick={() => {
                                        const filteredList = listOfRestaurants.filter((res) => {
                                                res.data.avgRating > 4
                                        })
                                        setListOfRestaurant(filteredList);
                                }}>TOP rated Restaurant</button>
                        </div>
                        <div className="res-container">
                                {
                                        filteredRestaurant.map((restaurant) => (
                                                <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                                                        <RestaurantCard resData={restaurant} />
                                                         </Link>
                                        ))
                                }

                        </div>
                </div>
        )
}
export default Body;