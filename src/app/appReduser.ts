import { questionsApi } from "@/entities/questions/api/questionApi";
import questionsReducer from "@/entities/questions/model/questionsSlice";
import { paginationSliceReducer } from "@/features/pagination/model/paginationSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  questions: questionsReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
  pagination: paginationSliceReducer,
});
