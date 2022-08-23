import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Components
import MenuListContainer from "./menuCategoryContainer"; 
import OnlineOrderHeader from "./Online-orderHeader";
import FoodListCards from "./FoodListCards";

const OrderOnline = () => {
    return (
        <>
        <div className="mx-2 lg:mx-24 my-8 flex">
            <aside style={{height: "fit-content"}} className="hidden md:flex flex-col mr-8 border-r border-gray-300 mt-4 sticky top-6 w-3/12 cursor-pointer">
                <MenuListContainer />
            </aside>
            <div className="w-full md:w-3/4 ">
                <OnlineOrderHeader />
                <div className="bg-blue-500 rounded-lg text-white mt-8 ">
                    <div className="flex items-center justify-between mx-4 py-2 " >
                        <div className="flex items-center gap-3 "> 
                            <AiOutlineCheckCircle className="w-5 h-5" />
                            <p className="flex items-center gap-2"> Delivering to: <p className="font-semibold"> Madurai </p> </p>
                        </div>
                        <h3 className="text-sm font-semibold"> CHANGE </h3>
                    </div>
                </div>
                <label className="flex items-center gap-2 my-3 mx-2">
                    <input type="checkbox" className="w-4 h-4" name="check" />
                    <span className="text-gray-500"> veg only </span>
                </label>
                <FoodListCards />
            </div>
        </div>
        </>
    )
};

export default OrderOnline;