import React, { useContext } from "react";
import { useState, useReducer } from "react";
import reducer from "../reducer/global_reducer";
import axios from "axios";
const GlobalContext = React.createContext();

const initialState = {
    recentNewsSummary: JSON.parse(localStorage.getItem("recent_summary")) || null,
    isLoading: true,
    errorMessage: null,
    newsContent: null,
    newsUrl: null
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getNewsText = async (articleUrl) => {
        try {
            const data = await axios.post("https://brief-news.onrender.com/analyze", {url: articleUrl});
            dispatch({type: "SET_NEWS_CONTENT", payload: data.data});
            const existingSummary = JSON.parse(localStorage.getItem("recent_summary"));
            if (existingSummary) {
                const newsSummary = data.data;
                localStorage.setItem("recent_summary", JSON.stringify([...existingSummary, {newsSummary, articleUrl}]));
            } else {
                localStorage.setItem("recent_summary", JSON.stringify([data.data]));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const updateUrl = (url) => {
        dispatch({type: "SET_NEWS_URL", payload: url});
    }


    return (<GlobalContext.Provider value={{...state, getNewsText, updateUrl}}>{children}</GlobalContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
