import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import authentication from "./AuthenticationReducer";
import cart from "./CartReducer";
import products from "./ProductReducer";

export default history =>
	combineReducers({
		router: connectRouter(history),

		authentication,
		cart,

		products
	});
