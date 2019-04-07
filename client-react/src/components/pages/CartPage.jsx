import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

import HomepageLayout from "../Layouts/HomepageLayout";
import {
	addItemToCart,
	clearCart,
	updateItemQuantity
} from "../../redux/actions/cart";
import CartItems from "../CartItems";
import CartSummary from "../CartSummary";
import {
	getCartItemsArr,
	getCartPrice
} from "../../redux/reducers/CartReducer";
import { loadProduct } from "../../redux/actions/product";

class CartPage extends Component {
	render() {
		const { items, clearCart, shipping, totalBeforeShipping } = this.props;

		return (
			<HomepageLayout className="py-3">
				<h1>My Cart</h1>

				<Row>
					<Col md={8}>
						<h2>Items ({items.length})</h2>
						<CartItems items={items} />
					</Col>
					<Col md={4}>
						<h2>Summary</h2>
						<Row className="my-4">
							<Col>
								<CartSummary
									shipping={shipping}
									totalBeforeShipping={totalBeforeShipping}
								/>
							</Col>
						</Row>
						<Row>
							<Button onClick={clearCart}>Clear Cart</Button>{" "}
							<NavLink to="/checkout">
								Proceed To Checkout
							</NavLink>
						</Row>
					</Col>
				</Row>
			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({
	items: getCartItemsArr(state.cart),
	shipping: state.cart.shipping,
	totalBeforeShipping: getCartPrice(state.cart)
});

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item)),
	updateItemQuantity: (id, quantity) =>
		dispatch(updateItemQuantity(id, quantity)),
	loadProduct: id => dispatch(loadProduct(id)),
	clearCart: () => dispatch(clearCart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartPage);
