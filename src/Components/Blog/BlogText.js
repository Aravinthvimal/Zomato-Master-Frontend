import React from "react";
import { MdOutlineAdd } from "react-icons/md";

const HeroText = () => {
    return (
        <>
        <div className="ml-32">
            <h3 className="text-4xl font-heroFont text-blogColor-500 my-2"> Dirty Jean Blogs </h3>
            <p className="text-white w-2/5 mb-12"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse sit amet tincidunt tortor. 
                Donec accumsan erat quis tellus dictum tempus. 
                Nam eleifend ex nec diam euismod venenatis. 
                Praesent ut ligula eu justo rutrum bibendum. 
            </p>
            <div className="relative z-50">
                <button className="flex items-center gap-4 bg-white font-semibold p-2 px-4"> Add new Blog <MdOutlineAdd /> </button>
            </div>
        </div>
        </>
    )
};

export default HeroText;