import React from "react";
import Images from "./images";

const ImageGrid = () => {

    const ImageData = [
        {
            src: "https://b.zmtcdn.com/data/pictures/chains/8/18694278/0e79614ea14113b8b3d4b48574293d00.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/chains/8/18694278/1b882dcd1619f59feca4c34f9fe37709.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/d090a20f26f69d9dbeb0b5f88dd5b216.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/074f39d359586fb4fe38e6dddfdd99e5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/1820ae78d619e34ab89d39d69de39266.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/75c6c3647f9f0167e6c69694d32a2498.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/b6df7c3a62702b2e48207f401f4b3324.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/a92896b299e6ccbb627acd5b60a210f7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/e754f440502884d2973410aaf2dd5f17.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/06d663e67ebc8d787a0b85b246859ae9.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/bfd1b99a2594e8b55b7d215ef56bf2aa.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/b07bf71e29bf9dd4f76163c3c78f5bab.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/50818d4cad6a9a9875a99aff7a5ddaf2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/d7cc5b5a837e156c5b95fff0c698924b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/88a878fe2e5edca3f88b61402a2fe237.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/09b43395d94ab2dc848d2dab7309be56.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/389e14e3edc00ee6b51ebb2252818d9e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/c1a196e774c4e49f8facdf9e468ae855.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/8077cac381dc9efba39e9530435075c6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/cc30e77bb2eaefdd0a2ce430ff3569be.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/c2462fcc2c925c1632509c9508ac4778.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/3800d7f56a35227265e366b714daa62c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/367bee52299d4a1ea3f1951e3825d309.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/76dbe764262658c9c147ef14a3cf730d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/ca49bdac112b0c89ca2153915967ea6c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/pictures/3/18763223/9af427cf9ad83f24adc95d3f1ed51c88.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/reviews_photos/97d/ebfe4866f7c8a4a40ff4c49018c5397d_1536848986.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/reviews_photos/69f/f0eef81242755a9be5f14926a817969f_1599123278.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/reviews_photos/e54/cd55a67dbbc6de22101adfc8231dae54_1543426117.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            src: "https://b.zmtcdn.com/data/reviews_photos/82e/6dd9d6c82f3d8ff167effcbdf141182e_1539781063.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
    ];  

    return (
        <>
        <div className="w-11/12">
            <div className="mx-4 lg:mx-24 my-8 w-full">
                <div className="grid gap-2 lg:gap-4 grid-cols-3 lg:grid-cols-5">
                    {
                        ImageData.map((data) => (
                            <Images {...data} />
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
};

export default ImageGrid;