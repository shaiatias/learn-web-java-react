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

class OrdersPage extends Component {

	componentDidMount() {
	}

	render() {

		return (
			<HomepageLayout className="py-3">
				<h1>My Orders</h1>


			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrdersPage);
