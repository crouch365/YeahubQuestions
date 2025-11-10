import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_STATE_FOR_FILTER_QUESTIONS } from "./filterTypes";

interface InitialState {
  page: number;
  limit: number;
  keywords: string;
  specializationId: number;
  rateIds: number[];
  skillsIds: number[];
  complexityIds: number[];
}

const initialState: InitialState = INITIAL_STATE_FOR_FILTER_QUESTIONS;

const filterSlice = createSlice({
  name: "filterForQuestions",
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setLimit(state, { payload }: PayloadAction<number>) {
      state.limit = payload;
    },
    setKeywords: (state, { payload }: PayloadAction<string>) => {
      state.keywords = payload;
    },
    setSpecialization: (state, { payload }: PayloadAction<number>) => {
      state.specializationId = payload;
      state.skillsIds = [];
    },
    setRating: (state, { payload }: PayloadAction<number>) => {
      const rate = state.rateIds.indexOf(payload);
      if (rate >= 0) state.rateIds.splice(rate, 1);
      else state.rateIds.push(rate);
    },
    setSkills: (state, { payload }: PayloadAction<number>) => {
      const skill = state.rateIds.indexOf(payload);
      if (skill >= 0) state.rateIds.splice(skill, 1);
      else state.rateIds.push(skill);
    },
    setComplexity: (state, { payload }: PayloadAction<number>) => {
      const complexity = state.rateIds.indexOf(payload);
      if (complexity >= 0) state.rateIds.splice(complexity, 1);
      else state.rateIds.push(complexity);
    },
    resetFilter: () => {
      return INITIAL_STATE_FOR_FILTER_QUESTIONS;
    },
  },
});

export const filterAction = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
