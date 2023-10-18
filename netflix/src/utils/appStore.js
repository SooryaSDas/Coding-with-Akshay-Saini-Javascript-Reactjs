import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import getReducer from "./GptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gpt : getReducer,
        config : configReducer,
    }
})

export default appStore;