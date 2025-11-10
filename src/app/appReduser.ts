import { questionsApi } from "@/entities/questions/api/questionApi";
import { filterReducer } from "@/features/filters";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  filterForQuestions: filterReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
});
