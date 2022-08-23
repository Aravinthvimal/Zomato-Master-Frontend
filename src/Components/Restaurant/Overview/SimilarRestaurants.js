import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./RestaurantArrows";
import SimilarRestaurantsGrid from "./SimilarRestaurantsGrid";

const SimilarRestaurants = () => {

    const settings = {
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true
    }

    const settingsLg = {
        infinite: true,
        autoplay: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const SimilarRestaurantsData = [
        {
            src: "https://b.zmtcdn.com/data/pictures/8/3000378/93f0ba995d6eddf1eede9592b02dcd9c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            name: "Meat And Eat",
            diningRatings: 4.0,
            deliveryRatings: 4.0,
            types: "Burger, Fast Food, Desserts, Beverages",
            isLarge: false
        },
        {
            src: "https://www.sparrowsph.my/image/cache/data/theme/blog/marrybrown--new_260820202448-1200x800_0.jpg",
            name: "MarryBrown",
            diningRatings: 3.7,
            deliveryRatings: 3.5,
            types: "Burger, Sandwich, Desserts, Fast Foods",
            isLarge: false
        },
        {
            src: "https://lh3.googleusercontent.com/Cz-5NXqKWxzPofzrXZQj7z2U1w2KHGLeTWJvL-dl3lHskzdvoyuKVaDJ9t_y09qga9xjDh_ist99JdFUTb1bc6LNFdwj=w256",
            name: "Heaven's Park",
            diningRatings: 4.1,
            deliveryRatings: 3.9,
            types: "Fast Foods, Burger, Pizza, Wraps",
            isLarge: false
        },
        {
            src: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80",
            name: "House Of Sandwich",
            diningRatings: 3.9,
            deliveryRatings: 3.9,
            types: "Fast Foods, Burger, Pizza, Wraps",
            isLarge: false
        },
        {
            src: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80",
            name: "Oyalo Pizza",
            diningRatings: 3.8,
            deliveryRatings: 4.1,
            types: "Fast Foods, Pizza,",
            isLarge: false
        },
    ];

    return (
        <>
        <div className="hidden lg:block ml-24 w-10/12 ">
            <div className="mx-4"> <h3 className="text-2xl font-semibold my-3"> Similar Restaurants </h3> </div>
                <Slider {...settings}>
                {
                        SimilarRestaurantsData.map((data) => (
                        <SimilarRestaurantsGrid {...data} />
                    ))
                }
                </Slider>
        </div>
        <div className="mx-4"> <h3 className="md:hidden text-xl lg:text-2xl font-semibold"> Similar Restaurants </h3> </div>
        <div className="no-scroll max-h-full flex w-screen overflow-x-auto lg:hidden mt-4">
            {
                SimilarRestaurantsData.map((data) => (
                    <SimilarRestaurantsGrid {...data} />
                ))
            }
        </div>
        </>
    )
};

export default SimilarRestaurants;