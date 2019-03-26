export const RESET_ALL = "[APP] RESET_ALL";

export const CHANGE_NAME = "[USERS] CHANGE_NAME";

export const REGISTER_REQUEST = "USERS_REGISTER_REQUEST";
export const REGISTER_SUCCESS = "USERS_REGISTER_SUCCESS";
export const REGISTER_FAILURE = "USERS_REGISTER_FAILURE";
export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USERS_LOGIN_FAILURE";
export const LOGOUT = "USERS_LOGOUT";

export const changeName = name => ({
	type: CHANGE_NAME,
	payload: name
});
