import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsCard from '../TopicsCard/TopicsCard';
import './Header.css'

const Header = () => {
    const topics = useLoaderData()
    const alltopics = topics.data;


    return (
        <div>
            <div className='alltopic'>
                {
                    alltopics.map((topic) => <TopicsCard
                        key={topic.id}
                        topic={topic}
                    ></TopicsCard>)
                }
            </div>
        </div>
    );
};

export default Header;