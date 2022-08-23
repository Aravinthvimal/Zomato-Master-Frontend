import React, { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

const ReviewStars = (props) => {

    const heading1 = [
        "What did you not like? 🙁",
        "What was not upto the mark? 😐",
        "What was not upto the mark? 😐",
        "What did you like? 😃",
        "What did you love? 😍"
    ];

    const colors = [
        "bg-navcolor-400",
        "bg-navcolor-200",
        "bg-yellow-400",
        "bg-green-600",
        "bg-green-700"
    ];

    const rating_text = [
        "Horrible",
        "Bad",
        "Average",
        "Good",
        "Excellent"
    ];

    const [clicked, setClicked] = useState([false, false, false, false, false]);
  
    const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
        if (i <= index) clickStates[i] = true;
        else clickStates[i] = false;
    }

    setClicked(clickStates);

    window.value = index;
  };

    return (
        <>
        <div className="flex items-center gap-2 ">
            <div className="flex gap-1">
                <button onClick={(e) => handleStarClick(e, 0)}
                    className={clicked[0] ? `flex items-center gap-0.5 text-sm text-white font-semibold rounded-lg px-1.5 py-0.5 ${colors[window.value]}` : "flex items-center gap-0.5 text-sm text-gray-400 font-semibold border border-gray-400 rounded-lg px-1"}>
                    1 <AiFillStar className="w-3" />
                </button>

                <button onClick={(e) => handleStarClick(e, 1)}
                    className={clicked[1] ? `flex items-center gap-0.5 text-sm text-white font-semibold rounded-lg px-1.5 py-0.5 ${colors[window.value]}` : "flex items-center gap-0.5 text-sm text-gray-400 font-semibold border border-gray-400 rounded-lg px-1"}>
                    2 <AiFillStar className="w-3" />
                </button>

                <button onClick={(e) => handleStarClick(e, 2)}
                    className={clicked[2] ? `flex items-center gap-0.5 text-sm text-white font-semibold rounded-lg px-1.5 py-0.5 ${colors[window.value]}` : "flex items-center gap-0.5 text-sm text-gray-400 font-semibold border border-gray-400 rounded-lg px-1"}>
                    3 <AiFillStar className="w-3" />
                </button>
                
                <button onClick={(e) => handleStarClick(e, 3)}
                    className={clicked[3] ? `flex items-center gap-0.5 text-sm text-white font-semibold rounded-lg px-1.5 py-0.5 ${colors[window.value]}` : "flex items-center gap-0.5 text-sm text-gray-400 font-semibold border border-gray-400 rounded-lg px-1"}>
                    4 <AiFillStar className="w-3"  />
                </button>

                <button onClick={(e) => handleStarClick(e, 4)}
                    className={clicked[4] ? `flex items-center gap-0.5 text-sm text-white font-semibold rounded-lg px-1.5 py-0.5 ${colors[window.value]}` : "flex items-center gap-0.5 text-sm text-gray-400 font-semibold border border-gray-400 rounded-lg px-1"}>
                    5 <AiFillStar className="w-3" />
                </button>
            </div>
            <p className="text-gray-600"> {rating_text[window.value]} </p>
        </div>
        <div className={`flex flex-col gap-4 mt-4 ${props.isModal && window.value >= 0 ? "block" : "hidden"}`}>
            <h3> {heading1[window.value]} </h3>
            <input type="text" placeholder="search tag or select from below" className="w-full mx-auto p-2 border border-gray-300 rounded-md outline-none text-gray-300" />
            <div className="flex items-center gap-3 ">
                <section className="lg:flex lg:gap-2 w-11/12">
                    <button className="border border-gray-300 p-1 px-3 text-sm lg:text-base text-gray-700 rounded-full mr-2 mb-2 lg:m-0 "> fries </button>
                    <button className="border border-gray-300 p-1 px-3 text-sm lg:text-base text-gray-700 rounded-full mr-2 mb-2 lg:m-0"> service </button>
                    <button className="border border-gray-300 p-1 px-3 text-sm lg:text-base text-gray-700 rounded-full mr-2 mb-2 lg:m-0"> hygiene </button>
                    <button className="border border-gray-300 p-1 px-3 text-sm lg:text-base text-gray-700 rounded-full mr-2 mb-2 lg:m-0"> experience </button>
                    <button className="border border-gray-300 p-1 px-3 text-sm lg:text-base text-gray-700 rounded-full mr-2 mb-2 lg:m-0"> price </button>
                    <button className="border border-gray-300 p-1 px-3 text-sm lg:text-base text-gray-700 rounded-full mr-2 mb-2 lg:m-0"> wings </button>
                </section>
            </div>
            <div className="border p-4 shadow-xl rounded-lg ">
                <p className="text-gray-500 "> Add Photos </p>
                <div className="w-full h-48 relative">
                    <div className="border border-gray-300 border-dotted absolute inset-0 w-full h-full" /> 
                    <div className="flex flex-col items-center inset-y-1/4 z-20 w-full h-full text-center">
                        <p className="text-gray-500 mt-4 mb-8 "> Drag & drop to upload or <u className="text-gray-700"> Browse </u> </p>
                        <div className="border border-gray-300 border-dashed p-5"><RiImageAddLine className="w-12 h-12 text-gray-300 " /></div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 w-full">
                <img src="https://b.zmtcdn.com/images/user_avatars/cupcake.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="user-dp" 
                className="mt-4 w-12 rounded-full" />
                <div className="w-full">
                    <input type="text" placeholder="Write your Review" className="w-full relative top-3 p-2 border border-gray-300 text-gray-300 rounded-md outline-none " />
                    <p className="relative top-3 text-2xs text-gray-300 float-right"> Tell us more about your overall experience. </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default ReviewStars;