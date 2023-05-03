
const elementList = (state = [], action) => {
    switch (action.type) {
        case 'SET_ELEMENTS':
            return action.payload;
        default:
            return state;
    }
}; 
export default elementList


/** 
 import { combineReducers } from 'redux';

 const elementList = (state = [], action) => {
    switch (action.type) {
        case 'SET_ELEMENTS':
            return action.payload;
        default:
            return state;
    }
};
const rootReducer combineReducers({
    elementList,
    // other reducers can be added here
});
export default rootReducer;
 */