import React from "react";

// Components
import BlogHero from "../Components/Blog/BlogHero";
import FullImageCard from "../Components/Blog/fullImageCard";
import LeftImageCard from "../Components/Blog/leftImageCard";
import Grid from "../Components/Blog/Grid.card";


const BlogPage = () => {

    return (
        <>
        <BlogHero />
        <h3 className="text-3xl font-heroFont text-gray-700 flex justify-center my-4 mt-20 "> Our Blogs </h3>
        <p className="text-lg text-gray-700 flex justify-center mb-12 "> “Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.” </p>
        <div className="mx-32 ">
            <LeftImageCard 
                src="https://images.unsplash.com/photo-1596496050755-c923e73e42e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80" 
                heading="Getting familiar to the new normal!"
                feed="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis faucibus lorem. Pellentesque ac magna diam. Aliquam aliquet sollicitudin ex eu sodales. Nulla sit amet elit in leo posuere venenatis eget eu ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  "
                author="Arav"
            />
            <FullImageCard 
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                heading="Getting familiar to the new normal!"
                feed="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis faucibus lorem. Pellentesque ac magna diam. Aliquam aliquet sollicitudin ex eu sodales. Nulla sit amet elit in leo posuere venenatis eget eu ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  "
                author="Arav"
            />
            <Grid />
            <LeftImageCard 
                src="https://images.unsplash.com/photo-1615482869901-741464444488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=860&q=80" 
                heading="Getting familiar to the new normal!"
                feed="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis faucibus lorem. Pellentesque ac magna diam. Aliquam aliquet sollicitudin ex eu sodales. Nulla sit amet elit in leo posuere venenatis eget eu ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  "
                author="Arav"
            />
        </div>
        <div className="my-40" />
        </>
    )
};

export default BlogPage;