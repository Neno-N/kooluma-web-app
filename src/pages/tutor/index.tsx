import React from 'react'
import { Outlet } from 'react-router-dom'

export const TutorIndex = () => {
  return (
    <div>
        <h1>Tutor</h1>
        <Outlet />
    </div>
  )
}
