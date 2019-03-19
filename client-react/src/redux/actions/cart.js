export const ADD_PRODUCT = "[CART] ADD_PRODUCT";

export const addItemToCart = item => ({
	type: ADD_PRODUCT,
	payload: item
});

export const REMOVE_PRODUCT = "[CART] REMOVE_PRODUCT";

export const removeItemToCart = itemId => ({
	type: REMOVE_PRODUCT,
	payload: { id: itemId }
});

export const UPDATE_QUANTITY = "[CART] UPDATE_QUANTITY";

export const updateItemQuantity = (id, quantity) => ({
	type: UPDATE_QUANTITY,
	payload: { id, quantity }
});
