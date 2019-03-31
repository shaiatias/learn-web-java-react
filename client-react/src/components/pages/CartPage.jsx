import React, { Component } from "react";
import { connect } from "react-redux";
import {Col, Row} from "reactstrap";

import HomepageLayout from "../Layouts/HomepageLayout";
import { addItemToCart } from "../../redux/actions/cart";


class CartPage extends Component {

	render() {
		return (
			<HomepageLayout>

				<h1>Cart</h1>

				<Row>
					<Col md={8}>
						<h2>Items</h2>

					</Col>
					<Col md={4}>
						<h2>Summary</h2>

					</Col>
				</Row>



			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartPage);
