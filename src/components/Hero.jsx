import React, {useState} from 'react'
import {FaCheck} from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import RecentSummary from './RecentSummary';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/news_context.jsx';

const Hero = () => {
  const [url, setUrl] = useState("")
  const navigate = useNavigate()
  const { updateUrl, isDarkMode } = useGlobalContext()


  const handleSubmit = (e)=> {
    e.preventDefault();
    if(url !== "") {
      updateUrl(url);
      navigate(`/summary`)

    } else {
      console.log("incorrect input")
    }
  }


  return (
<section
  className={`w-full min-h-[calc(100vh-4rem)] flex flex-col items-center ${
    isDarkMode ? "bg-slate-900" : "bg-slate-50"
  }`}
>
  {/* Main Card */}
  <div
    className={`w-full mb-8 rounded-2xl p-5 sm:p-7 md:p-10 shadow-sm border ${
      isDarkMode
        ? "bg-slate-900 border-slate-800"
        : "bg-white border-slate-200"
    }`}
  >
    <div className="w-full">
      <h3 className="text-black dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
        Summarize the News
      </h3>

      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl">
        Paste any article link below. Quickly use AI to extract the key
        points, main arguments, and takeaways in seconds.
      </p>

      {/* URL Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
      >
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full min-w-0 flex-1 px-4 py-3 sm:py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
          placeholder="e.g. https://www.nytimes.com"
        />

        <button
          type="submit"
          className="w-full sm:w-auto sm:min-w-40 lg:min-w-48 shrink-0 bg-[#2214b8] hover:bg-blue-700 text-white font-bold py-3 sm:py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform cursor-pointer active:scale-95 shadow-lg shadow-primary/20"
        >
          <span>Summarize</span>
          <span className="text-2xl">
            <AiOutlineThunderbolt />
          </span>
        </button>
      </form>

      {/* Features */}
      <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-2">
          <FaCheck className="shrink-0" />
          Any News Source
        </span>

        <span className="flex items-center gap-2">
          <FaCheck className="shrink-0" />
          Multi-language Support
        </span>
      </div>
    </div>
  </div>

  {/* Recent Summaries */}
  <div className="w-full max-w-6xl">
    <RecentSummary />
  </div>
</section>
  )
}

export default Hero