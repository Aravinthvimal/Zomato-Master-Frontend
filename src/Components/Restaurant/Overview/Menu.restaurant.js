import React from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import { AiFillCaretRight } from "react-icons/ai";

const Menu = (props) => {

    const { id } = useParams();

    const MenuImages = [
        {
            "src": "https://b.zmtcdn.com/data/menus/278/18694278/6b977f8ccbda02a1797ef92b999f309f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "pages": "4",
        },
    ];

    return (
        <>
        <div className="flex items-center justify-between mx-2 lg:mx-8">
                <h3 className="text-xl font-semibold lg:ml-16 mb-2 mt-4 "> Menu </h3>
                <Link to={`/restaurant/${id}/menu`} >
                    <span className={`${props.isMenu ? "relative top-1 flex gap-1 items-center text-red-500" : "hidden"} `}> <p> See all menus </p> <AiFillCaretRight className="relative top-0.5" /> </span>
                </Link>
        </div>
        <div className="static mb-8">
        {
            MenuImages.map((data) => (
                <RestaurantMenu {...data} />
            ))
        }
        </div>  
        </>
    )
};

export default Menu;
