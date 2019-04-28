import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import { loadOrder } from "../../redux/actions/orders";
import { getOrderById } from "../../redux/reducers/OrdersReducer";
import { getProductById } from "../../redux/reducers/ProductReducer";
import HomepageLayout from "../Layouts/HomepageLayout";

class OrderDetailsPage extends Component {

	componentDidMount() {
		const { id: orderId } = this.props.match.params;
		this.props.loadOrder(orderId);
	}

	render() {

		const { order, products: productsReducer } = this.props;
		
		const getProductName = productId => {
			const p = getProductById(productsReducer, productId);
			return p && p.name;
		}

		const orderComponent = order ? (
			<Col>
				<Row>
					<strong>Order #</strong>: {order.id}
				</Row>
				<Row>
					<strong>User #</strong>: {order.userId}
				</Row>
				<Row>
					<Col>
						<Row>
							<Col>Product #</Col>
							<Col>Name</Col>
							<Col>Quantity</Col>
						</Row>
						{Object.values(order.products).map(product => <Row>
							<Col>{product.productId}</Col>
							<Col>{getProductName(product.productId)}</Col>
							<Col>{product.quantity}</Col>
						</Row>
						)}
					</Col>
				</Row>
				<Row>
					<strong>Subtotal Price</strong>: {order.subtotalPrice}$
				</Row>
				<Row>
					<strong>Shipping Price</strong>: {order.shippingPrice}$
				</Row>
				<Row>
					<strong>Total Price</strong>: {order.totalPrice}$
				</Row>
			</Col>
		) : (
				<div>loading</div>
			);

		return (
			<HomepageLayout className="py-3">
				<h1>Order Details</h1>

				{orderComponent}

				{/* <p>
					{
						JSON.stringify(order)
					}
				</p> */}
			</HomepageLayout>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	order: getOrderById(state.orders, ownProps.match.params.id),
	products: state.products,
});

const mapDispatchToProps = dispatch => ({
	loadOrder: orderId => dispatch(loadOrder(orderId, { includeProducts: true }))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderDetailsPage);
