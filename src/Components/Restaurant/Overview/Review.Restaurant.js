import React from "react";

import { GoPrimitiveDot } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { MdOutlineComment } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";

const Reviews = (props) => {
    return (
        <>
        <div className="mt-4 lg:mt-8 pb-4 border-b ">
            <div className="flex items-center justify-between">
                <div className="flex items-center mb-4 ">
                    <img src={props.src} alt={props.name} className="w-12 h-12 object-center object-cover rounded-full" />
                    <div className="flex ml-3 lg:ml-5 flex-col">
                        <div> <p className="lg:text-lg font-semibold"> {props.name} </p> </div>
                        <div className="relative text-gray-400 flex items-center gap-1 text-sm lg:text-base"> <p> {props.reviews} reviews </p> <GoPrimitiveDot /> <p> {props.followers} Followers </p> </div>
                    </div>
                </div>
                <button className="border border-navcolor-200 py-1.5 px-3 lg:p-3 text-red-500 rounded-md text-xs lg:text-base"> Follow </button>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-4"> 
                    <p className={`text-white font-semibold text-xs lg:text-sm py-0.5 lg:py-0 px-1 flex items-center gap-0.5 lg:gap-1 rounded-md ${props.ratings < 2.5 ? "bg-navcolor-300" : "bg-ratingscolor-700"}`}> {props.ratings} <AiFillStar className="w-3 h-3" /> </p>
                    <p className="text-xs lg:text-sm"> DELIVERY </p> <p className="text-gray-400 text-xs lg:text-sm ml-2"> {props.time} </p> 
                </div>
                <p className="lg:text-lg text-gray-600 mb-2 "> {props.reviewText} </p>
                <div className="text-sm lg:text-base flex items-center text-gray-400 mb-4 "> {props.helpful} Votes for helpful, {props.comments} Comments </div>
                <div className="text-sm lg:text-base flex items-center gap-5">
                    <button className="flex items-center text-gray-400 gap-1"> <FiThumbsUp /> Helpful </button>
                    <button className="flex items-center text-gray-400 gap-1"> <MdOutlineComment /> Comment </button>
                    <button className="flex items-center text-gray-400 gap-1"> <RiShareForwardLine /> Share </button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Reviews;