import React from 'react'
import { MdOutlineDashboard, MdHistory } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";

const Sidebar = () => {
  return (

    <aside>
        <div className="hidden md:flex flex-col gap-4 p-6 md:p-10">
            <ul>
                <li className='text-slate-900 mb-6 dark:text-white font-bold text-lg cursor-pointer hover:text-primary transition-colors'>
                    
                    <NavLink to="/" className={({isActive}) => `flex items-center ${isActive ? 'text-white mb-6 px-6 py-2 rounded-xl bg-[#2214b8] shadow-lg shadow-[#2214b8]/20 dark:text-white font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center' : 'text-slate-900 dark:text-white'}`}>
                        <span className='mr-2'><MdOutlineDashboard /></span>
                        Dashboard
                    </NavLink>
                </li>

                <li className='text-slate-900 mb-6 dark:text-white font-bold text-lg cursor-pointer hover:text-primary transition-colors '> 
                    <NavLink to="/history" className={({isActive}) => `flex items-center ${isActive ? 'text-white mb-6 px-6 py-2 rounded-xl bg-[#2214b8] shadow-lg shadow-[#2214b8]/20 dark:text-white font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center' : 'text-slate-900 dark:text-white'}`}>
                        <span className='mr-2'><MdHistory /></span>
                        History
                    </NavLink>
                </li>

                <li className='text-slate-900 mb-6 dark:text-white font-bold text-lg cursor-pointer hover:text-primary transition-colors'>
                    <NavLink to="/saved" className={({isActive}) => `flex items-center ${isActive ? 'text-white mb-6 px-6 py-2 rounded-xl bg-[#2214b8] shadow-lg shadow-[#2214b8]/20 dark:text-white font-bold text-lg cursor-pointer hover:text-primary transition-colors flex items-center' : 'text-slate-900 dark:text-white'}`}>
                        <span className='text-slate-900 mr-2'>
                            <CiBookmark/>
                        </span>
                        Saved
                    </NavLink>
                    
                </li>
                <li className='text-slate-900 mb-6 dark:text-white font-bold text-lg cursor-pointer hover:text-primary transition-colors'>
                    <a href="#" className='flex items-center'>
                        <span className='mr-2'>
                            <CiBookmark/>
                        </span>
                        Saved Reports
                    </a>
                    
                </li>
                
            </ul>
        </div>
    </aside>
    
  )
}

export default Sidebar