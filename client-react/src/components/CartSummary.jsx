import React from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

function CartSummary() {
	return (
		<Card>
			<CardBody>
				<CardTitle>Card title</CardTitle>
				<CardSubtitle>Card subtitle</CardSubtitle>
				<CardText>Some quick example text to build on the card title and make up the bulk of the card's
					content.</CardText>
			</CardBody>
		</Card>
	)
}

export default CartSummary;
