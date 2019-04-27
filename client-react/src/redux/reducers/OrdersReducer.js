import { LOAD_ORDER_SUCCESS } from "../actions/orders";

const initialState = {
	items: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		
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
