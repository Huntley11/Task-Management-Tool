import React from 'react';
import HomeCard from './HomeCard'
import NewCard from './NewCard'


const Home = () => {
    return (
    <>
        <div>
            <HomeCard
                title='Project Name'
                imageUrl='https://i.redd.it/osfi2ccuar131.jpg'
                body='Example project!'
            />
            <NewCard />
        </div>
    </>);
};

export default Home;
