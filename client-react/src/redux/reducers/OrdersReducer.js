import { LOAD_ORDER_SUCCESS, LOAD_MY_ORDERS_SUCCESS, LOAD_ALL_ORDERS_SUCCESS } from "../actions/orders";

const initialState = {
	items: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		
		case LOAD_MY_ORDERS_SUCCESS: 
		case LOAD_ALL_ORDERS_SUCCESS: 
			return {
				...state,
				items: {
					...state.items,
					...action.payload
				}
			};

		case LOAD_ORDER_SUCCESS:
			return {
				...state,
				items: {
					...state.items,
					[action.payload.id]: action.payload
				}
			};

		default:
			return state;
	}
};

export const getOrderById = (state, orderId) => {
	return state.items[orderId]
};

export const getOrdersArr = (state) => {
	return Object.values(state.items) || [];
};
