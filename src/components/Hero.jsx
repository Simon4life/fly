import React, {useState} from 'react'
import {FaCheck} from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import RecentSummary from './RecentSummary';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/news_context.jsx';

const Hero = () => {
  const [url, setUrl] = useState("")
  const navigate = useNavigate()
  const { updateUrl } = useGlobalContext()


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
    <section className=''>

      <div className="mb-8 bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="">
          <h3 className='text-black font-bold text-3xl md:text-4xl mb-2'>Summarize the News</h3>
          <p className='text-slate-600 dark:text-slate-400  md:text-lg mb-8 leading-relaxed'>paste any artilce link below. Quickly use AI to extract the key points, main arguments and takeaway in seconds.</p>

          {/* url form */}
          <form onSubmit={handleSubmit} className='md:flex items-center'>

            <input type='text' onChange={(e) => setUrl(e.target.value)} className='w-96 mr-4 px-2 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400' placeholder='e.g https://www.nytimes.com'/>

            <button type='submit' className='bg-[#2214b8] hover:bg-blue-700 text-white font-bold w-full mt-2 md:w-52 md:mt-0 py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform cursor-pointer active:scale-95 shadow-lg shadow-primary/20'>submit 
              <span className='text-2xl font-bold'>
                <AiOutlineThunderbolt />
              </span>
            </button>

          </form>

          <div className="mt-4 flex gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <span className="text-sm">
                <FaCheck />
              </span> Any News Source</span>
            <span className="flex items-center gap-1"><span className="text-sm"><FaCheck /></span> Multi-language Support</span>
          </div>
        </div>
      </div>
      <RecentSummary/>
    </section>
  )
}

export default Hero