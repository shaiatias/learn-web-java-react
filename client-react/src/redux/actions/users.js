

export const RESET_ALL = "[APP] RESET_ALL";

export const CHANGE_NAME = "[USERS] CHANGE_NAME";

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});
