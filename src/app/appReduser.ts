import { questionsApi } from "@/entities/questions/api/questionApi";
// import questionsReducer from "@/entities/questions/model/questionsSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  // questions: questionsReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
});
