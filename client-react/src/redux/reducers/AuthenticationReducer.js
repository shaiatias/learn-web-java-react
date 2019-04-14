import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../actions/authentication";
import { RESET_ALL } from "../actions/reset";

const initialState = {
    loggedIn: true
};

export default (state = initialState, action) => {

    switch (action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggedIn: false
            };

        case RESET_ALL:
            return {
                ...initialState
            };

        default:
            return state;
    }
};
