import { put, call } from "redux-saga/effects";
import {
	LOGOUT_SUCCESS,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from "../actions/authentication";

import { RESET_ALL } from "../actions/reset";

import { Api } from "./Api";

export function* logoutFlow(action) {
	localStorage.clear();

	yield put({ type: RESET_ALL });

	yield put({ type: LOGOUT_SUCCESS });
}

export function* loginFlow(action) {
	try {
		yield call(Api.login, action.payload.email, action.payload.password);
		yield put({ type: LOGIN_SUCCESS });
	} catch (e) {
		yield put({ type: LOGIN_FAILED, payload: e });
	}
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
