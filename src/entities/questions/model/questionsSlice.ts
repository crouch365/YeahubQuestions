import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IQuestion } from "./questionsType";

interface QuestionState {
  questions: IQuestion[];
}

const initialState: QuestionState = {
  questions: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload;
    },
  },
});

export const { getQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
