import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './Features/modal/modalSlice'
import competitorReducer from './Features/Competitor/CompetitorSlice'

export const store=configureStore({
    reducer:{
        modal:modalReducer,
        competitor:competitorReducer,
    }
})