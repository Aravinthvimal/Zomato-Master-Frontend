import React from "react";
import { Link } from "react-router-dom";

const BlogNav = () => {
    return (
        <>
        <div className="relative">
            <div className="flex items-center my-3 mx-12 justify-between">
                <div><h3 className="text-4xl text-blogColor-500 tracking-wide font-heroFont"> Blogger </h3></div>
                <div className="flex z-40 gap-4 text-white font-semibold ">
                    <Link to={`/blog/123`}> HOME </Link>
                    <Link to={`/blog/123`}> FEED </Link>
                    <Link to={`/blog/123`}> ABOUT </Link>
                </div>
            </div>
        </div>
        </>
    )
};

export default BlogNav;