import React from "react";
import { Link, useParams } from "react-router-dom";
import Reviews from "./Review.Restaurant";

import { AiFillCaretRight } from "react-icons/ai";


const ReviewGrid = () => {

    const { id } = useParams();

    const ReviewData = [
        {
            src: "https://b.zmtcdn.com/data/user_profile_pictures/9bc/05cf82f42f8a2b4b384539126861b9bc.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "Jayaprakash Jayachandran",
            reviews: 18,
            followers: 1,
            ratings: 5,
            time: "16 hours",
            reviewText: "Its a real finger licking good",
            helpful: 0,
            comments: 0
        },
        {
            src: "https://b.zmtcdn.com/data/user_profile_pictures/2be/2ed555f07f63d6bfd883c73ff4d192be.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "Amway World",
            reviews: 1,
            followers: 0,
            ratings: 2,
            time: "yesterday",
            reviewText: "",
            helpful: 0,
            comments: 0
        },

    ];

    return(
        <>
        <div className="flex flex-col lg:w-9/12 mx-2 lg:ml-24">
            {
                ReviewData.map((data) => (
                    <Reviews {...data} />
                ))
            }
            <Link to={`/restaurant/${id}/reviews`}>
                <button className="lg:text-base text-sm flex items-center gap-1 text-navcolor-300 my-2 w-max "> View all reviews <AiFillCaretRight className="relative top-0.5" /> </button>
            </Link>
        </div>
        </>
    )
};

export default ReviewGrid;