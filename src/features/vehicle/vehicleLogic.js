export const getArraivalDate = (selectedDate, selectedDay) => {
    if (selectedDate !== undefined) {
        const arrivalEpoch = selectedDay === undefined ? 0 : selectedDay * 86400000;
        return selectedDate + arrivalEpoch;
    }
    return null;
}