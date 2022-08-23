import React from "react";
import FoodCard from "./FoodCard";

const FoodListCards = () => {

    const TEDFoodData = [
        {
            src:"https://b.zmtcdn.com/data/dish_photos/6ab/a3c7b0eb3df198b2023ab48ea7c936ab.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
            name:"Stay Home Bucket",
            ratings: 3,
            votes:"39",
            price:"748.57",
            description:"Save 21% & enjoy 4pc Hot & Crispy Chicken, 4 Hot Wings, 6 chicken strips & 2 delicious dips [serves 3]",
            isApplicable:false
        },
    ];

    return (
        <>
        <div className="">
            <div>
                <div className="sticky top-0 text-2xl font-semibold mb-4 bg-white p-2 w-full "> Today's Exclusive Dishes </div>
                <div id="TED" className="border-b border-gray-300 pb-8">
                    {
                        TEDFoodData.map((data) => (
                            <FoodCard {...data} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="sticky top-0 text-2xl font-semibold mb-4 bg-white p-2 w-full "> Recommended </div>
                <div id="recommended" className="border-b border-gray-300 pb-8">
                    {
                        TEDFoodData.map((data) => (
                            <FoodCard {...data} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="sticky top-0 text-2xl font-semibold mb-4 bg-white p-2 w-full "> Weekend Deals </div>
                <div id="weekend-deals" className="border-b border-gray-300 pb-8">
                    {
                        TEDFoodData.map((data) => (
                            <FoodCard {...data} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="sticky top-0 text-2xl font-semibold mb-4 bg-white p-2 w-full "> Stay Home Specials </div>
                <div className="border-b border-gray-300 pb-8">
                    {
                        TEDFoodData.map((data) => (
                            <FoodCard {...data} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="sticky top-0 text-2xl font-semibold mb-4 bg-white p-2 w-full "> Big Save Combos </div>
                <div id="BSC" className="border-b border-gray-300 pb-8">
                    {
                        TEDFoodData.map((data) => (
                            <FoodCard {...data} />
                        ))
                    }
                </div>
            </div>
        </div>
        
        </>
    )
};

export default FoodListCards;