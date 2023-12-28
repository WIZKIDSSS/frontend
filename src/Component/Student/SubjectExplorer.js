// import React, { useState } from 'react';

// const SubjectExplorer = () => {
//   // Mock data for units, topics, and study material
//   const units = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'];
//   const [selectedUnit, setSelectedUnit] = useState(null);

//   const topics = selectedUnit ? [`Topic 1 (${selectedUnit})`, `Topic 2 (${selectedUnit})`, `Topic 3 (${selectedUnit})`] : [];
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   const studyMaterial = selectedTopic ? `Study Material for ${selectedTopic}` : '';

//   const handleUnitClick = (unit) => {
//     setSelectedUnit(unit);
//     setSelectedTopic(null);
//   };

//   const handleTopicClick = (topic) => {
//     setSelectedTopic(topic);
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Left Side (1/3) - Units */}
//         <div className="col-md-4 justify-content-center align-item-center" style={{ minHeight: '100 vh', marginTop: "14%" }}>
//           <div className="list-group">
//             {units.map((unit, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 className={`list-group-item list-group-item-action ${selectedUnit === unit ? 'active' : ''}`}
//                 onClick={() => handleUnitClick(unit)}
//               >
//                 {unit}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Right Side (2/3) - Topics and Study Material */}
//         <div className="col-md-8" style={{ overflowY: 'auto', maxHeight: '80vh' }}>
//           <div className="list-group">
//             {topics.map((topic, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 className={`list-group-item list-group-item-action ${selectedTopic === topic ? 'active' : ''}`}
//                 onClick={() => handleTopicClick(topic)}
//               >
//                 {topic}
//               </button>
//             ))}
//           </div>
//           <div className="mt-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{studyMaterial}</h5>
//                 {/* You can display study material content here */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubjectExplorer;


import React, { useState } from 'react';
import "../css/SubjectExplorer.css"

const UnitComponent = () => {
  const unitsData = {
    unit1: {
      topics: ['Topic 1.1', 'Topic 1.2', 'Topic 1.3'],
      content: 'Sample PDF for Unit 1',
      videoUrl: 'https://www.youtube.com/embed/sample_video_id',
    },
    unit2: {
      topics: ['Topic 2.1', 'Topic 2.2', 'Topic 2.3'],
      content: 'Sample PDF for Unit 2',
      videoUrl: 'https://www.youtube.com/embed/sample_video_id',
    },
    unit3: {
      topics: ['Topic 3.1', 'Topic 3.2', 'Topic 3.3'],
      content: 'Sample PDF for Unit 3',
      videoUrl: 'https://www.youtube.com/embed/sample_video_id',
    },
  };

  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // ... (previous React component code)

  return (
    <div className="container">
      <div className="unit-container">
        <h1 style={{ color: "black" }}>Units</h1>
        {Object.keys(unitsData).map((unit) => (
          <button key={unit} className="unit-button" onClick={() => setSelectedUnit(unit)}>
            {unit}
          </button>
        ))}
      </div>

      <div className="topic-container">
        <h2>Topics</h2>
        {selectedUnit && (
          <ul className="topic-list">
            {unitsData[selectedUnit].topics.map((topic) => (
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
              <iframe className="iframe-container" title="PDF Viewer" src={`data:application/pdf;base64,${btoa(unitsData[selectedUnit].content)}`} />
            )}
            {selectedOption === 'Watch Video' && (
              <iframe className="iframe-container" title="YouTube Video" src={unitsData[selectedUnit].videoUrl} />
            )}
            {/* Add additional logic for other options */}
          </div>
        )}
      </div>
    </div>
  );

};

export default UnitComponent;