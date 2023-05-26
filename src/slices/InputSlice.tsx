import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export const { changeUserInput } = InputSlice.actions;

export default InputSlice.reducer