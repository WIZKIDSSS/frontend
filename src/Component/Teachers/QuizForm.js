import React, { useState } from 'react';
import { motion } from "framer-motion";
import '../css/QuizForm.css'
const QuizForm = () => {
    const [unit, setUnit] = useState('');
    const [topic, setTopic] = useState('');
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handlePostQuiz = async () => {
        try {
            // Construct the quiz object to be sent to the server
            const quizData = {
                unit,
                topic,
                question,
                options,
                correctAnswer,
            };
            // Send a POST request to the Flask server to store the quiz in MongoDB
            const response = await fetch('http://your-flask-api-endpoint/quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(quizData),
            });
            if (response.ok) {
                console.log('Quiz posted successfully!');
                // Optionally, reset form fields after successful post
                setUnit('');
                setTopic('');
                setQuestion('');
                setOptions(['', '', '', '']);
                setCorrectAnswer('');
            } else {
                console.error('Failed to post quiz');
            }
        } catch (error) {
            console.error('Error posting quiz:', error);
        }
    };


    return (
        <div className='quiz '>

            <div className="container mt-5 ">
                <motion.h2
                    className="mb-4"
                    style={{ textAlign: 'center', paddingTop: '15%', color: 'brown', fontSize: '4em', paddingLeft: '-5%' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 7 }}
                >
                    Create Quiz
                </motion.h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label" style={{ color: 'red', marginBottom: '10px', display: 'block', fontWeight: 'bold' }}>Unit:</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ borderRadius: '5px', borderColor: 'darkgoldenrod', padding: '5px', margin: '10px', boxShadow: '0 0 5px lightgray', backgroundColor: 'transparent', fontWeight: 'bold' }}
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            placeholder="Enter unit"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" style={{ color: 'red', marginBottom: '10px', display: 'block', fontWeight: 'bold' }}>Topic:</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ borderRadius: '5px', borderColor: 'darkgoldenrod', padding: '5px', margin: '10px', boxShadow: '0 0 5px lightgray', backgroundColor: 'transparent', fontWeight: 'bold' }}
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter topic"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" style={{ color: 'red', marginBottom: '10px', display: 'block', fontWeight: 'bold'}}>Question:</label>
                        <textarea
                            className="form-control"
                            style={{ borderRadius: '5px', borderColor: 'darkgoldenrod', padding: '5px', margin: '10px', boxShadow: '0 0 10px lightgray', backgroundColor: 'transparent', fontWeight: 'bold' }}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Enter question"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" style={{ color: 'red', marginBottom: '10px', display: 'block', fontWeight: 'bold' }}>Options:</label>
                        {options.map((option, index) => (
                            <div key={index} className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{ borderRadius: '5px', borderColor: 'darkgoldenrod', padding: '5px', margin: '10px', boxShadow: '0 0 5px lightgray', backgroundColor: 'transparent', fontWeight: 'bold' }}
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                    placeholder={`Option ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" style={{ color: 'red', marginBottom: '10px', display: 'block', fontWeight: 'bold' }}>Correct Answer:</label>
                        <input
                            type="text"
                            className="form-control"
                            style={{ borderRadius: '5px', borderColor: 'darkgoldenrod', padding: '5px', margin: '10px', boxShadow: '0 0 5px lightgray', backgroundColor: 'transparent', color: 'black', fontWeight: 'bold' }}
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                            placeholder="Enter correct answer"
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{ backgroundColor: 'darkgoldenrod', borderColor: 'darkgoldenrod', borderRadius: '5px', padding: '5px 15px', color: 'white', fontWeight: 'bold' }}
                        onClick={handlePostQuiz}
                    >
                        Post Quiz
                    </button>
                </form>
            </div>

        </div>
    );
};

export default QuizForm;
