import React from 'react';
import { Link } from 'react-router-dom';

const TopicsCard = ({ topic }) => {

    const { name, logo, id } = topic


    return (
        <div className="  card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`quiz/${id}`}>
                        <button className="btn btn-primary">Start Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopicsCard;