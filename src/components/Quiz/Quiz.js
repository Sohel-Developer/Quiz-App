import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizIteam from '../QuizIteam/QuizIteam';

const Quiz = () => {
    const params = useParams()
    const id = params.id;

    const [quiz, setQuiz] = useState({})

    const { name, total, questions } = quiz;


    const url = `https://openapi.programming-hero.com/api/quiz/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setQuiz(data.data))
    }, [])

    // console.log(quiz);
    console.log(questions);


    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h2>{total}</h2>


                <div>
                    {
                        questions?.map((questionIteams, indexId) => <QuizIteam
                            key={indexId}
                            questionIteams={questionIteams}></QuizIteam>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;