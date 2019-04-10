export const LOAD_CART_REQUEST = "[CART] LOAD_CART_REQUEST";
export const LOAD_CART_FAILED = "[CART] LOAD_CART_FAILED";
export const LOAD_CART_SUCCESS = "[CART] LOAD_CART_SUCCESS";

export const loadCart = ({ includeProducts = false }) => ({
	type: LOAD_CART_REQUEST,
	meta: {
		includeProducts
	}
});

export const UPDATE_QUANTITY_REQUEST = "[CART] UPDATE_QUANTITY_REQUEST";
export const UPDATE_QUANTITY_SUCCESS = "[CART] UPDATE_QUANTITY_SUCCESS";
export const UPDATE_QUANTITY_FAILED = "[CART] UPDATE_QUANTITY_FAILED";

export const updateItemQuantity = (productId, quantity) => ({
	type: UPDATE_QUANTITY_REQUEST,
	payload: { productId, quantity }
});

export const addItemToCart = (productId, size) => ({
	type: UPDATE_QUANTITY_REQUEST,
	payload: { productId, quantity: 1, size }
});

export const removeItemToCart = (productId, size) => ({
	type: UPDATE_QUANTITY_REQUEST,
	payload: { productId, size, quantity: 0 }
});

export const CLEAR_CART_REQUEST = "[CART] CLEAR_CART_REQUEST";
export const CLEAR_CART_SUCCESS = "[CART] CLEAR_CART_SUCCESS";
export const CLEAR_CART_FAILED = "[CART] CLEAR_CART_FAILED";

export const clearCart = () => ({
	type: CLEAR_CART_REQUEST
});

export const UPDATE_CART = "[CART] UPDATE_CART";
