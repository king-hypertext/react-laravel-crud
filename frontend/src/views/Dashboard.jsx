import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      Dashboard 
      <br />
      <Outlet/>
    </>
  )
}

export default Dashboard
