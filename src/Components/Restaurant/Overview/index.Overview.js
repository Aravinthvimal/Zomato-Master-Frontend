import React from "react";

// Components
import Menu from "./Menu.restaurant";
import OverviewGrid from "./OverviewInfoGrid";
import SponsorsGrid from "./SponsorsGrid";
import SimilarRestaurants from "./SimilarRestaurants";
import FoodBlogger from "./FoodBlogger";
import Ratings from "./Ratings.Restaurant";
import ReviewGrid from "./ReviewGrid";
import ContactCard from "./ContactCard";

const Overview = () => {
    return (
        <>
        <div className="flex flex-row relative">
            <div className="flex flex-col w-screen lg:w-8/12">
                <div className="">
                    <Menu isMenu={true} />
                    <div className="md:hidden mb-4 mx-2 relative top-60">
                        <ContactCard />
                    </div>
                    <OverviewGrid />
                    <SponsorsGrid />
                </div>
                <SimilarRestaurants />
                <div className="">
                    <FoodBlogger />
                    <Ratings Allreview={false} />
                    <ReviewGrid />
                </div>
            </div>
            <aside style={{height: "fit-content"}} className="hidden md:block rounded-xl shadow-lg border border-opacity-50 mr-28 mt-4 sticky top-2 py-10 px-3 w-3/12 ">
                <ContactCard />
            </aside>
        </div>
        </>
    )
};

export default Overview;