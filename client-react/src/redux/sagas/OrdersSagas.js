import { all, call, put } from "redux-saga/effects";

import { getProductByIdFlow } from "./ProductSagas";

import { Api } from "./Api";
import { loadProduct } from "../actions/product";
import { LOAD_ORDER_SUCCESS, LOAD_ORDER_FAILED } from "../actions/orders";

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
