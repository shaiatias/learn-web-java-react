import React from "react";
import {Card, CardBody, CardText, Col, Row} from "reactstrap";


function CartSummary({totalBeforeShipping, shipping}) {
	return (
		<Card>
			<CardBody>
				<CardText>
					<Row>
						<Col>Subtotal:</Col>
						<Col> {totalBeforeShipping}$</Col>
					</Row>
					<Row>
						<Col>Shipping:</Col>
						<Col>{shipping}$</Col>
					</Row>
					<Row>
						<Col>Total:</Col>
						<Col>{totalBeforeShipping + shipping}$</Col>
					</Row>
				</CardText>
			</CardBody>
		</Card>
	)
}

export default CartSummary;
