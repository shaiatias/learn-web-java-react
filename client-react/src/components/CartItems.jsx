import React, { Component } from "react";
import ListGroupItem from "reactstrap/es/ListGroupItem";
import { Button, Col, Row } from "reactstrap";
import ListGroup from "reactstrap/es/ListGroup";
import { connect } from "react-redux";

import "./CartItems.css";
import { updateItemQuantity } from "../redux/actions/cart";
import { loadProduct } from "../redux/actions/product";
import { getProductById } from "../redux/reducers/ProductReducer";

class CartItems extends Component {
	componentDidMount() {
		const { loadProduct, items } = this.props;

		items.forEach(item => {
			loadProduct(item.productId);
		});
	}

	render() {
		const { items, updateItemQuantity } = this.props;
		const { products: productsReducerState } = this.props;

		const products = items
			.map(item => getProductById(productsReducerState, item.productId))
			.filter(item => !!item);

		return (
			<ListGroup className={"my-3"}>
				{products.map(item => (
					<ListGroupItem className="justify-content-between cart-item-row">
						<Row>
							<Col className={"text-center"}>
								<img
									src={item.img}
									height={100}
									alt={item.name}
								/>
							</Col>
							<Col md={6}>
								<h4>{item.name}</h4>
								<pre>{item.description}</pre>
								<pre>{item.size}</pre>
								<pre>{item.totalPrice}$</pre>
							</Col>
							<Col
								className={
									"d-flex justify-content-center align-self-center"
								}
							>
								<Row>
									<Button
										color="link"
										onClick={() =>
											updateItemQuantity(
												item.id,
												item.quantity - 1
											)
										}
									>
										-
									</Button>
									<input
										className={"cart-item-amount-box"}
										type="number"
										value={item.quantity}
									/>
									<Button
										color="link"
										onClick={() =>
											updateItemQuantity(
												item.id,
												item.quantity + 1
											)
										}
									>
										+
									</Button>
								</Row>
							</Col>
						</Row>
					</ListGroupItem>
				))}
			</ListGroup>
		);
	}
}

const mapStateToProps = state => ({
	products: state.products
});

const mapDispatchToProps = {
	updateItemQuantity,
	loadProduct
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartItems);
