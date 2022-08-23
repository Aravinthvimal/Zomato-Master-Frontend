import React from "react";
import { AiFillStar } from "react-icons/ai";

const SimilarRestaurantsGrid = (props) => {
    return (
        <>
        <div className="mb-4">
            <div className="p-2">
                <img src={props.src} alt={props.name} className="w-full h-40 lg:h-60 object-center object-cover rounded-xl" />
            </div>
            <div> <p className="md:text-lg text-md text-gray-600 font-semibold ml-2 "> {props.name} </p> </div>
            <div className={`ml-2 mt-2 text-white flex items-center ${props.isLarge ? "gap-3" : "gap-1"}`}>
                <div className={`flex items-center gap-1 px-1.5 lg:px-2 py-0.5 rounded-lg ${props.diningRatings > 0 ? "bg-ratingscolor-600" : "bg-gray-500"}`}>
                    <p className="text-2xs lg:text-sm"> {`${props.diningRatings === 0 ? "-" : props.diningRatings}`} </p>
                    <AiFillStar className="lg:w-full w-2.5" />
                </div>
                <p className="text-gray-700 text-2xs lg:text-sm"> DINING </p>
                <p className="text-gray-400 mx-1 lg:mx-0"> | </p>
                <div className={`flex items-center gap-1 px-1.5 lg:px-2 py-0.5 rounded-lg ${props.deliveryRatings > 0 ? "bg-ratingscolor-600" : "bg-gray-500"}`}>
                    <p className="text-2xs lg:text-sm"> {`${props.deliveryRatings === 0 ? "-" : props.deliveryRatings}`} </p>
                    <AiFillStar className="lg:w-full w-2.5" />
                </div>
                <p className="text-gray-700 text-2xs lg:text-sm"> DELIVERY </p>
            </div>
            <p className="mt-2 ml-2 w-44 text-gray-500 truncate text-xs lg:text-base "> {props.types} </p>
        </div>
        </>
    )
};

export default SimilarRestaurantsGrid;