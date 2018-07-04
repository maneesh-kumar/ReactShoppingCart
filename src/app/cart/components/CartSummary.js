
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

//pure component has inbuilt impementation of method "shouldComponentUpdate". it check all props of components.
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("cart summary receive props next", nextProps);
        console.log("cart summary current props ", this.props);
    }

    //called when parent render called
    // called when component this.setState
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.count != this.props.count ||
    //            nextProps.amount != this.props.amount ;
    // }

    componentDidMount() {
        
    }
    
    render() {

        console.log("Cart Summary Render");
        let {amount, count} = this.props;

        return (
            <div> 
            <h2>Cart Summary</h2>

            <p>Amount: {amount} </p>

            <p>Count: {count} </p>

            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    amount: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
}