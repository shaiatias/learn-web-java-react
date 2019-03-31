import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Row} from "reactstrap";

import HomepageLayout from "../Layouts/HomepageLayout";
import {addItemToCart, clearCart, updateItemQuantity} from "../../redux/actions/cart";
import CartItems from "../CartItems";
import CartSummary from "../CartSummary";
import {getCartItemsArr} from "../../redux/reducers/CartReducer";


class CartPage extends Component {

	render() {

		const {items, clearCart} = this.props;

		return (
			<HomepageLayout className={"py-3"}>

				<h1>My Cart</h1>

				<Row>
					<Col md={8}>
						<h2>Items ({items.length})</h2>
						<CartItems items={items}/>
					</Col>
					<Col md={4}>
						<h2>Summary</h2>
						<Row className={"my-4"}>
							<CartSummary />
						</Row>
						<Row>
							<Button onClick={clearCart}>Clear Cart</Button>{" "}
							<Button>Proceed To Checkout</Button>
						</Row>
					</Col>
				</Row>

			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({
	items: getCartItemsArr(state.cart)
});

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item)),
	updateItemQuantity: (id, quantity) => dispatch(updateItemQuantity(id, quantity)),
	clearCart: () => dispatch(clearCart())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartPage);
