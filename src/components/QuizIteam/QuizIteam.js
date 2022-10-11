import React from 'react';

const QuizIteam = ({ questionIteams }) => {
    // console.log(que);
    const quizIteam = questionIteams?.options;
    // console.log(quiz);
    const correct = questionIteams?.correctAnswer;

    const questionName = questionIteams.question;


    const check = (q) => {
        if (correct === q) {
            alert('Right')
        }
        else {
            alert('Wrong')
        }
        console.log(q);
    }
    return (
        <div className='border rounded m-4 p-2 '>
            <h1 className='text-2xl'>{questionName}</h1>
            {
                quizIteam.map((q) => <button
                    key={q}
                    onClick={() => check(q)}
                    className='btn m-2 '>{q}</button>)
            }
        </div>
    );
};

export default QuizIteam;