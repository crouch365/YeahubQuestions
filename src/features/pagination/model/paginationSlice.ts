import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IPaginationType {
  currentPage: number;
}

const initialState: IPaginationType = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export const paginationSliceReducer = paginationSlice.reducer;
