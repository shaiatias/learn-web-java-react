import { call, put, takeLatest, delay } from 'redux-saga/effects'
import {LOGOUT_REQUEST} from "../actions/authentication";
import {logoutFlow} from "./AuthSagas";

// const Api = {
// 	*fetchUser (email) {
//
// 		yield delay(200);
//
// 		return {
// 			email,
// 			name: "shai"
// 		}
//
// 	}
// };
//
// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
// 	try {
// 		const user = yield call(Api.fetchUser, action.payload.email);
// 		yield put({type: "USER_FETCH_SUCCEEDED", user});
// 	} catch (e) {
// 		yield put({type: "USER_FETCH_FAILED", message: e.message});
// 	}
// }
//
// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* loginFailed(action) {
// 	try {
// 		yield put({ type: "RESET_REQUEST" });
// 		// yield put({type: "USER_FETCH_SUCCEEDED", user: user});
// 	} catch (e) {
// 		// yield put({type: "USER_FETCH_FAILED", message: e.message});
// 	}
// }

function* root() {
	yield takeLatest(LOGOUT_REQUEST, logoutFlow);
	// yield takeLatest("LOGIN_REJECTED", loginFailed);
}

export default root;
