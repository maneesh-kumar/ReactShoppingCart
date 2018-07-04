import React, {Component} from "react";
import PropTypes from "prop-types";

import store from "../store";

export default function withRedux(WrappedComponent, mapReduxToReact, mapDispatchToReact) {

    return class ReduxContainer extends Component {
        constructor(props) {
            super(props);
        }
    
        componentDidMount() {
            this.unsubscribe = store.subscribe ( () => {
                this.forceUpdate();
            });
        }

        componentWillUnmount() {
            this.unsubscribe();
        }
    
        render() {
            let propsState = mapReduxToReact(store.getState());

            // let props = {
            //     //count: store.getState(),
            //     onIncr: () => {

            //             let action = {
            //                 type: 'INCREMENT',
            //                 payload: {
            //                     value: 1
            //                 }
            //             }

            //             store.dispatch(action);
            //     } 
            // }

            let dispatchProps = mapDispatchToReact(store.dispatch);

            return (
                <WrappedComponent {...dispatchProps} {...propsState}  />
            )
        }
} 

 
}
