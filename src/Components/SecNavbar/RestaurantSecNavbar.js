import React, { useState } from "react";
import classnames from "classnames";
import { useLocation, Link, useParams } from "react-router-dom";
import ReviewModal from "../Restaurant/Reviews/ReviewModal";

// Icons
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineDirections } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

function Tab(props) {
  const { id } = useParams();
  return (
    <Link to={`/restaurant/${id}/${props.route}`}>

        <div
            className={classnames("text-gray-500 relative font-light ", {
            "text-red-500 font-semibold": props.isActive,
            })}
        >
        <h3 className="text-lg relative md:text-xl">{props.title}</h3>
        </div>
    </Link>
  );
};

function RestaurantSecNav(props) {
  const location = useLocation();

  const currentPath = location.pathname;

  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: currentPath.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: currentPath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: currentPath.includes("reviews"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: currentPath.includes("menu"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: currentPath.includes("photos"),
    },
  ];

  return (
    <>
    <div className="w-full">
      <div className="no-scroll hidden lg:flex items-center pt-10 pb-3 gap-20 overflow-x-scroll border-b-2 ml-24">
        {tabs.map((tab) => (
          <Tab {...tab} key={`123${tab.route}`} />
        ))}
      </div>
    </div>
    </>
  );
};

function MobileSecNav () {

  const [isOpen, setIsOpen] = useState(false)
  const openModel = () => setIsOpen(true)
  
  return (
    <>
    <div className="lg:hidden bg-white shadow-lg px-6 fixed bottom-0 z-40 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
      <a> 
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <div onClick={openModel} className="flex justify-center items-center flex-col py-3">
          <AiOutlineStar />
          Review
        </div>
      </a>

      <a href="https://goo.gl/maps/31GoKqxkAwTn22uVA" target="_blank"> 
        <div className="flex justify-center items-center flex-col py-3">
          <MdOutlineDirections />
          <p> Directions </p>
        </div>
      </a>
      
      <a href="tel:09597963608">
        <div classNam="flex justify-center items-center flex-col py-3"> 
          <BiPhoneCall />
          <p> Call </p>
        </div>
      </a>
      
    </div>
    </>
  )
}

function RestaurantTab() {
  return (
    <>
    <div className="">
      <RestaurantSecNav />
      <MobileSecNav />
    </div>
    </>
  )
}

export default RestaurantTab;