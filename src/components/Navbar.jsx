import React from 'react'
import { MdMenu } from "react-icons/md";
import { useGlobalContext } from '../context/news_context'
import { useEffect } from 'react'
const Navbar = () => {
  const { toggleDarkMode, isOpen, setIsOpen } = useGlobalContext();
  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [isDarkMode]);

  return (
    <header className='w-full  h-16 px-6 flex items-center justify-between lg:px-12 bg-white border-b border-solid top-0 z-50 dark:bg-gray-800 shadow-md'>
        <a className='text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight'>Fly News</a>
        <div className="flex flex-1 justify-end gap-4 items-center">
        <div className="flex gap-2">
            <div className="md:hidden flex items-center justify-between p-4">
        <button
          type="button"
          onClick={() => {
            setIsOpen();
          }}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="p-2 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-white"
        >
          <MdMenu size={26} />
        </button>
      </div>
            
        </div>
        
        </div>
    </header>
  )
}

export default Navbar