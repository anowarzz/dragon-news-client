import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';


const Category = () => {

 useTitle("Category")   
const categoryNews = useLoaderData();


    return (
        <div>
        <h4>This is category has news: {categoryNews.length} </h4>

        {
            categoryNews.map(news => <NewsSummaryCard key = {news._id}
            news = {news}/>)
        }
        </div>
    );
};

export default Category;