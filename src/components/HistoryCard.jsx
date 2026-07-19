import React from 'react'

const HistoryCard = ({img, category, title, excerpt, readTime, timestamp}) => {
  return (
   <div className="text-gray-900 dark:text-white group mb-4 relative rounded-xl overflow-hidden shadow-2xl shadow-black/20 p-5 border-t border-l border-white/5 transition-all hover:translate-y-[-4px]">

        <div className="h-48 rounded-lg overflow-hidden mb-4 relative">
            <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={img}
                alt={title}
              />

              <span className="absolute top-3 left-3 bg-tertiary text-on-tertiary-fixed px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                Tech
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] text-outline uppercase font-semibold">
                  {category} • {readTime} read
                </span>

                <span className="text-[10px] text-outline">
                  {timestamp}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {title}
              </h3>

              <p className="text-sm text-on-surface-variant line-clamp-2">
                {excerpt}
              </p>
            </div>
          </div>
  )
}

export default HistoryCard