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

		Object.keys(items).forEach(productId => {
			loadProduct(productId);
		});
	}

	render() {
		const {
			items,
			updateItemQuantity,
			products: productsReducerState
		} = this.props;

		const products = Object.keys(items)
			.map(productId => getProductById(productsReducerState, productId))
			.filter(item => !!item)
			.map(product => ({
				...items[product.id],
				...product
			}));

		return (
			<ListGroup className={"my-3"}>
				{products.map(item => (
					<ListGroupItem
						key={item.productId}
						className="justify-content-between cart-item-row"
					>
						<Row>
							<Col className={"text-center"}>
								<img
									src={item.imageUrl}
									height={100}
									alt={item.name}
								/>
							</Col>
							<Col md={6}>
								<h4 className={"run-on-text"}>{item.name}</h4>
								<p>{item.description}</p>
								<pre>{item.size}</pre>
								<pre>{item.price}$</pre>
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
