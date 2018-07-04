import {createStore, combineReducers, applyMiddleware} from "redux";

import thunkMiddleware from "redux-thunk";

import cartReducer from "./cart/state/reducers/cartReducer";
import productReducer from "./cart/state/reducers/productReducer";

function counterReducer(state = 0, action) {
    console.log ("reducer", state, action);

    switch(action.type) {
        case 'INCREMENT' :
            return state + action.payload.value;
        case 'DECREMENT' :
            return state - action.payload.value;
        default:
            return state;
    }
}

function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log("LOGGER", action);

            //next forward actionto reducer
            let result = next(action);
            return result;


        }
    }
}

let rootReducer = combineReducers( {
    counter: counterReducer,
    cartItems: cartReducer,
    productState: productReducer
});

let store = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

export default store;


///// only for learning purpose

store.subscribe ( () => {
    console.log("STATE Sub", store.getState());    
})

let unsubFn = store.subscribe ( () => {
    console.log("STATE Unsub", store.getState());    
})

unsubFn();

console.log("STATE", store.getState());

let action = {
    type: 'INCREMENT',
    payload: {
        value : 1
    }
}

// Action Creators helper functions
function incrementAction(value) {
    return (
        {
            type: 'INCREMENT',
            payload: {
                value : value
            }
        }
    )
}

function decrementAction(value) {
    return (
        {
            type: 'DECREMENT',
            payload: {
                value : value
            }
        }
    )
}

console.log("DISPATCH1");
store.dispatch(incrementAction(200));
console.log("STATE", store.getState());

console.log("DISPATCH2");
store.dispatch(decrementAction(5));
console.log("STATE", store.getState());
