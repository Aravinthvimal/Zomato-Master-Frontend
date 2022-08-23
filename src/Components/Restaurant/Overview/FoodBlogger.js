import React from "react";

import { AiFillCaretRight } from "react-icons/ai";

const FoodBlogger = () => {
    return (
        <>
        <div className="hidden lg:block w-9/12 border-b ml-24">
            <div className="flex justify-between items-center bg-gray-100 rounded-lg mt-12 mb-4 p-3">
                <div>
                    <h3 className="text-2xl font-semibold mb-2 "> Are you a food Blogger? </h3>
                    <div className="flex items-center text-sm text-red-500"> <p> Add a Zomato spoonback to your blog </p> <AiFillCaretRight /> </div>
                </div>
                <button className="flex items-center bg-navcolor-400 gap-1 rounded-lg text-sm text-white p-2" > Get Restaurant Widget <AiFillCaretRight /> </button>
            </div>
        </div>
        </>
    )
};

export default FoodBlogger;