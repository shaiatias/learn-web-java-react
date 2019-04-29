import { all, call, put } from "redux-saga/effects";

import { getProductByIdFlow } from "./ProductSagas";

import { Api } from "./Api";
import { loadProduct } from "../actions/product";
import { LOAD_ORDER_SUCCESS, LOAD_ORDER_FAILED, LOAD_MY_ORDERS_SUCCESS, LOAD_MY_ORDERS_FAILED, LOAD_ALL_ORDERS_SUCCESS, LOAD_ALL_ORDERS_FAILED } from "../actions/orders";

export function* loadOrderFlow(action) {
	try {

		const { includeProducts } = action.meta;
		const { orderId } = action.payload;
		const order = yield call(Api.getOrderById, orderId);

		if (includeProducts) {
			const productIds = Object.keys(order.products);
			yield all(
				productIds.map(productId =>
					getProductByIdFlow(loadProduct(productId))
				)
			);
		}

		yield put({ type: LOAD_ORDER_SUCCESS, payload: order });
	} catch (e) {
		yield put({ type: LOAD_ORDER_FAILED, payload: e });
	}
}

export function* loadMyOrdersFlow(action) {
	try {

		const { includeProducts } = action.meta;
		const orders = yield call(Api.getMyOrders);

		if (includeProducts) {
			const productIds = Object.keys(orders.products);
			yield all(
				productIds.map(productId =>
					getProductByIdFlow(loadProduct(productId))
				)
			);
		}

		yield put({ type: LOAD_MY_ORDERS_SUCCESS, payload: orders });
	} catch (e) {
		yield put({ type: LOAD_MY_ORDERS_FAILED, payload: e });
	}
}

export function* loadAllOrdersFlow(action) {
	try {
		const orders = yield call(Api.getAllOrders);
		yield put({ type: LOAD_ALL_ORDERS_SUCCESS, payload: orders });
	} catch (e) {
		yield put({ type: LOAD_ALL_ORDERS_FAILED, payload: e });
	}
}
