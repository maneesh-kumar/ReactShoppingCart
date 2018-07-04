
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchData();
    }
    
    render() {
        return (
            <div> 
            <h2>ProductList</h2>

            <ul>
                {
                    this.props.products.map ( product => (
                        <li key={product.id}>
                            {product.name}
                            <button onClick={ () => this.props.actions.addItemToCart(product)}>
                                Add to Cart
                            </button>
                        </li>
                    ))
                }
            </ul>

            </div>
        )
    }
} 


ProductList.defaultProps = {
    products: []
}

ProductList.propTypes = {
    products: PropTypes.array
}