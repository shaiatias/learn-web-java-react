import { CREATE_PRODUCT_SUCCESS } from "../actions/product";

const initialState = {
	name: "",
	brand: "",
	description: "",
	imageUrl: "",
	availableSizes: [],
	categories: [],
	price: "",
	tags: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PRODUCT_SUCCESS:
			return {
				...state
			};

		default:
			return state;
	}
};
