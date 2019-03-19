import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import users from "./UsersReducer";
import authentication from "./AuthenticationReducer";

export default (history) => combineReducers({

    router: connectRouter(history),

    users,
    authentication,

});
