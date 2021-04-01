import {createSlice} from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        value : 0
    },
    reducers:{
        onDateChange : (state, action) => {
            //state.value += action.payload;
            console.log('date: ' ,  action);
        }
    }
});

export const {onDateChange} = homeSlice.actions;

/*export const selectCount = (state) => {
    console.log(state);
    //state.home.value;
}*/

export const selectCount = state => state.home.value;

export default homeSlice.reducer;