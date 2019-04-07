import { takeLatest } from "redux-saga/effects";
import {
	LOGOUT_REQUEST,
	LOGIN_REQUEST,
	REGISTER_REQUEST
} from "../actions/authentication";
import { logoutFlow, loginFlow, registerFlow } from "./AuthSagas";

import {
	CREATE_PRODUCT_REQUEST,
	LOAD_PRODUCT_REQUEST
} from "../actions/product";
import { createProductFlow, getProductByIdFlow } from "./ProductSagas";
import {
	UPDATE_QUANTITY_REQUEST,
	CLEAR_CART_REQUEST,
	REMOVE_PRODUCT_REQUEST,
	ADD_PRODUCT_REQUEST,
	LOAD_CART_REQUEST
} from "../actions/cart";
import { updateCartFlow, clearCartFlow, loadCartFlow } from "./CartSagas";

function* root() {
	yield takeLatest(LOGOUT_REQUEST, logoutFlow);
	yield takeLatest(LOGIN_REQUEST, loginFlow);
	yield takeLatest(REGISTER_REQUEST, registerFlow);

	yield takeLatest(CREATE_PRODUCT_REQUEST, createProductFlow);
	yield takeLatest(LOAD_PRODUCT_REQUEST, getProductByIdFlow);

	yield takeLatest(UPDATE_QUANTITY_REQUEST, updateCartFlow);
	yield takeLatest(CLEAR_CART_REQUEST, clearCartFlow);
	yield takeLatest(LOAD_CART_REQUEST, loadCartFlow);
}

export default root;
