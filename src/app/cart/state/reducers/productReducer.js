import * as ActionTypes from "../ActionTypes";

const INITIAL_STATE = {
    products: [],
    loading: false
}

export default 
    function productReducer(state = INITIAL_STATE,
                                        action) {
    switch(action.type) {
        case ActionTypes.INIT_PRODUCTS:
            return Object.assign({}, state, {products: action.payload.products})

        //ES.NEXT Spread for object
        case ActionTypes.INIT_LOADING:
            return {...state, loading: action.payload.loading }

        default: 
            return state;
    }

}