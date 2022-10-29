import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
useTitle('Home')

const allNews = useLoaderData();

    return (
        <div>
            <h2>Dragon News : {allNews.length} </h2>
        {
            allNews.map(news => <NewsSummaryCard key={news._id}
            news={news}/>)
        }

        </div>
    );
};

export default Home;