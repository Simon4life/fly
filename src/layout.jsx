import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
const Layout = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-6 py-10'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Layout