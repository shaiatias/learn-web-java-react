import {put} from 'redux-saga/effects'
import {LOGOUT_SUCCESS} from "../actions/authentication";
import {RESET_ALL} from "../actions/users";


export function* logoutFlow(action) {

    localStorage.clear();

    yield put({type: RESET_ALL});

    yield put({type: LOGOUT_SUCCESS});

}
