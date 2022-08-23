import React from "react";

import { BsSuitHeart } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

const LeftImageCard = (props) => {
    return (
        <>
        <div className="flex border shadow-lg my-8 rounded-lg ">
            <img src={props.src} alt={props.alt} className="w-1/2 h-full object-fit object-cover rounded-lg " />
            <div className="relative p-2 pt-8 px-8">
                <h3 className="text-lg font-heroFont mb-4 "> {props.heading} </h3>
                <p className="line-clamp-5"> {props.feed} </p>
                <div className="absolute flex justify-between px-8 mt-4 inset-x-0 bottom-3">
                    <p> Post By : {props.author} </p>
                    <div className="flex items-center gap-8">
                        <button className="flex items-center gap-2 "> <BsSuitHeart /> Like </button>
                        <button className="flex items-center gap-2 "> <FaRegCommentDots /> Comment </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default LeftImageCard;