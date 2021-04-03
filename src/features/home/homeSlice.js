import {createSlice} from "@reduxjs/toolkit";
import {dateFilter, destinationFilter, typeFilter} from "./homeLogic";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        value : 0
    },
    reducers:{
        onDateChange : (state, action) => {
            state.date = action.payload;
            console.log('date: ' ,  action.payload);
        },

        onDestinationChange: (state , action) => {
            state.destination = action.payload;
        },

        onTypeChange: (state , action) => {
            state.type = action.payload;
        },
        onDaysChange: (state, action) => {
            state.days = action.payload;
        }
    }
});

export const filterData = (data, homeState) => {
   /* data.forEach(d => {
        console.log(dateFilter(homeState.date, homeState.days, d.nonAvailableDates));
    })*/
    return data.filter(d => (destinationFilter(homeState.destination, d.destination)) &&
    typeFilter(homeState.type, d.type) && dateFilter(homeState.date, homeState.days, d.nonAvailableDates));
}


export const {onDateChange, onDestinationChange, onTypeChange, onDaysChange} = homeSlice.actions;

export const homeState = state => state.home;

export default homeSlice.reducer;