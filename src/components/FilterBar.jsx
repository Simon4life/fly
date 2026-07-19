import React from 'react'

const FilterBar = () => {
  return (
    <div class="flex items-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-2">
        <button class="px-5 py-2 rounded-full bg-primary-container text-on-primary-container text-sm font-medium whitespace-nowrap active:scale-95 transition-transform">All Activity</button>
        <button class="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-white text-sm font-medium whitespace-nowrap active:scale-95 transition-transform">Tech</button>
        <button class="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-white text-sm font-medium whitespace-nowrap active:scale-95 transition-transform">Science</button>
        <button class="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-white text-sm font-medium whitespace-nowrap active:scale-95 transition-transform">Finance</button>
        <button class="px-5 py-2 rounded-full bg-surface-container text-on-surface-variant hover:text-white text-sm font-medium whitespace-nowrap active:scale-95 transition-transform">Politics</button>
        <div class="ml-auto flex items-center gap-2 text-outline-variant text-xs">
            <span class="material-symbols-outlined text-sm">calendar_month</span>
            <span>Last 30 Days</span>
        </div>
    </div>
  )
}

export default FilterBar