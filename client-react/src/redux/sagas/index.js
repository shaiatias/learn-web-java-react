import { takeLatest } from "redux-saga/effects";
import {
	LOGOUT_REQUEST,
	LOGIN_REQUEST,
	REGISTER_REQUEST
} from "../actions/authentication";
import { logoutFlow, loginFlow, registerFlow } from "./AuthSagas";

function* root() {
	yield takeLatest(LOGOUT_REQUEST, logoutFlow);
	yield takeLatest(LOGIN_REQUEST, loginFlow);
	yield takeLatest(REGISTER_REQUEST, registerFlow);
}

export default root;
