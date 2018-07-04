
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            qty: props.item.qty
        }

        console.log("cartItem Cons");
    }
    
    componentWillMount() {
        console.log("cartItem will mount ");        
    }

    componentDidMount() {
        console.log("cartItem Did mount ");        
    }

        
    // e is an event obj
    handleValueChange(e) {
        // real input dom element
        let target = e.target;

        console.log(target.value);

        this.setState( {
            qty: target.value
        })
    }

    render() {
        console.log("Cart Item Render");
        let {item, onRemove, onUpdate} = this.props;

        return (
           <tr> 
               <td>{item.name} </td>
               <td>
                   <input value= {this.state.qty} 
                          onChange={ (e) => this.handleValueChange(e)}  
                   
                   />
                </td>

               <td>{item.price}</td>

               <td> 
                   <button onClick={ () => onUpdate(item.id, parseInt(this.state.qty)) }>
                     Update
                    </button>
                </td>

                <td> 
                   <button onClick={ () => onRemove(item.id)}>
                     Remove
                    </button>
                </td>
           </tr>
        )
    }

    ComponentWillUnmount() {
        console.log("cartItem will unmount ");        
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    item: PropTypes.shape ({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,

    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}