import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 mt-8 sm:mt-12 py-8 sm:py-10 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-primary/60 shrink-0">
          <span className="material-symbols-outlined text-2xl">
            auto_awesome
          </span>
          <span className="font-bold text-base sm:text-lg">
            fly news
          </span>
        </div>

        {/* Footer Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-5 gap-y-4 sm:gap-x-8 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400"
        >
          <a
            className="hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>

          <a
            className="hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>

          <a
            className="hover:text-primary transition-colors"
            href="#"
          >
            API
          </a>

          <a
            className="hover:text-primary transition-colors"
            href="#"
          >
            Support
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center md:text-right text-slate-400 text-xs sm:text-sm">
          © 2026 Fly news. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer