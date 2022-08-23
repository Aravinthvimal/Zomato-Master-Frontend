import React from "react";

import BlogNav from "./BlogNav";
import HeroText from "./BlogText";
import image from "./hero.png";

const BlogHero = () => {
    return (
        <>
        <div >
            <div className="relative h-screen ">
                <img src="https://images.unsplash.com/photo-1591290950068-40b9b598e6fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="heroImage" className="w-full h-full object-fit object-cover backdrop-filter backdrop-opacity-80 " /> 
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-900 w-full h-full opacity-80 "> </div>
                <div className="absolute z-30 top-0">
                    <img src={image} className="" />
                </div>
                <div className="relative -top-full">
                    <BlogNav />
                </div>
                <div className="relative -top-2/3">
                    <HeroText />
                </div>
            </div>
        </div>
        </>
    )
};

export default BlogHero;