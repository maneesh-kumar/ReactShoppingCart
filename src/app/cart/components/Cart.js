
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "../container/CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);  
    }

    addItem() {
        let id = 100 + Math.ceil(Math.random() * 100000);
        let item = {
            id: id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 1000),
            qty: 1
        }
        
        //calls containers addItemToCart
        //this.props.addItemToCart(item);
        this.props.actions.addItemToCart(item);
    }
  
       
    render() {
        console.log("Cart render");

        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={() => this.addItem()}>
             Add
            </button>

            <button onClick={() => this.props.emptyCart()}>
             Empty
            </button>

 
            <CartList items={this.props.items}  />
            <CartSummary  />
            </div>
        )
    }
 
} 


Cart.defaultProps = {
    items: []
}

Cart.propTypes = {
    items: PropTypes.array
}