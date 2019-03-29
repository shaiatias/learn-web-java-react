import { SAVE_PRODUCT } from "../actions/product";

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
		case SAVE_PRODUCT:
			return {
				...state
			};

		default:
			return state;
	}
};
