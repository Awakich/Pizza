import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortObj } from "../models";
import { RootState } from "../store";

interface FilterState {
  categoryId: number;
  sortType: SortObj;
  open: boolean;
}

const initialState: FilterState = {
  categoryId: 0,
  sortType: {
    name: 'популярности',
    sort: 'rating'
  },
  open: false
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
    },
    closeFilter(state, action: PayloadAction<boolean>) {
      state.open = action.payload
    }
  },
});

export const filterSelectorOpen = (state: RootState) => state.filter.open
export const filterSelectorSort = (state: RootState) => state.filter.sortType
export const filterSelectorCategory = (state: RootState) => state.filter.categoryId

export const { changeCategory, sortTypes, closeFilter } = filterSlice.actions;

export default filterSlice.reducer;
