export const CREATE_PRODUCT_REQUEST = "[PRODUCT] CREATE_PRODUCT_REQUEST";

export const createProduct = (
	name,
	brand,
	description,
	imageUrl,
	availableSizes,
	categories,
	price,
	tags
) => ({
	type: CREATE_PRODUCT_REQUEST,
	payload: {
		name,
		brand,
		description,
		imageUrl,
		availableSizes,
		categories,
		price,
		tags
	}
});

export const CREATE_PRODUCT_SUCCESS = "[PRODUCT] CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILED = "[PRODUCT] CREATE_PRODUCT_FAILED";
