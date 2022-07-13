import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    counter: 1
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action) => {
            state.counter = state.counter + action.payload
        },
        decrement: (state)=> {
            state.counter--
        }
    }
})
export default counterSlice.reducer;
export  const counterActions = counterSlice.actions;
