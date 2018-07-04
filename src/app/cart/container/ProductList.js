
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
        products: state.productState.products,
        loading: state.productState.loading
         
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),

        fetchData: function() {
            let actionFn = actions.fetchProducts();
            dispatch(actionFn);
        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)