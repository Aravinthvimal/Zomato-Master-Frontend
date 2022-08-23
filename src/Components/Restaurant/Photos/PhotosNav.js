import React from "react";

const PhotosNav = () => {
    return (
        <>
        <div className="mx-4 lg:mx-24 mt-8 my-4 lg:my-8">
            <h3 className="text-xl lg:text-2xl font-semibold my-3"> KFC Photos </h3>
            <div className="flex items-center gap-3">
                <button className="text-sm lg:text-base p-1 px-4 text-white bg-navcolor-400 rounded-md"> All (34) </button>
                <button className="text-sm lg:text-base p-1 px-4 border border-gray-400 text-gray-400 rounded-md"> Safety Practices (24) </button>
                <button className="text-sm lg:text-base p-1 px-4 border border-gray-400 text-gray-400 rounded-md"> Food (7) </button>
            </div>
        </div>
        </>
    )
};

export default PhotosNav;