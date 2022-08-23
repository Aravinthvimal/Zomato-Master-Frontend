import React from "react";

//Components
import AllReviews from "./AllReviews";
import Ratings from "../Overview/Ratings.Restaurant";
import ContactCard from "../Overview/ContactCard";
import ReviewNav from "./ReviewNav";

const ReviewTab = () => {
    return (
        <>
        <ReviewNav />
        <div className="flex flex-row relative">
            <div className="flex flex-col w-8/12">
                <AllReviews />
            </div>
            <aside style={{height: "fit-content"}} className="rounded-xl shadow-lg border border-opacity-50 mr-28 mt-4 sticky top-2 px-3 w-3/12 ">
                <Ratings Allreview={true} />
            </aside>
        </div>
        </>
    )
};

export default ReviewTab;