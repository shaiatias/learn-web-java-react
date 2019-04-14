import { RESET_ALL } from "../actions/reset";
import { UPDATE_CART } from "../actions/cart";

const initialState = {
	items: {},
	subtotalPrice: 0,
	shippingPrice: 0,
	totalPrice: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CART:
			return {
				...state,
				items: action.payload
			};

		case RESET_ALL:
			return {
				...initialState
			};

		default:
			return state;
	}
};

export const getCartItemCount = state => {
	return Object.values(state.items).reduce(
		(acc, item) => acc + item.quantity,
		0
	);
};

export const getCartPrice = state => {
	return Object.values(state.items).reduce(
		(acc, item) => acc + Number(item.totalPrice),
		0
	);
};

export const getCartItemsArr = state => {
	return Object.values(state.items);
};
