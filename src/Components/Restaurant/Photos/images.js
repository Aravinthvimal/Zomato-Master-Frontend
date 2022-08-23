import React from "react";

const Images = (props) => {
    return (
        <>
        <div className="w-full h-full overflow-hidden rounded-lg">
            <img src={props.src} alt="photos" className=" brightImage object-cover transform transition duration-500 hover:scale-105 rounded-lg" />
        </div>
        </>
    )
};

export default Images;