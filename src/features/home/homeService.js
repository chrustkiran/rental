import {db} from "../../firebase/conf";
import {destinations, types, vehicleDetails} from "../data/store";
import {onDestinationFetch, onTypesFetch, onVehicleDetailsFetch} from "./homeSlice";

export const fetchData = (dispatch) => {
    fetchDestination(dispatch);
    fetchTypes(dispatch);
    fetchVehicleDetails(dispatch);
}

const fetchDestination = (dispatch) => {
    db.ref('/rental/destination').on('value', snapShot => {
        const destData = snapShot.val();
        Object.keys(destData).forEach(destination => {
            destinations[destination] = destData[destination];
        });
        dispatch(onDestinationFetch());
    });
}

const fetchTypes = (dispatch) => {
    db.ref('/rental/types').on('value', snapShot => {
        const typesData = snapShot.val();
        Object.keys(typesData).forEach(type => {
            types[type] = typesData[type];
        });
        dispatch(onTypesFetch())
    });
}

const fetchVehicleDetails = (dispatch) => {
    db.ref('/rental/vehicleDetails').on('value', snapShot => {
        const vehicleDetailsData = snapShot.val();
        Object.keys(vehicleDetailsData).forEach(owner => {
            vehicleDetails[owner] = vehicleDetailsData[owner];
        });
        dispatch(onVehicleDetailsFetch())
    });
    console.log('vehicleDetails :: ', vehicleDetails);
}