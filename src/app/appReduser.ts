import { filterReducer } from "@/features/filters-questions";
import { baseApi } from "@/shared/api/baseApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  filterForQuestions: filterReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
