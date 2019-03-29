import { put, call } from "redux-saga/effects";

import { SAVE_PRODUCT_SUCCESS, SAVE_PRODUCT_FAILED } from "../actions/product";

const Api = {
	*saveProduct(
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

export function* saveProductFlow(action) {
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
			Api.register,
			name,
			brand,
			description,
			imageUrl,
			availableSizes,
			categories,
			price,
			tags
		);
		yield put({ type: SAVE_PRODUCT_SUCCESS });
	} catch (e) {
		yield put({ type: SAVE_PRODUCT_FAILED, payload: e });
	}
}
