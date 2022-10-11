import React from 'react';

const TopicsCard = ({ topic, startquiz }) => {
    const { name, logo, id } = topic
    return (
        <div className="  card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => startquiz(id)}>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default TopicsCard;