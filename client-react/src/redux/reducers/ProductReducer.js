import {
	CREATE_PRODUCT_SUCCESS,
	LOAD_PRODUCT_SUCCESS
} from "../actions/product";

const initialState = {
	products: {},
	productForm: {
		name: "",
		brand: "",
		description: "",
		imageUrl: "",
		availableSizes: [],
		categories: [],
		price: "",
		tags: []
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PRODUCT_SUCCESS:
			return {
				...state
			};

		case LOAD_PRODUCT_SUCCESS:
			return {
				...state,
				products: {
					...state.products,
					[action.payload.id]: action.payload
				}
			};

		default:
			return state;
	}
};

export const getProductById = (state, productId) => {
	return state.products[productId];
};
