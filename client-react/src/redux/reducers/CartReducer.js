import {RESET_ALL} from "../actions/users";
import {ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT, UPDATE_QUANTITY} from "../actions/cart";

const initialState = {
	items: {
		1: {
			id: 1,
			img: "https://static3.cilory.com/273124-thickbox_default/nologo-navy-casual-shirt.jpg",
			name: "blue t shirt",
			quantity: 2,
			totalPrice: "30.00",
			description: "blah"
		},
		2: {
			id: 2,
			img: "https://static3.cilory.com/273124-thickbox_default/nologo-navy-casual-shirt.jpg",
			name: "blue t shirt",
			quantity: 2,
			totalPrice: "30.00",
			description: "blah"
		}
	},
	shipping: 15
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
			const {[action.payload.id]: oldItem, ...items} = state.items;

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

		case CLEAR_CART:
			return {
				...state,
				items: {}
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
