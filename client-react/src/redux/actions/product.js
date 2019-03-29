export const SAVE_PRODUCT = "[PRODUCT] SAVE_PRODUCT";

export const saveProduct = (
	name,
	brand,
	description,
	imageUrl,
	availableSizes,
	categories,
	price,
	tags
) => ({
	type: SAVE_PRODUCT,
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

export const SAVE_PRODUCT_SUCCESS = "[PRODUCT] SAVE_PRODUCT_SUCCESS";
export const SAVE_PRODUCT_FAILED = "[PRODUCT] SAVE_PRODUCT_FAILED";
