import { put, call, fork } from "redux-saga/effects";

import {
	CLEAR_CART_FAILED,
	UPDATE_QUANTITY_FAILED,
	UPDATE_CART,
	LOAD_CART_FAILED,
	LOAD_CART_SUCCESS
} from "../actions/cart";

import { Api } from "./Api";

export function* loadCartFlow(action) {
	try {
		const { includeProducts } = action.meta;
		const cart = yield call(Api.loadCart);

		yield put({ type: UPDATE_CART, payload: cart.products });

		if (includeProducts) {
			for (const productId in cart.products) {
				yield fork(Api.getProductById, productId);
			}
		}

		yield put({ type: LOAD_CART_SUCCESS });
	} catch (e) {
		yield put({ type: LOAD_CART_FAILED, payload: e });
	}
}

export function* clearCartFlow(action) {
	try {
		const cart = yield call(Api.clearCart);
		yield put({ type: UPDATE_CART, payload: cart.products });
	} catch (e) {
		yield put({ type: CLEAR_CART_FAILED, payload: e });
	}
}

export function* updateCartFlow(action) {
	try {
		const { productId, quantity, size } = action.payload;
		const cart = yield call(Api.updateCart, productId, quantity, size);
		yield put({ type: UPDATE_CART, payload: cart.products });
	} catch (e) {
		yield put({ type: UPDATE_QUANTITY_FAILED, payload: e });
	}
}
