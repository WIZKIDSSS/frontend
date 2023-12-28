import React, { useState } from 'react';

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
    <div className="container mt-5">
      <h2 className="mb-4">Create Quiz</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Unit:</label>
          <input
            type="text"
            className="form-control"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Topic:</label>
          <input
            type="text"
            className="form-control"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Question:</label>
          <textarea
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Options:</label>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                className="form-control"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label">Correct Answer:</label>
          <input
            type="text"
            className="form-control"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePostQuiz}
        >
          Post Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
