import React from "react";
import Reviews from "../Overview/Review.Restaurant";

const AllReviews = () => {

    const ReviewData = [
        {
            src: "https://b.zmtcdn.com/data/user_profile_pictures/9bc/05cf82f42f8a2b4b384539126861b9bc.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "Jayaprakash Jayachandran",
            reviews: 18,
            followers: 1,
            ratings: 5,
            time: "16 hours ago",
            reviewText: "Its a real finger licking good",
            helpful: 0,
            comments: 0
        },
        {
            src: "https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "Kethaarini Velshankar",
            reviews: 1,
            followers: 0,
            ratings: 5,
            time: "yesterday",
            helpful: 0,
            comments: 0
        },
        {
            src: "https://b.zmtcdn.com/images/user_avatars/wine_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "Manish Jha",
            reviews: 1,
            followers: 0,
            ratings: 1,
            time: "yesterday",
            helpful: 0,
            comments: 0
        },
        {
            src: "https://b.zmtcdn.com/data/user_profile_pictures/3e8/41e9ca4dfdcfa606f68d846fc28ba3e8.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "Jayabharathi Kumar",
            reviews: 1,
            followers: 0,
            ratings: 1,
            time: "3 days ago",
            helpful: 0,
            comments: 0
        },
        {
            src: "https://b.zmtcdn.com/data/user_profile_pictures/b48/b134d0b2634b690bf5e999e2d7f69b48.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "VAISHNAVI C.",
            reviews: 1,
            followers: 0,
            ratings: 1,
            time: "3 days ago",
            reviewText: "missing items",
            helpful: 0,
            comments: 0
        },
        {
            src: "https://b.zmtcdn.com/data/user_profile_pictures/ff2/8af569e6150a713b8c3c92159dc13ff2.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A",
            name: "Gokul Vellaian",
            reviews: 3,
            followers: 20,
            ratings: 1,
            time: "4 days ago",
            helpful: 0,
            comments: 0
        },
    ];

    return (
        <>
        <div className="flex flex-col w-10/12 ml-24">
            {
                ReviewData.map((data) => (
                    <Reviews {...data} />
                ))
            }
        </div>
        </>
    )
};

export default AllReviews