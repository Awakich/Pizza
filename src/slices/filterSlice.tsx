import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortObj } from "../models";

interface FilterState {
  categoryId: number;
  sortType: SortObj;
}

const initialState: FilterState = {
  categoryId: 0,
  sortType: {
    name: 'популярности',
    sort: 'rating'
  }
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    sortTypes(state, action: PayloadAction<SortObj>) {
      state.sortType = action.payload;
    }
  },
});

export const { changeCategory, sortTypes } = filterSlice.actions;

export default filterSlice.reducer;
