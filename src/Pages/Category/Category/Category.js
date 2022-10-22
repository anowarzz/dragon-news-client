import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Category = () => {

const news = useLoaderData();
console.log(news);

    return (
        <div>
        <h4>This is category has news: {news.length} </h4>
        </div>
    );
};

export default Category;