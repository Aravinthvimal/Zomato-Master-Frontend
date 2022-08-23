import React from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";

const ReviewNav = () => {
    return (
        <>
        <div className="w-3/5 mx-24 pr-4 ">
            <h3 className="text-2xl my-2 mt-4 font-semibold"> KFC Reviews </h3>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6 text-lg">
                    <p> All Reviews (795) </p>
                    <AiFillCaretDown className="text-gray-500" />
                </div>
                <div className="flex items-center gap-4 text-lg">
                    <BsFilterLeft className="text-gray-700" />
                    <p> Newest First </p>
                    <AiFillCaretDown className="text-gray-500" />
                </div>
            </div>
        </div>
        </>
    )
};

export default ReviewNav;