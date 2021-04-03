export const destinationFilter = (selectedDestination, dataDestination) => {
    return selectedDestination === undefined || dataDestination === selectedDestination;
}

export const typeFilter = (selectedType, dataType) => {
    return selectedType === undefined || dataType === selectedType;
}

export const dateFilter = (selectedDateEpoch, selectedDays, nonAvailablDays) => {
    let isNotRejected = true;
    const aDayEpoch = 86400000;
    const selectedDaysArr = [];
    selectedDays = selectedDays === undefined ? 1 : selectedDays;
    let selectedDayEpoch = selectedDateEpoch / aDayEpoch | 0;
    for (let i = 0; i < selectedDays; i++) {
        selectedDaysArr.push(selectedDayEpoch);
        selectedDayEpoch += 1;
    }
    if (nonAvailablDays !== undefined && nonAvailablDays.length > 0) {
        nonAvailablDays.forEach(nonAvailablDay => {
            if (selectedDaysArr.indexOf(nonAvailablDay / aDayEpoch | 0) > -1) {
               isNotRejected = false;
            }
        });
    }
    return isNotRejected;
}

export const disabledDate = (current) => {
    return current && current.valueOf() < Date.now();
}