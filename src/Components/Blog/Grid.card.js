import React from "react";
import GridCard from "./GridCards";

const Grid = () => {

    const GridCardData = [
        {
            src:"https://images.unsplash.com/photo-1603554593710-89285666b691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            heading:"Getting familiar to the new normal!",
            feed:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis faucibus lorem. Pellentesque ac magna diam. Aliquam aliquet sollicitudin ex eu sodales. Nulla sit amet elit in leo posuere venenatis eget eu ex. ",
            author:"Arav"
        },
        {
            src:"https://images.unsplash.com/photo-1481689481678-374244adae6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", 
            heading:"Getting familiar to the new normal!",
            feed:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis faucibus lorem. Pellentesque ac magna diam. Aliquam aliquet sollicitudin ex eu sodales. Nulla sit amet elit in leo posuere venenatis eget eu ex. ",
            author:"Arav"
        },

    ];

    return (
        <>
        <div className="flex">
            {
                GridCardData.map((data) => (
                    <GridCard {...data} />
                ))
            }
        </div>
        </>
    )
};

export default Grid;