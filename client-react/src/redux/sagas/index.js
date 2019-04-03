import { takeLatest } from "redux-saga/effects";
import {
	LOGOUT_REQUEST,
	LOGIN_REQUEST,
	REGISTER_REQUEST
} from "../actions/authentication";
import { logoutFlow, loginFlow, registerFlow } from "./AuthSagas";

import { CREATE_PRODUCT_REQUEST } from "../actions/product";
import { createProductFlow } from "./ProductSagas";

function* root() {
	yield takeLatest(LOGOUT_REQUEST, logoutFlow);
	yield takeLatest(LOGIN_REQUEST, loginFlow);
	yield takeLatest(REGISTER_REQUEST, registerFlow);
	yield takeLatest(CREATE_PRODUCT_REQUEST, createProductFlow);
}

export default root;
