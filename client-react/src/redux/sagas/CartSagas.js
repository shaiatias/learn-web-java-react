import { put, call } from "redux-saga/effects";

import {
	CLEAR_CART_FAILED,
	UPDATE_QUANTITY_FAILED,
	UPDATE_CART,
	LOAD_CART_FAILED
} from "../actions/cart";

const Api = {
	*updateCart(productId, quantity, size) {
		const res = yield fetch("/api/carts", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				productId,
				quantity,
				size
			})
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	*clearCart() {
		const res = yield fetch(`/api/carts`, {
			method: "DELETE"
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	*loadCart() {
		const res = yield fetch(`/api/carts`, {
			method: "GET"
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	}
};

export function* loadCartFlow(action) {
	try {
		// const { loadWithProducts } = action.meta;

		const cart = yield call(Api.loadCart);
		yield put({ type: UPDATE_CART, payload: cart.products });

		// if (loadWithProducts) {
		// 	Object
		// 		.keys(cart.products)
		// 		.forEach(productId => {
		// 			yield put({ type: UPDATE_CART, payload: cart.products });
		// 		});
		// }
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
