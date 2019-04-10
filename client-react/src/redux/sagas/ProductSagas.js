import { put, call } from "redux-saga/effects";

import {
	CREATE_PRODUCT_SUCCESS,
	CREATE_PRODUCT_FAILED,
	LOAD_PRODUCT_SUCCESS,
	LOAD_PRODUCT_FAILED,
	LOAD_FILTERED_PRODUCTS_SUCCESS,
	LOAD_FILTERED_PRODUCTS_FAILED
} from "../actions/product";

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
	},
	*getProductById(id) {
		const res = yield fetch(`/api/products/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	*getProductByCategories(categories) {
		const url = `/api/products?categories=${encodeURIComponent(
			categories
		)}`;

		const res = yield fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	}
};

export function* getProductByIdFlow(action) {
	try {
		const { productId } = action.payload;
		const product = yield call(Api.getProductById, productId);
		yield put({ type: LOAD_PRODUCT_SUCCESS, payload: product });
	} catch (e) {
		yield put({ type: LOAD_PRODUCT_FAILED, payload: e });
	}
}

export function* getProductByCategoriesFlow(action) {
	try {
		const { categories } = action.payload;
		const products = yield call(Api.getProductByCategories, categories);
		yield put({
			type: LOAD_FILTERED_PRODUCTS_SUCCESS,
			payload: products
		});
	} catch (e) {
		yield put({
			type: LOAD_FILTERED_PRODUCTS_FAILED,
			payload: e
		});
	}
}

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
