
import React from "react";
import PropTypes from "prop-types";

export default function Counter(props) { 
        return (
            <div> 
            <h2>Counter  - {props.count}</h2>
            <button onClick={props.onIncr}>
             +1
            </button>
            </div>
        )
} 


Counter.defaultProps = {
    
}

Counter.propTypes = {
    
}