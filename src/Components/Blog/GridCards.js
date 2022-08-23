import React from "react";

import { BsSuitHeart } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

const GridCard = (props) => {
    return (
        <>
        <div className="relative w-1/2 h-screen border mx-3 rounded-lg shadow-lg">
            <img src={props.src} alt={props.alt} className="h-2/3 w-full object-fit object-cover rounded-lg" />
            <div className="p-3">
                <h3 className="text-lg font-heroFont mb-3"> {props.heading} </h3>
                <p> {props.feed} </p>
                <div className="absolute flex items-center justify-between inset-x-0 bottom-3 mx-6">
                    <p> Post By : {props.author} </p>
                    <div className="flex items-center gap-8 ">
                        <button className="flex items-center gap-2 "> <BsSuitHeart /> Like </button>
                        <button className="flex items-center gap-2 "> <FaRegCommentDots /> Comment </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default GridCard;