

export const LOAD_ORDER_REQUEST = "[ORDERS] LOAD_ORDER_REQUEST";
export const LOAD_ORDER_FAILED = "[ORDERS] LOAD_ORDER_FAILED";
export const LOAD_ORDER_SUCCESS = "[ORDERS] LOAD_ORDER_SUCCESS";

export const loadOrder = (orderId, {includeProducts} = { includeProducts: false}) => ({
	type: LOAD_ORDER_REQUEST,
	meta: {
		includeProducts
	},
	payload: { orderId }
});

export const LOAD_MY_ORDERS_REQUEST = "[ORDERS] LOAD_MY_ORDERS_REQUEST";
export const LOAD_MY_ORDERS_FAILED = "[ORDERS] LOAD_MY_ORDERS_FAILED";
export const LOAD_MY_ORDERS_SUCCESS = "[ORDERS] LOAD_MY_ORDERS_SUCCESS";

export const loadMyOrders = ({includeProducts} = { includeProducts: false}) => ({
	type: LOAD_MY_ORDERS_REQUEST,
	meta: {
		includeProducts
	}
});

export const LOAD_ALL_ORDERS_REQUEST = "[ORDERS] LOAD_ALL_ORDERS_REQUEST";
export const LOAD_ALL_ORDERS_FAILED = "[ORDERS] LOAD_ALL_ORDERS_FAILED";
export const LOAD_ALL_ORDERS_SUCCESS = "[ORDERS] LOAD_ALL_ORDERS_SUCCESS";

export const loadAllOrders = () => ({
	type: LOAD_ALL_ORDERS_REQUEST
});
