

export const LOAD_ORDER_REQUEST = "[CART] LOAD_ORDER_REQUEST";
export const LOAD_ORDER_FAILED = "[CART] LOAD_ORDER_FAILED";
export const LOAD_ORDER_SUCCESS = "[CART] LOAD_ORDER_SUCCESS";

export const loadOrder = (orderId, {includeProducts} = { includeProducts: false}) => ({
	type: LOAD_ORDER_REQUEST,
	meta: {
		includeProducts
	},
	payload: { orderId }
});
