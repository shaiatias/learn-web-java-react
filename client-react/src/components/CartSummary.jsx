import React from "react";
import {Card, CardBody, CardText, Col, Row} from "reactstrap";
import {connect} from "react-redux";


function CartSummary(props) {
	const {subtotalPrice, shippingPrice, totalPrice} = props;
	return (
		<Card>
			<CardBody>
				<CardText>
					<Row>
						<Col>Subtotal:</Col>
						<Col> {subtotalPrice}$</Col>
					</Row>
					<Row>
						<Col>Shipping:</Col>
						<Col>{shippingPrice}$</Col>
					</Row>
					<Row>
						<Col>Total:</Col>
						<Col>{totalPrice}$</Col>
					</Row>
				</CardText>
			</CardBody>
		</Card>
	)
}

const mapStateToProps = state => ({
	shippingPrice: state.cart.shippingPrice,
	subtotalPrice: state.cart.subtotalPrice,
	totalPrice: state.cart.totalPrice,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartSummary);
