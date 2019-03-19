import {CHANGE_NAME, RESET_ALL} from "../actions/users";

const initialState = {
    name: "shai"
};

export default (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };

        case RESET_ALL:
            return {
                ...initialState
            };

        default:
            return state;
    }
};
