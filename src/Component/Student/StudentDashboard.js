import React from 'react'
import Navbar from '../Navbar'
import UnitComponent from './SubjectExplorer'
import QuizComponent from './QuizComponent'

export default function StudentDashboard() {
  return (
    <div>
      <Navbar/>
      {/* <SubjectExplorer/> */}
      {/* <QuizComponent/> */}
      <UnitComponent/>
    </div>
  )
}
