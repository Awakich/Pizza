import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISort } from "../models";
import { RootState } from "../store";

interface IFilterState {
  categoryId: number;
  sortType: ISort;
  open: boolean;
}

const initialState: IFilterState = {
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
    changeCategory(state, action: PayloadAction<number>): void {
      state.categoryId = action.payload
    },
    sortTypes(state, action: PayloadAction<ISort>): void {
      state.sortType = action.payload;
    },
    closeFilter(state, action: PayloadAction<boolean>): void {
      state.open = action.payload
    }
  },
});

export const filterSelectorOpen = (state: RootState): boolean => state.filter.open
export const filterSelectorSort = (state: RootState): ISort => state.filter.sortType
export const filterSelectorCategory = (state: RootState): number => state.filter.categoryId

export const { changeCategory, sortTypes, closeFilter } = filterSlice.actions;

export default filterSlice.reducer;
