import React, {Component} from "react";

import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

export default class Header extends Component {

    constructor(props) {
        super();
        console.log("header props", props);
    }

    render() {
        let description = 'This is 3 day react workshop in Sapient';
        return (
            <div> 
                <h2>{this.props.title}</h2>
                <div>
                    <NavLink to="/" 
                            exact 
                            className="button"  
                            activeClassName="success" >
                        Home
                    </NavLink>
                    <NavLink to="/products" 
                             
                            className="button"  
                            activeClassName="success" >
                        Products
                    </NavLink>
                    <NavLink to="/cart" 
                             
                            className="button"  
                            activeClassName="success" >
                        Cart
                    </NavLink>
                    <NavLink to="/counter" 
                             
                            className="button"  
                            activeClassName="success" >
                        Counter
                    </NavLink>
                    <NavLink to="/about" 
                            exact 
                            className="button"  
                            activeClassName="success" >
                        About Us
                    </NavLink>
                    <hr/>
                </div>

                {/* <p> {description}  </p> */}
                

            </div>

        )
    }
}