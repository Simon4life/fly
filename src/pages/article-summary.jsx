import React, {useEffect} from 'react'
import { useGlobalContext } from '../context/news_context.jsx'

const Summary = () => {
    const {isLoading, getNewsText, newsContent, newsUrl} = useGlobalContext();
    
    useEffect(() => {
        if(newsUrl) {
            getNewsText(newsUrl);
        }
    }, []);


    if(isLoading) {
        return (
            <div className="flex items-center h-dvh justify-center">
                <div className="spinner border-2 animate-spin w-20 rounded-full text-black h-20 border-t-0 border-l-0"></div>
            </div>
        )
    }

  return (
    <section className="flex-1 p-4 md:p-8 lg:p-12">
        <div className="max-w-3xl mx-auto">

            <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <a className="hover:text-primary transition-colors" href="#">Home</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <a className="hover:text-primary transition-colors" href="#">{newsContent.impact_category}</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary font-medium">Article Summary</span>
            </nav>


            {/* article header */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-black bg-primary/10 rounded">{newsContent.impact_category}</span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">6 min read original</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-slate-100 leading-tight tracking-tight mb-4">
                    {newsContent.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">calendar_today</span>
                        <span>{newsContent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">link</span>
                        <a className="text-primary hover:underline font-medium" target="_blank" href={newsUrl}>{newsUrl}</a>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 relative">
            <div className="absolute inset-0 bg-gradient-to- from-black/40 to-transparent"></div>
            <img alt="Solar Panels" className="w-full h-full object-cover" data-alt="Modern solar panels reflecting clear blue sky" src={newsContent.mainImage} />
            </div>

            <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Generated Summary
            </h3>
            <span className="text-xs font-medium text-slate-400 italic">Summarized in 2 seconds</span>
            </div>

            <div className="text-slate-700 dark:text-slate-300 max-w-none">
                <p>{newsContent.summary}</p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-purple-800 text-white px-6 py-3.5 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined">content_copy</span>
                Copy Summary
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                <span className="material-symbols-outlined">share</span>
                Share Article
            </button>
            <button className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 w-14 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
            <span className="material-symbols-outlined">more_horiz</span>
            </button>
            </div>
            </div>

            {/* implications section */}
            <div className="mt-8 bg-white dark:bg-slate-900/50 rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">lightbulb</span>
                        Potential Implications
                    </h3>
                </div>
                <ul className="space-y-6">
                    {
                        newsContent.implications.map((point, index) => (
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-black text-[14px]">eco</span>
                                </span>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {point}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="mt-12">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">Perovskite Cells</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">Renewable Tech</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">MIT Research</span>
                    <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary transition-colors cursor-pointer">Green Energy 2024</span>
                </div>
            </div>
        </div>
    </section>
)}

export default Summary