import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-12 py-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-primary/60">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-bold">Briefly AI</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
            <a className="hover:text-primary" href="#">API</a>
            <a className="hover:text-primary" href="#">Support</a>
          </div>
          <div className="text-slate-400 text-xs">
            © 2026 Briefly. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer