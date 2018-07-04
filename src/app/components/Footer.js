import React from "react";
import PropTypes from "prop-types";

import store from "../store";

export default function Footer(params) {
    
    let {year, company} = params;

    store.subscribe ( () => { store.getState(); })

    let count = store.getState().counter;

    console.log("footer", count);

    return (
        <div>
            <hr />
            <h3>Copyright @{year}, {company}, {params.address.city}, Pincode {201103+ 1 }</h3>
            <button onClick={params.contactFunc}> Contact </button>
            <button onClick={() => params.contactParamFunc(params.address.city)}> Contact with param </button>

            {params.children}
            <br/>
            <h4>Counter : {count}</h4>

        </div>
    )
}


// propTypes is keyword
Footer.propTypes = 
{
    year: PropTypes.number.isRequired,
    company: PropTypes.string,
    contactFunc: PropTypes.func,
    contactParamFunc: PropTypes.func
}

// defaultProps keyword
Footer.defaultProps = {
    company: 'Product App'
}