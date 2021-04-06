import {createSlice} from "@reduxjs/toolkit";
import {dateFilter, destinationFilter, typeFilter} from "./homeLogic";
import {db} from "../../firebase/conf";
import {destinations, types} from "./mockData";

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
        },
        onTypesFetch: (state) => {
            state.isTypesFetched = true;
        },
        onDestinationFetch: (state) => {
            state.isDestinationFetched = true;
        }
    }
});

export const filterData = (data, homeState) => {
   /* data.forEach(d => {
        console.log(dateFilter(homeState.date, homeState.days, d.nonAvailableDates));
    })*/
    return Object.values(data).filter(d => (destinationFilter(homeState.destination, d.destination)) &&
    typeFilter(homeState.type, d.type) && dateFilter(homeState.date, homeState.days, d.nonAvailableDates));
}


export const {onDateChange, onDestinationChange, onTypeChange, onDaysChange, onDestinationFetch, onTypesFetch} = homeSlice.actions;

export const homeState = state => state.home;

export default homeSlice.reducer;

export const push = (id) => {
    db.ref('/rental/'+ id).set({
        id: id,
    });
}

export const fetchData = (dispatch) => {
    fetchDestination(dispatch);
    fetchTypes(dispatch);
}

const fetchDestination = (dispatch) => {
    db.ref('/rental/destination').on('value', snapShot => {
        const destData = snapShot.val();
        Object.keys(destData).forEach(destination => {
            if (destinations.indexOf(destination) === -1) {
                destinations.push(destination);
            }
        });
        dispatch(onDestinationFetch());
    });
}

const fetchTypes = (dispatch) => {
    db.ref('/rental/types').on('value', snapShot => {
        const typesData = snapShot.val();
        Object.keys(typesData).forEach(type => {
            if (types.indexOf(type) === -1) {
                types.push(type);
            }
        });
        dispatch(onTypesFetch())
    });
}