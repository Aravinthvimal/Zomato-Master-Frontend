import React from "react";

import { BsSuitHeart } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

const FullImageCard = (props) => {
    return (
        <>
        <div className="relative rounded-lg">
            <img src={props.src} alt={props.alt} className="w-full h-96 object-fit object-cover rounded-lg " />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-900 w-full h-full opacity-60 rounded-lg "> </div>
        </div>
        <div className="relative -top-52 text-white mx-16 ">
            <h3 className="text-xl font-heroFont mb-4 "> {props.heading} </h3>
            <p> {props.feed} </p>
            <div className="flex justify-between mt-4">
                <p> Post By : {props.author} </p>
                <div className="flex items-center gap-8">
                    <button className="flex items-center gap-2 "> <BsSuitHeart /> Like </button>
                    <button className="flex items-center gap-2 "> <FaRegCommentDots /> Comment </button>
                </div>
            </div>
        </div>
        </>
    )
};

export default FullImageCard;