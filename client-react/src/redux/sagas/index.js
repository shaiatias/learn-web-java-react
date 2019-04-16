import { takeLatest, delay, take, call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	REGISTER_REQUEST,
	requestLogin
} from "../actions/authentication";
import { logoutFlow, loginFlow, registerFlow } from "./AuthSagas";
import { Api } from "./Api";

import { loadCart } from "../actions/cart";

import {
	CREATE_PRODUCT_REQUEST,
	LOAD_PRODUCT_REQUEST,
	LOAD_FILTERED_PRODUCTS_REQUEST
} from "../actions/product";
import {
	createProductFlow,
	getProductByIdFlow,
	getProductByCategoriesFlow
} from "./ProductSagas";
import {
	UPDATE_QUANTITY_REQUEST,
	CLEAR_CART_REQUEST,
	LOAD_CART_REQUEST,
	CONFIRM_PAYMENT_REQUEST
} from "../actions/cart";
import {
	updateCartFlow,
	clearCartFlow,
	loadCartFlow,
	confirmPaymentFlow
} from "./CartSagas";

function* root() {
	// yield takeLatest(LOGOUT_REQUEST, logoutFlow);
	// yield takeLatest(LOGIN_REQUEST, loginFlow);
	yield takeLatest(REGISTER_REQUEST, registerFlow);

	yield takeLatest(CREATE_PRODUCT_REQUEST, createProductFlow);
	yield takeLatest(LOAD_PRODUCT_REQUEST, getProductByIdFlow);
	yield takeLatest(
		LOAD_FILTERED_PRODUCTS_REQUEST,
		getProductByCategoriesFlow
	);

	yield takeLatest(UPDATE_QUANTITY_REQUEST, updateCartFlow);
	yield takeLatest(CLEAR_CART_REQUEST, clearCartFlow);
	yield takeLatest(LOAD_CART_REQUEST, loadCartFlow);

	yield takeLatest(CONFIRM_PAYMENT_REQUEST, confirmPaymentFlow);
}

function* userCycleSaga() {
	function* login(action) {
		let loggedIn = false;

		try {
			const user = yield call(
				Api.login,
				action.payload.email,
				action.payload.password
			);

			localStorage.setItem("user", user);
			loggedIn = true;

			yield put({ type: LOGIN_SUCCESS, payload: user });
		} catch (e) {
			loggedIn = false;
			yield put({ type: LOGIN_FAILED, payload: e });
		}

		return loggedIn;
	}

	function* logout(action) {
		yield call(Api.logout);

		localStorage.removeItem("user");

		yield put({ type: LOGOUT_SUCCESS });

		yield put(loadCart({ includeProducts: false }));
	}

	while (true) {
		let loggedIn = yield login(requestLogin());

		if (loggedIn) {
			const action = yield take(LOGOUT_REQUEST);
			yield put(push("/"));
			yield logout(action);
		} else {
			const action = yield take(LOGIN_REQUEST);
			loggedIn = yield login(action);
		}
	}
}

function run(sagaMiddleware) {
	sagaMiddleware.run(root);
	sagaMiddleware.run(userCycleSaga);
}

export default { run };
