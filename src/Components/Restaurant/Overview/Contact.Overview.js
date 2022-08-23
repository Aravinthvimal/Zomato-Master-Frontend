import React from "react";

import { IoMdCopy } from "react-icons/io";
import { MdDirections } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";

const Contact = (props) => {
    return (
        <>
        <div className="flex flex-col gap-1 lg:gap-2">
            <h3 className="text-lg lg:text-xl"> Call </h3>
            <a href="tel:09597963608"> <p className="lg:text-lg text-red-400 mb-2"> {props.mobile} </p> </a>
            <h3 className="text-lg lg:text-xl"> Direction </h3>
            <img src="https://maps.zomato.com/php/staticmap?center=9.9237970464,78.1485236809&maptype=zomato&markers=9.9237970464,78.1485236809,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
            alt="location" className="w-full h-40 object-center object-cover" />
            <p className="lg:text-lg text-gray-500 mb-2"> {props.address} </p>
            <div className="lg:text-base text-sm flex items-center gap-4 ">
                <button id="copyButton" className="flex items-center gap-1 border rounded-lg p-1 px-2 text-gray-500" 
                onClick={() => {navigator.clipboard.writeText(`${props.address}`); document.getElementById("copy").innerHTML = "Copied!"; document.getElementById("copyButton").className = "flex items-center gap-1 border rounded-lg p-1 px-2 text-gray-500 focus:bg-green-100 "}}  > 
                    <IoMdCopy className="text-gray-500 w-5 h-5" /> 
                    <p id="copy"> Copy </p>
                </button>
                <button className="flex items-center gap-1 border rounded-lg p-1 px-2 text-gray-500"> <a className="flex items-center gap-1" href="https://goo.gl/maps/31GoKqxkAwTn22uVA" target="_blank"> <MdDirections className="text-red-500 w-5 h-5" /> Direction </a> </button>
            </div>
            <p className="flex items-center gap-1 text-red-400 mt-2 text-xs lg:text-sm "> See all {props.outlets} KFC outlets in Madurai <AiFillCaretRight /> </p>
        </div>
        </>
    )
};

export default Contact;