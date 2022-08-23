import React from "react";
import { Link, useParams } from "react-router-dom";
 
import { AiFillCaretRight } from "react-icons/ai";

const RestaurantMenu = (props) => {

    const { id } = useParams();

    return (
        <>
        <div className="ml-2 lg:ml-24 w-10/12">
            <div>
                <div className="border absolute h-12 mt-4 w-40 z-10 ml-6 rounded-lg"></div>
                <div className="border absolute h-12 mt-6 w-48 z-20 ml-2 rounded-lg bg-white"></div>
                <div className="absolute z-30">
                    <Link to={`/restaurant/${id}/menu`}>
                        <img src={props.src} alt="menu" className="relative top-8 rounded-lg shadow-lg w-52" />
                    </Link>
                </div>
                <div className="relative top-60">
                    <p className="flex items-start pt-2 text-gray-700"> Menu </p>
                    <p className="flex items-start text-xs text-gray-500"> {props.pages} pages </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default RestaurantMenu;