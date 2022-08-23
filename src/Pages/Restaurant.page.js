import React from "react";
import { useParams } from "react-router-dom";
import MenuComponent from "../Components/Restaurant/Menu/index.Menu";

// Components
import Overview from "../Components/Restaurant/Overview/index.Overview";
import Photos from "../Components/Restaurant/Photos/index.Photos";
import ReviewTab from "../Components/Restaurant/Reviews/index.Review";
import OrderOnline from "../Components/Restaurant/Order-Online/index.order-online";
import temp from "../Components/temp";

const RestaurantPage = () => {
    
    const { type } = useParams();

    return (
        <>
        <div>
            <div className="">
                { type === "overview" && <Overview /> }
            </div>
            <div>
                { type === "order-online" && <OrderOnline /> }
            </div>
            <div>
                { type === "reviews" && <ReviewTab /> }
            </div>
            <div>
                { type === "menu" && <MenuComponent /> }
            </div>
            <div>
                { type === "photos" && <Photos /> }
            </div>
        </div>
        </>
    )
};

export default RestaurantPage;