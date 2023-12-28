import React from 'react'
import Navbar from '../Navbar'
import UnitComponent from './SubjectExplorer'

export default function StudentDashboard() {
  return (
    <div>
      <Navbar/>
      {/* <SubjectExplorer/> */}
      <UnitComponent/>
    </div>
  )
}
