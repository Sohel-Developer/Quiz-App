import React from 'react';

const QuizIteam = ({ questionIteams }) => {
    // console.log(que);
    const quizIteam = questionIteams?.options;
    // console.log(quiz);
    const correct = questionIteams?.correctAnswer;

    const questionName = questionIteams?.question;


    const check = (q) => {
        if (correct === q) {
            alert('Right')
        }
        else {
            alert('Wrong')
        }
        // console.log(q);
    }
    return (
        <div className='border rounded m-4 p-2 '>
            <h1 className='text-2xl'>{questionName}</h1>
            <label htmlFor="my-modal" className="btn btn-xs modal-button">Correct Answare</label>

            <div>
                {
                    quizIteam.map((q) => <button
                        key={q}
                        onClick={() => check(q)}
                        className='btn btn-outline btn-primary m-2 '>{q}</button>)
                }
            </div>

            {/* Modal Is Open Click */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{correct}</h3>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>













        </div>








    );
};

export default QuizIteam;