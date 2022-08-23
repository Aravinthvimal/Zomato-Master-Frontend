import React, { Component } from "react";
import { Route } from "react-router-dom";

// Layout
import BlogLayout from "../Layout/Blog.layout";

const BlogHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route 
                {...rest}
                component = {(props) => (
                    <BlogLayout>
                        <Component {...rest} />
                    </BlogLayout>
                )}
            />
        </>
    );
};

export default BlogHOC;