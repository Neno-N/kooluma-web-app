import React from 'react'
import { Outlet } from 'react-router-dom'

export const StudentIndex = () => {
  return (
    <div>
        <h1>Student</h1>
        <Outlet />
    </div>
  )
}
