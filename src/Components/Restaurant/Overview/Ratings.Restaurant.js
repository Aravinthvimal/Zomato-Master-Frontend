import React, { useState } from "react";

// Components
import ReviewModal from "../Reviews/ReviewModal";
import { AiFillStar } from "react-icons/ai";
import ReviewStars from "../Reviews/ReviewStars";

const Ratings = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const openModel = () => setIsOpen(true)

    return (
        <>
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className= {` ${props.Allreview ? "ml-0 w-full" : "ml-2 lg:ml-24 w-11/12 lg:w-9/12"}`}>
            <h3 className="lg:text-2xl text-xl font-semibold lg:font-normal lg:mt-8  lg:my-4 "> Rate your experience for </h3>
            <div className={`flex items-center text-lg my-4 ${props.Allreview ? "gap-10" : "gap-10 lg:gap-60" }`}>
                <label className="flex items-center gap-1">
                    <input type="radio" className="form-radio text-red-600" name="radio" checked />
                    <span className=""> Dining </span>
                </label>
                <label className="flex items-center gap-1">
                    <input type="radio" className="form-radio" name="radio" />
                    <span className=""> Delivery </span>
                </label>
            </div>
            <ReviewStars />
            <button onClick={openModel} className={`${props.Allreview ? "text-navcolor-300 mt-2 text-sm lg:text-lg" : "text-red-500 my-4 text-sm lg:text-lg"}`}> Write a Review </button>
            <h3 className={`${props.Allreview ? "hidden" : "text-lg lg:text-xl font-semibold lg:font-normal lg:text-2xl mt-4 lg:mt-8 mb-4"}`}> Review Highlights </h3>
            <div className={`${props.Allreview ? "flex gap-3 pb-8" : "text-gray-600 lg:text-black flex text-xs lg:text-base gap-3 pb-8 border-b"} `}>
                <button className={` ${props.Allreview ? "hidden" : "border border-gray-300 rounded-full py-1 px-3 lg:shadow-md"} `}> Amazing Food </button>
                <button className={` ${props.Allreview ? "hidden" : "border border-gray-300 rounded-full py-1 px-3 lg:shadow-md"} `}> Service </button>
                <button className={` ${props.Allreview ? "hidden" : "border border-gray-300 rounded-full py-1 px-3 lg:shadow-md"} `}> Value for Money </button>
                <button className={` ${props.Allreview ? "hidden" : "border border-gray-300 rounded-full py-1 px-3 lg:shadow-md"} `}> Quality </button>
            </div>
        </div>
        </>
    )
};

export default Ratings;