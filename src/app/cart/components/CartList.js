
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {withRouter} from "react-router-dom";

import CartItem from "../container/CartItem";

class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    // shouldComponentUpdate(nextProps, nextState) {

    //     console.log("cartList should update ", nextProps);
        
    //     //shallow compare, ie compare references
        
    //     return nextProps.items != this.props.items;
    // }
    
    render() {
        console.log("CartList render");
        
        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>

            <button onClick={() => this.props.history.push("/")} >
                Home
            </button>

            <table>
             <tbody>
                <tr>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>

                {
                    items.map( (item) => (
                    <CartItem key={item.id} item={item} 
                              
                    >   </CartItem>   
                    ) )
                }

             </tbody>
            </table>



            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    items: PropTypes.array.isRequired
}


// const CartListWithRouterComponent = withRouter (CartList);

// export default CartListWithRouterComponent;

export default withRouter (CartList);