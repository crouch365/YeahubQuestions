import { questionsApi } from "@/entities/questions/api/questionApi";
import { skillsApi } from "@/entities/skills/api/skillsApi";
import { specializationApi } from "@/entities/specialization";
import { filterReducer } from "@/features/filters";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  filterForQuestions: filterReducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
  [specializationApi.reducerPath]: specializationApi.reducer,
  [skillsApi.reducerPath]: skillsApi.reducer,
});
