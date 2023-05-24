import React from 'react'
import UserCourses from '../Components/Dashboard-MyCourse/UserCourses'
import Sidebar from '../Components/Sidebar/Sidebar'

const MyCourseDashboard = () => {
  return (
    <div className="app">
      <div className="AppGlasws">
        <Sidebar />
        <UserCourses />
      </div>
    </div>
  )
}

export default MyCourseDashboard