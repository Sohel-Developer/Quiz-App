import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsCard from '../TopicsCard/TopicsCard';
import './Header.css'
import headerImage from '../../image/headerImage.jpg'

const Header = () => {
    const topics = useLoaderData()
    const alltopics = topics.data;


    return (
        <div>

            <div className="carousel w-full mb-12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={headerImage} className="w-full" />

                </div>
            </div>


            <div className=' grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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