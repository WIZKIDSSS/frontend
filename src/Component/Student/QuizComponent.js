import React, { useState, useEffect } from 'react';
import '../css/QuizComponent.css';

const QuizComponent = ({ unit, topic }) => {
  const [quizData, setQuizData] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Fetch quiz data from the backend
    fetch(`/quiz/${unit}/${topic}`)
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, [unit, topic]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleQuizSubmission = () => {
    // Submit user answer to the backend
    fetch('/submit-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question_id: quizData.id, // Adjust based on your data structure
        selected_option: selectedOption,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update score based on the response
        if (data.correct) {
          setScore((prevScore) => prevScore + 1);
        }
      })
      .catch((error) => console.error('Error submitting answer:', error));
  };

  return (
    <div className="question-container">
      <div className="container">
        <h2>Multiple Choice Question</h2>
        <form id="quiz-form">
          <p id="question">{quizData.text}</p>
          {quizData.options &&
            quizData.options.map((option) => (
              <label key={option.id}>
                <input
                  type="radio"
                  name="option"
                  value={option.id}
                  className="b1"
                  onChange={handleOptionChange}
                  checked={selectedOption === option.id}
                />
                {option.text}
              </label>
            ))}
          <div className="submit_">
            <div className="submit">
              <button type="button" onClick={handleQuizSubmission} style={{ width: '100%' }}>
                Submit
              </button>
            </div>
            <div className="next">
              <button type="button" onClick={handleQuizSubmission} style={{ width: '100%' }}>
                Next
              </button>
            </div>
          </div>
        </form>
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default QuizComponent;
