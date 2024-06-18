import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    return (
            <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400" >
                    <img className="rounded-lg" alt = "res-logo" src = {CDN_URL+ props.resData.info.cloudinaryImageId} />
                    <h3 className="font-bold py-4 text-lg"> {props.resData.info.name} </h3>
                    <h4>{props.resData.info.cuisines.join(',')}</h4>
                    <h4>{props.resData.info.avgRating}</h4>
                    <h4>{props.resData.info.sla.deliveryTime}</h4>

            </div>
    );
};
export const withPromotedLabel = (RestaurantCard) => {
        return (props) => {
                return (
                        <div>
                                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                                <RestaurantCard {...props}/>
                        </div>
                )
        }
};
export default RestaurantCard;  // export the component so it can be used elsewhere in the app.