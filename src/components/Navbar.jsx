import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full  h-16 px-6 flex items-center justify-between lg:px-12 bg-white border-b border-solid border-slate-200 top-0 z-50 dark:bg-gray-800 shadow-md'>
        <h2 className='text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight'>News Brief</h2>
        <div className="flex flex-1 justify-end gap-4 items-center">
        <div className="flex gap-2">
            
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </button>
        </div>
        
        </div>
    </header>
  )
}

export default Navbar