import { put, call } from "redux-saga/effects";
import {
	LOGOUT_SUCCESS,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAILED
} from "../actions/authentication";
import { RESET_ALL } from "../actions/users";

const Api = {
	*login(email, password) {

		const creds = btoa(`${email}:${password}`);

		const res = yield fetch("/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Basic ${creds}`
			}
		});

		if (res.ok) {
			return;
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*register(name, email, password, passwordConfirm) {
		const res = yield fetch("/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				email,
				password,
				passwordConfirm
			})
		});

		if (res.ok) {
			return;
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	}
};

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
		const {
			name,
			email,
			password,
			passwordConfirm
		} = action.payload;
		yield call(
			Api.register,
			name,
			email,
			password,
			passwordConfirm
		);
		yield put({ type: REGISTER_SUCCESS });
	} catch (e) {
		yield put({ type: REGISTER_FAILED, payload: e });
	}
}
