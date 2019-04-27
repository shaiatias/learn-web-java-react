import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import authentication from "./AuthenticationReducer";
import cart from "./CartReducer";
import products from "./ProductReducer";
import orders from "./OrdersReducer";

export default history =>
	combineReducers({
		router: connectRouter(history),

		authentication,
		cart,

		products,
		orders
	});
