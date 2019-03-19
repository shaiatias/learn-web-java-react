import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import users from "./UsersReducer";
import authentication from "./AuthenticationReducer";
import cart from "./CartReducer";

export default history =>
	combineReducers({
		router: connectRouter(history),

		users,
		authentication,
		cart
	});

// state = {
// 	users: {},
// 	authentication: {},
// 	cart: {}
// }

// reducersFn = {
// 	users: (previousState, action) => { },
// 	authentication: (previousState, action) => { },
// 	cart: (previousState, action) => { },
// }

// dispatch = (oldState, action) => {
// 	return Object.keys(oldState).reduce((acc, item) => {
// 		const obj = {
// 			...acc,
// 			item: reducersFn[item](oldState[item], action)
// 		};
// 		return obj;
// 	}, {})
// }
