import { all, call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
	CLEAR_CART_FAILED,
	CONFIRM_PAYMENT_FAILED,
	CONFIRM_PAYMENT_SUCCESS,
	LOAD_CART_FAILED,
	LOAD_CART_SUCCESS,
	loadCart,
	UPDATE_CART,
	UPDATE_QUANTITY_FAILED
} from "../actions/cart";

import { getProductByIdFlow } from "./ProductSagas";

import { Api } from "./Api";
import { loadProduct } from "../actions/product";

export function* loadCartFlow(action) {
	try {
		const { includeProducts } = action.meta;
		const cart = yield call(Api.loadCart);

		yield put({ type: UPDATE_CART, payload: cart.products });

		if (includeProducts) {
			const productIds = Object.keys(cart.products);
			yield all(
				productIds.map(productId =>
					getProductByIdFlow(loadProduct(productId))
				)
			);
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

export function* confirmPaymentFlow(action) {
	try {
		const {
			name,
			email,
			country,
			state,
			zip,
			cc,
			expYear,
			expMonth,
			cvv
		} = action.payload;

		const order = yield call(
			Api.confirmPayment,
			name,
			email,
			country,
			state,
			zip,
			cc,
			expYear,
			expMonth,
			cvv
		);

		yield put({ type: CONFIRM_PAYMENT_SUCCESS, payload: order });

		yield put(loadCart({ includeProducts: false }));

		yield put(push(`/order/${order.id}`));
	} catch (e) {
		yield put({ type: CONFIRM_PAYMENT_FAILED, payload: e.message });
	}
}
