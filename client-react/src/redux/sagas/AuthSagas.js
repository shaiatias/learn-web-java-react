import { put, call } from "redux-saga/effects";
import {
	LOGOUT_SUCCESS,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from "../actions/authentication";


import { Api } from "./Api";

export function* logoutFlow(action) {
	// localStorage.clear();
	// yield put({ type: LOGOUT_SUCCESS });
}

export function* loginFlow(action) {
	// try {
	// 	const user = yield call(Api.login, action.payload.email, action.payload.password);
	// 	localStorage.setItem("user", user);
	// 	yield put({ type: LOGIN_SUCCESS, payload: user });
	// } catch (e) {
	// 	yield put({ type: LOGIN_FAILED, payload: e });
	// }
}

export function* registerFlow(action) {
	try {
		const { name, email, password, passwordConfirm } = action.payload;
		yield call(Api.register, name, email, password, passwordConfirm);
		yield put({ type: REGISTER_SUCCESS });
	} catch (e) {
		yield put({ type: REGISTER_FAILED, payload: e });
	}
}
