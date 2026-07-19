const global_reducer = (state, action) => {
    if(action.type === "SET_NEWS_CONTENT") {
        return {...state, newsContent: action.payload, isLoading: false}
    }
    if(action.type === "SET_NEWS_URL") {
        return {...state, newsUrl: action.payload};
    }
    if(action.type === "TOGGLE_DARK_MODE") {
        return {...state, isDarkMode: !state.isDarkMode};
    }
    return state
}

export default global_reducer;