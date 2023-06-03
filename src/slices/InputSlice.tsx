import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InputSlice {
    userInput: string;
}

const initialState: InputSlice = {
    userInput: ''
}

const InputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        changeUserInput(state, action: PayloadAction<string>) {
            state.userInput = action.payload
        }
    }
})

export const inputSelector = (state: RootState): string => state.input.userInput

export const { changeUserInput } = InputSlice.actions;

export default InputSlice.reducer