//

export const LOGIN_REQUEST = "[AUTH] LOGIN_REQUEST";

export const requestLogin = (email, password) => ({
	type: LOGIN_REQUEST,
	payload: { email, password }
});

export const LOGIN_SUCCESS = "[AUTH] LOGIN_SUCCESS";
export const LOGIN_FAILED = "[AUTH] LOGIN_FAILED";

//

export const LOGOUT_REQUEST = "[AUTH] LOGOUT_REQUEST";

export const requestLogout = () => ({
	type: LOGOUT_REQUEST
});

export const LOGOUT_SUCCESS = "[AUTH] LOGOUT_SUCCESS";

//

export const REGISTER_REQUEST = "[AUTH] REGISTER_REQUEST";

export const requestRegister = (
	name,
	email,
	password,
	passwordConfirm
) => ({
	type: REGISTER_REQUEST,
	payload: { name, email, password, passwordConfirm }
});

export const REGISTER_SUCCESS = "[AUTH] REGISTER_SUCCESS";
export const REGISTER_FAILED = "[AUTH] REGISTER_FAILED";

//

