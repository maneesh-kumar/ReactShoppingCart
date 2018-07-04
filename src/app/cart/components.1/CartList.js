
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {withRouter} from "react-router-dom";

import CartItem from "./CartItem";

class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("cart List receive props next", nextProps);
        console.log("cart List current props ", this.props);
    }

    //called when parent render called
    // called when component this.setState
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.items != this.props.items;
    // }
    
    componentDidMount() {
        
    }
    
    render() {

        console.log("Cart List Render");

        let {items, onRemove, onUpdate} = this.props;

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
                                onUpdate={onUpdate}
                                onRemove={onRemove}>
                    
                    </CartItem>   
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
    items: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}

const CartListWithRouterComponent = withRouter(CartList);

export default CartListWithRouterComponent;