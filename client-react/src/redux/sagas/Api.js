export const Api = {
	*login(email, password) {
		const headers = {
			"Content-Type": "application/json"
		};

		if (email && password) {
			const creds = btoa(`${email}:${password}`);
			headers["Authorization"] = `Basic ${creds}`;
		}

		const res = yield fetch("/auth/login", {
			method: "POST",
			headers
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*logout() {
		const res = yield fetch("/auth/logout", {
			method: "POST"
		});

		if (res.ok) {
			return;
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*register(name, email, password, passwordConfirm) {
		const res = yield fetch("/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				email,
				password,
				passwordConfirm
			})
		});

		if (res.ok) {
			return;
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*updateCart(productId, quantity, size) {
		const res = yield fetch("/api/carts", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				productId,
				quantity,
				size
			})
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	*clearCart() {
		const res = yield fetch(`/api/carts`, {
			method: "DELETE"
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*loadCart() {
		const res = yield fetch(`/api/carts`, {
			method: "GET"
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*createProduct(
		name,
		brand,
		description,
		imageUrl,
		availableSizes,
		categories,
		price,
		tags
	) {
		const res = yield fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				brand,
				description,
				imageUrl,
				availableSizes,
				categories,
				price,
				tags
			})
		});

		if (res.ok) {
			return;
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*getProductById(id) {
		const res = yield fetch(`/api/products/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*getProductByCategories(categories) {
		const url = `/api/products?categories=${encodeURIComponent(
			categories
		)}`;

		const res = yield fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	
	*getOrderById(orderId) {
		const url = `/api/orders/${orderId}`;

		const res = yield fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	
	*getMyOrders() {
		const url = `/api/orders`;

		const res = yield fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	
	*getAllOrders() {
		const url = `/api/orders/all`;

		const res = yield fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},

	*confirmPayment(
		name,
		email,
		country,
		state,
		zip,
		cc,
		expYear,
		expMonth,
		cvv
	) {
		const res = yield fetch("/api/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				email,
				country,
				state,
				zip,
				cc,
				expYear,
				expMonth,
				cvv
			})
		});

		if (res.ok) {
			return yield res.json();
		} else {
			const err = yield res.text();
			throw Error(err);
		}
	},
	
};
