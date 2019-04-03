import { put, call } from "redux-saga/effects";

import { CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILED } from "../actions/product";

const Api = {
	*createProduct(
		name,
		brand,
		description,
		imageUrl,
		availableSizes,
		categories,
		price,
		tags
	) {
		const res = yield fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				brand,
				description,
				imageUrl,
				availableSizes,
				categories,
				price,
				tags
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

export function* createProductFlow(action) {
	try {
		const {
			name,
			brand,
			description,
			imageUrl,
			availableSizes,
			categories,
			price,
			tags
		} = action.payload;
		yield call(
			Api.createProduct,
			name,
			brand,
			description,
			imageUrl,
			availableSizes,
			categories,
			price,
			tags
		);
		yield put({ type: CREATE_PRODUCT_SUCCESS });
	} catch (e) {
		yield put({ type: CREATE_PRODUCT_FAILED, payload: e });
	}
}
