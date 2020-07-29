// add feature
    //needs to update price
export const addFeature = (feature) => {
    return { type: "ADD_FEATURE", payload: feature }
};
//remove feature
    //needs to update price

export const removeFeature = (feature) => {
    return { type: "REMOVE_FEATURE", payload: feature }
};