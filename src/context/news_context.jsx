import React, { useContext } from "react";
import { useState, useReducer } from "react";
import reducer from "../reducer/global_reducer";
import axios from "axios";
const GlobalContext = React.createContext();

const initialState = {
    recentNewsSummary: JSON.parse(localStorage.getItem("recent_summary")) || null,
    isLoading: true,
    error: false,
    errorMessage: null,
    newsContent: null,
    newsUrl: null,
    isDarkMode: false,
    isOpen: false
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // fetch news article
    const getNewsText = async (articleUrl) => {
        console.log("Fetching news content for URL:", articleUrl);
        try {
            const data = await axios.post("https://brief-1ptv.onrender.com/analyze", {url: articleUrl});
            dispatch({type: "SET_NEWS_CONTENT", payload: data.data});
            const existingSummary = JSON.parse(localStorage.getItem("recent_summary"));
            if (existingSummary) {
                const newsSummary = data.data;
                localStorage.setItem("recent_summary", JSON.stringify([...existingSummary, {newsSummary, articleUrl}]));
            } else {
                localStorage.setItem("recent_summary", JSON.stringify([data.data]));
            }
        } catch (error) {
            dispatch({type: "ERROR", payload: error})
            
        }
    }


    const setIsOpen = () => {
        dispatch({type: "TOGGLE_SIDEBAR"})
    }
    const updateUrl = (url) => {
        dispatch({type: "SET_NEWS_URL", payload: url});
    }
    const toggleDarkMode = () => {
        dispatch({ type: "TOGGLE_DARK_MODE" });
    }

    return (<GlobalContext.Provider value={{...state, setIsOpen, setIsOpen, getNewsText, updateUrl, toggleDarkMode}}>{children}</GlobalContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
