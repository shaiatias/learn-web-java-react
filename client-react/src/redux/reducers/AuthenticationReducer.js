import {
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	LOGIN_FAILED,
	LOGIN_REQUEST
} from "../actions/authentication";

const initialState = {
	loggedIn: false,
	loggingIn: true,
	user: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				loggingIn: true
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				loggedIn: true,
				loggingIn: false,
				user: action.payload
			};

		case LOGIN_FAILED:
		case LOGOUT_SUCCESS:
			return {
				...state,
				loggedIn: false,
				loggingIn: false,
				user: null
			};

		default:
			return state;
	}
};
