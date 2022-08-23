import React from "react";

import { AiFillStar } from "react-icons/ai";

const Sponsors = (props) => {
    return (
        <>
        <div className="w-screen lg:w-full md:ml-12 lg:ml-24 ">
            <div className={`float-left mb-4 flex flex-col rounded-xl flex ${props.isLarge ? "ml-5 lg:ml-0 border border-gray-300 border-rounded-lg lg:border-none w-96 lg:mr-4" : "w-full"} `}>
                <div className="lg:p-2">
                    <img src={props.src} alt={props.name} className="w-full h-44 lg:h-60 object-center object-cover rounded-t-lg lg:rounded-xl" />
                </div>
                <div> <p className="md:text-lg text-md text-gray-600 font-semibold ml-2 mt-2 "> {props.name} </p> </div>
                <div className={`ml-2 mt-2 text-white flex items-center ${props.isLarge ? "gap-2 lg:gap-3" : "gap-1"}`}>
                    <div className={`flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 py-0.5 rounded-lg ${props.diningRatings > 0 ? "bg-ratingscolor-600" : "bg-gray-500"}`}>
                        <p className="text-xs lg:text-sm"> {`${props.diningRatings === 0 ? "-" : props.diningRatings}`} </p>
                        <AiFillStar className="lg:w-full w-3" />
                    </div>
                    <p className="text-gray-700 text-xs lg:text-sm"> DINING </p>
                    <p className="text-gray-500"> | </p>
                    <div className={`flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-2 py-0.5 rounded-lg ${props.deliveryRatings > 0 ? "bg-ratingscolor-600" : "bg-gray-500"}`}>
                        <p className="text-xs lg:text-sm"> {`${props.deliveryRatings === 0 ? "-" : props.deliveryRatings}`} </p>
                        <AiFillStar className="lg:w-full w-3" />
                    </div>
                    <p className="text-gray-700 text-xs lg:text-sm"> DELIVERY </p>
                </div>
                <p className="my-2 ml-2 w-44 text-gray-500 truncate text-sm lg:text-base "> {props.types} </p>
            </div>
        </div>
        </>
    )
};

export default Sponsors;