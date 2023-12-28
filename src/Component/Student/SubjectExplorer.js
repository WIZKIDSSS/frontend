import React, { useState } from 'react';
import "../css/SubjectExplorer.css"
// import QuizComponent from './QuizComponent';
const UnitComponent = () => {
  const unitsData = {
    unit1: {
      topics: {
        'micro grid ': {
          content: "https://drive.google.com/file/d/1KmhFBmv0V3qbZcKCQrtG17piyNqw4U7H/view?usp=drive_link",
          videoUrl: 'https://www.youtube.com/embed/ATqA6rFWuiQ',
        },
        ': Charge, Electric Field & Dipole': {
          content: 'Sample PDF for Topic 1.2',
          videoUrl: 'https://www.youtube.com/embed/p-WdJxhx4so?si=mcivz3wvAH_LNRti',
        },
        ' Electric Flux, Gauss Law ': {
          content: 'Sample PDF for Topic 1.3',
          videoUrl: 'https://www.youtube.com/embed/WSK23g5GGp0?si=xWYl3s9cggu9ohZR',
        },
      },
    },
    unit2: {
      topics: {
        "Electricity, Ohm's Law, Drift Velocity": {
          content: 'Sample PDF for Topic 2.1',
          videoUrl: 'https://www.youtube.com/embed/ZaSPydAdkns?si=L5RnEFCENsdkI7jV',
        },
        'Electrical Energy, Series & Parallel Combinations': {
          content: 'Sample PDF for Topic 2.2',
          videoUrl: 'https://www.youtube.com/embed/Nqe3rgnAuXk?si=uqQMYTWp4hiZ_hSW',
        },
      },
    },
    // ... (other units)
  };

  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
    setSelectedTopic(null);
    setSelectedOption(null);
  };

  return (
    <>
      <div className="container">
        <div className="unit-container">
          <h1 style={{ color: "black" }}>Units</h1>
          {Object.keys(unitsData).map((unit) => (
            <button key={unit} className="unit-button" onClick={() => handleUnitClick(unit)}>
              {unit}
            </button>
          ))}
        </div>

        <div className="topic-container">
          <h2>Topics</h2>
          {selectedUnit && (
            <ul className="topic-list">
              {Object.keys(unitsData[selectedUnit].topics).map((topic) => (
                <li key={topic} className="topic-item" onClick={() => setSelectedTopic(topic)}>
                  {topic}
                </li>
              ))}
            </ul>
          )}

          {selectedTopic && (
            <div>
              <h3 className="topic-heading">Selected Topic: {selectedTopic}</h3>
              <div className="options-container">
                <button className="option-button" onClick={() => handleOptionClick('Read Content')}>
                  Read Content
                </button>
                <button className="option-button" onClick={() => handleOptionClick('Take Quiz')}>
                  Take Quiz
                </button>
                <button className="option-button" onClick={() => handleOptionClick('Watch Video')}>
                  Watch Video
                </button>
              </div>
            </div>
          )}

          {selectedOption && (
            <div className="content-container">
              {selectedOption === 'Read Content' && (
                <iframe className="iframe-container" title="PDF Viewer" src={`data:application/pdf;base64,${btoa(unitsData[selectedUnit].topics[selectedTopic].content)}`} />
              )}
              {selectedOption === 'Watch Video' && (
                <iframe className="iframe-container" title="YouTube Video" src={unitsData[selectedUnit].topics[selectedTopic].videoUrl} />
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default UnitComponent;