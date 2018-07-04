
import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) { 
        return (
            <div> 
            <h2>NotFound - {props.match.url}</h2>

            <button onClick={() => props.history.push("/")} >
                Home
            </button>

            <button onClick={() => props.history.goBack()} >
                Back
            </button>
            </div>
        )
} 


NotFound.defaultProps = {
    
}

NotFound.propTypes = {
    
}