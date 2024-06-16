import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    if ( resInfo) {
        console.log(resInfo?.cards[2]?.card?.card?.info)
        let res = resInfo?.cards[2]?.card?.card?.info
      const { name, cuisines, costForTwoMessage } = res;
      const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2> Menu  </h2>
            <ul>
            {itemCards.map((item) => (
                <li key= {item.card.info.id}> {item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100 }  </li>
                
            ))}
            </ul>
            
            
        </div>
    )
    } else {
        return <Shimmer/>;
    }
}
export default RestaurantMenu;