import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Row} from "reactstrap";
import {NavLink} from "react-router-dom";

import HomepageLayout from "../Layouts/HomepageLayout";
import {addItemToCart, clearCart, loadCart, updateItemQuantity} from "../../redux/actions/cart";
import CartItems from "../CartItems";
import CartSummary from "../CartSummary";
import {getCartItemsArr, getCartPrice} from "../../redux/reducers/CartReducer";
import {loadProduct} from "../../redux/actions/product";

class CartPage extends Component {

	componentDidMount() {
		this.props.loadCart();
	}

	render() {
		const {items, clearCart, shipping, totalBeforeShipping} = this.props;

		return (
			<HomepageLayout className="py-3">
				<h1>My Cart</h1>

				<Row>
					<Col md={8}>
						<h2>Items ({Object. keys(items).length})</h2>
						<CartItems items={items}/>
					</Col>
					<Col md={4}>
						<h2>Summary</h2>
						<Row className="my-4">
							<Col>
								<CartSummary />
							</Col>
						</Row>
						<Row>
							<Col>
								<Button color={"secondary"} onClick={clearCart} block>Clear Cart</Button>{" "}
								<Button color={"primary"} tag={NavLink} to="/checkout" block>
									Proceed To Checkout
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({
	items: state.cart.items,
	shipping: state.cart.shipping,
	totalBeforeShipping: getCartPrice(state.cart)
});

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item)),
	updateItemQuantity: (id, quantity) =>
		dispatch(updateItemQuantity(id, quantity)),
	loadProduct: id => dispatch(loadProduct(id)),
	loadCart: () => dispatch(loadCart({includeProducts: true})),
	clearCart: () => dispatch(clearCart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartPage);
