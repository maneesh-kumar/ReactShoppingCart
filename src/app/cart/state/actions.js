import * as ActionTypes from "./ActionTypes";

//Action Creators

export function addItemToCart(item) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item: {
                id: item.id,
                name: item.name,
                price: item.price,
                qty: item.qty || 1
            }
        }
    }
}

export function emptyCart() {
    return {
        type: ActionTypes.EMPTY_CART
    }
}



export const removeItemFromCart = (id) => {
    return {
     type: ActionTypes.REMOVE_ITEM_FROM_CART,
     payload: {
         id: id
     }
 }
}

export const updateItemInCart = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id: id,
            qty: qty
        }
    }
}


export const initProducts = (products) => {
    return {
     type: ActionTypes.INIT_PRODUCTS,
     payload: {
        products: products
     }
 }
}

export const initLoading = (loading) => {
    return {
     type: ActionTypes.INIT_LOADING,
     payload: {
        loading: loading
     }
 }
}


//fetch data from service 7070
//async
//thunk function, returns a function instead of object
export function fetchProducts() {
    return function(dispatch) {
        console.log("called by middleware")
        //async code goes here

        fetch("http://localhost:7070/api/products")
        .then (response => {
            console.log("RESPONSE", response);

            // json() return a promise
            // parse response to json
            return response.json();
        })

        .then (products => {
            let action = initProducts(products);
            dispatch(action);
        })
    }
}