import React from "react";

import {BrowserRouter as Router,
        Route,
        Switch
    } from "react-router-dom";

    import {App} from "./App";

    import NotFound from "./components/NotFound";
    import Home from "./components/Home";
    import About from "./components/About";
    import Cart from "./cart/container/Cart";

    import ProductList from "./cart/container/ProductList";

    import CounterContainer from "./components/CounterContainer"

    export default function Routes() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/products" component={ProductList} />
                        <Route path="/counter" component={CounterContainer} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </App>
            </Router>
        )
    }