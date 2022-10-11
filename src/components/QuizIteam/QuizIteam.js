import React from 'react';

const QuizIteam = ({ que }) => {
    // console.log(que);
    // const quiz = que?.options;
    // console.log(quiz);
    // const correct = que?.correctAnswer;


    // const check = (q) => {
    // if (correct === q) {
    //     alert('Right')
    // }
    // else {
    //     alert('Wrong')
    // }
    // console.log(q);
    // }
    return (
        <div className='border rounded m-4 p-2 '>
            <h1 className='text-2xl'>hello</h1>
            {/* {
                quiz.map((q) => <button
                    key={q}
                    onClick={() => check(q)}
                    className='btn m-2 '>{q}</button>)
            } */}
        </div>
    );
};

export default QuizIteam;