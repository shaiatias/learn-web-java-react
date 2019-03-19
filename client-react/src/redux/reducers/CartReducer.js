import { RESET_ALL } from "../actions/users";
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_QUANTITY } from "../actions/cart";

const initialState = {
	items: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				items: {
					...state.items,
					[action.payload.id]: action.payload
				}
			};

		case REMOVE_PRODUCT: {
			const { [action.payload.id]: oldItem, ...items } = state.items;

			return {
				...state,
				items
			};
		}

		case UPDATE_QUANTITY:
			return {
				...state,
				items: {
					...state.items,
					[action.payload.id]: {
						...state.items[action.payload.id],
						quantity: action.payload.quantity
					}
				}
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
