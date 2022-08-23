import classNames from "classnames";
import React from "react";

// Icons
import { BsStarFill } from "react-icons/bs";

function readmore() {
    const des = document.getElementById("des");
    des.classList.remove("truncate")

    document.getElementById("rm-btn").style.display = "none";
} 

const FoodCard = (props) => {
    return (
        <>
        <div className="flex justify-between">
            <div className="flex items-center w-10/12">
                <img src={props.src} alt={props.alt} className="w-32 h-32 object-fit object-cover rounded-lg" />
                <div className="ml-4 flex flex-col">
                    <h3 className="text-lg font-semibold "> {props.name} </h3>
                    <div className="flex items-center gap-3 ">
                        <div className="flex items-center gap-1 w-20">
                            <BsStarFill className={classNames("text-gray-300", {"text-yellow-400 " : props.ratings >= 1,})} />
                            <BsStarFill className={classNames("text-gray-300", {"text-yellow-400 " : props.ratings >= 2,})} />
                            <BsStarFill className={classNames("text-gray-300", {"text-yellow-400 " : props.ratings >= 3,})}/>
                            <BsStarFill className={classNames("text-gray-300", {"text-yellow-400 " : props.ratings >= 4,})}/>
                            <BsStarFill className={classNames("text-gray-300", {"text-yellow-400 " : props.ratings == 5,})}/>
                        </div>
                        <p className="text-sm text-gray-400 "> {props.votes} votes </p>
                    </div>
                    <p className="text-sm my-2 text-gray-700"> ₹{props.price} </p>
                    <div className="flex items-center">
                        <p id="des" className="w-8/12 text-sm truncate text-gray-700" > {props.description} </p>
                        <button id="rm-btn" onClick={readmore} className="text-sm"> read more </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center ">
                <button className="text-sm text-navcolor-300 font-semibold p-1 border border-navcolor-300 px-4 bg-navcolor-50 bg-opacity-50 rounded-lg "> ADD &nbsp; + </button>
                <p className={classNames("block text-2xs text-gray-500 relative top-0.5", {"hidden" : !props.isApplicable})}> customizable </p>
            </div>
        </div>
        </>
    )
};

export default FoodCard;