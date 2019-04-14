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

//

export const LOAD_PRODUCT_REQUEST = "[PRODUCT] LOAD_PRODUCT_REQUEST";

export const loadProduct = (productId, force = false) => ({
	type: LOAD_PRODUCT_REQUEST,
	payload: { productId },
	meta: {
		force
	}
});

export const LOAD_PRODUCT_SUCCESS = "[PRODUCT] LOAD_PRODUCT_SUCCESS";
export const LOAD_PRODUCT_FAILED = "[PRODUCT] LOAD_PRODUCT_FAILED";

//

export const LOAD_FILTERED_PRODUCTS_REQUEST =
	"[PRODUCT] LOAD_FILTERED_PRODUCTS_REQUEST";

export const loadProductByCategories = categories => ({
	type: LOAD_FILTERED_PRODUCTS_REQUEST,
	payload: { categories }
});

export const LOAD_FILTERED_PRODUCTS_SUCCESS =
	"[PRODUCT] LOAD_FILTERED_PRODUCTS_SUCCESS";
export const LOAD_FILTERED_PRODUCTS_FAILED =
	"[PRODUCT] LOAD_FILTERED_PRODUCTS_FAILED";
