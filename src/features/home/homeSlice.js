import {createSlice} from "@reduxjs/toolkit";
import {dateFilter, destinationFilter, typeFilter} from "./homeLogic";

export const dataSetForListView = [];
export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isVehicleDetailsFetched: false
    },
    reducers: {
        onDateChange: (state, action) => {
            state.date = action.payload;
            console.log('date: ', action.payload);
        },

        onDestinationChange: (state, action) => {
            state.destination = action.payload;
        },

        onTypeChange: (state, action) => {
            state.type = action.payload;
        },
        onDaysChange: (state, action) => {
            state.days = action.payload;
        },
        onTypesFetch: (state) => {
            state.isTypesFetched = true;
        },
        onDestinationFetch: (state) => {
            state.isDestinationFetched = true;
        },
        onVehicleDetailsFetch: (state) => {
            state.isVehicleDetailsFetched = true;
        },
        clearHomeVals: (state) => {
            state.type = undefined;
            state.days = undefined;
            state.destination = undefined;
            state.date = undefined;
        }
    }
});

export const filterData = (data, homeState) => {
    if (dataSetForListView.length === 0) {
        console.log('inside');
        Object.values(data).forEach(ownersVehicle => {
            Object.values(ownersVehicle).forEach(vehicle => {
                Object.keys(vehicle.destinations).forEach(dest => {
                    const newVehicle = {...vehicle}
                    newVehicle.id = vehicle.id + '_' + dest;
                    newVehicle.destination = dest;
                    newVehicle.price = vehicle.destinations[dest].price;
                    dataSetForListView.push(newVehicle);
                })
            });
        });
    }
    console.log(dataSetForListView);

    return dataSetForListView.filter(d => (destinationFilter(homeState.destination, d.destination)) &&
        typeFilter(homeState.type, d.type) && dateFilter(homeState.date, homeState.days,
            d.nonAvailableDates === undefined ? [] : Object.values(d.nonAvailableDates)))
}


export const {
    onDateChange,
    onDestinationChange,
    onTypeChange,
    onDaysChange,
    onDestinationFetch,
    onTypesFetch,
    onVehicleDetailsFetch,
    clearHomeVals
} = homeSlice.actions;

export const homeState = state => state.home;

export default homeSlice.reducer;