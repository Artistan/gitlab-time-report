import { SET_FILTERS } from '../actions/filters';


let initialState = JSON.parse(decodeURIComponent(location.hash.slice(1)) || JSON.stringify({}));

export default function filters (state=initialState, action) {
    let newState;
    if (action.type == SET_FILTERS) {
        if (action.merge) {
            newState = {...state, ...action.filters};
        } else {
            newState = action.filters;
        }
    } else {
        newState = state;
    }
    location.hash = JSON.stringify(newState);
    return newState;
};
