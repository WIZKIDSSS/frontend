import './App.css';
import {Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import StudentDashboard from './Component/Student/StudentDashboard';
import Login from './Component/Login';
import Timer from './Component/Student/Timer';
import QuizForm from './Component/Teachers/QuizForm';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/student' element={<StudentDashboard/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/timer' element={<Timer/>}/>
          <Route path='/quiz' element={<QuizForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
