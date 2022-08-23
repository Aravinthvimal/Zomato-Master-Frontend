import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCloseOutline, IoCompassOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const OnlineOrderHeader = () => {
    return (
        <>
        <div>
            <div className="w-full flex items-center justify-between">
                <h3 className="text-2xl font-semibold "> Order Online </h3>
                <div className="flex items-center text-lg items-center justify-between mx-4 text-gray-400 p-2 border bprder-gray-300 rounded-md ">
                    <div className="flex items-center gap-3 ">
                        <AiOutlineSearch />
                        <input type="text" placeholder="Search within menu" className="outline-none" />
                    </div>
                    <IoCloseOutline />
                </div>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
                <IoCompassOutline /> 
                <h6> Live track your order </h6>
                <p> | </p>
                <IoMdTime />
                <h6> 32 min </h6>
            </div>
        </div>
        </>
    )
};

export default OnlineOrderHeader;