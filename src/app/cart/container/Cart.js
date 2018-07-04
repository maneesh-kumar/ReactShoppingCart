import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import Cart from "../components/Cart";

import * as actions from "../state/actions";


//called by the container on state change
//on subscribe
function mapStateToProps (state) {
    return {
        //prop name: stateValue
        items: state.cartItems
    }
}

function mapDispatchToProps (dispatch) {
    return {
        //prop name: function() {}
        // addItemToCart: function (item) {
        //     let action = actions.addItemToCart(item)
        //     dispatch(action);
        // },

        addItemToCart: bindActionCreators(actions.addItemToCart, dispatch),

        // emptyCart: function() {
        //     dispatch(actions.emptyCart())
        // }

        emptyCart: bindActionCreators(actions.emptyCart, dispatch),

        // bind all methods in actions
        actions: bindActionCreators(actions, dispatch)

    }
}

let connectFn = connect(mapStateToProps, 
                        mapDispatchToProps);

//Pure component
let CartContainerComponent = connectFn(Cart);

export default CartContainerComponent;