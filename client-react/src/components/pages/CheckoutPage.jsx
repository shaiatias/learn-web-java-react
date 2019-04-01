import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Form, FormGroup, FormText, Input, Label, Row} from "reactstrap";

import HomepageLayout from "../Layouts/HomepageLayout";
import {getCartItemsArr, getCartPrice} from "../../redux/reducers/CartReducer";
import CartSummary from "../CartSummary";


class CheckoutPage extends Component {

	render() {

		const {shipping, totalBeforeShipping} = this.props;

		return (
			<HomepageLayout className="py-3">

				<h1>Checkout</h1>

				<Form>

					<Row>
						<Col sm={6}>

							<h2 className="my-3">Billing Details</h2>

							<FormGroup>
								<Label for="exampleEmail">Name</Label>
								<Input type="email" name="email" id="exampleEmail" />
							</FormGroup>

							<FormGroup>
								<Label for="exampleEmail">Email Address</Label>
								<Input type="email" name="email" id="exampleEmail" />
							</FormGroup>

							<FormGroup>
								<Label for="exampleEmail">Country</Label>
								<Input type="email" name="email" id="exampleEmail" />
							</FormGroup>

							<Row>
								<Col md={6}>
									<FormGroup>
										<Label for="exampleEmail">State</Label>
										<Input type="email" name="email" id="exampleEmail" />
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label for="exampleEmail">Zip Code</Label>
										<Input type="email" name="email" id="exampleEmail" />
									</FormGroup>
								</Col>
							</Row>

							<h2 className="mt-4">Payment Method</h2>

							<FormGroup>
								<Label for="exampleEmail">Card Number</Label>
								<Input type="email" name="email" id="exampleEmail"
									   placeholder="0123 4567 8901 2345"/>
							</FormGroup>

							<Row>
								<Col md={4}>
									<FormGroup>
										<Label for="exampleEmail">Exp YYYY</Label>
										<Input type="email" name="email" id="exampleEmail"
											   placeholder="2020"/>
									</FormGroup>
								</Col>
								<Col md={4}>
									<FormGroup>
										<Label for="exampleEmail">Exp MM</Label>
										<Input type="email" name="email" id="exampleEmail"
											   placeholder="01"/>
									</FormGroup>
								</Col>
								<Col md={4}>
									<FormGroup>
										<Label for="exampleEmail">Security Code</Label>
										<Input type="email" name="email" id="exampleEmail"
											   placeholder="123"/>
									</FormGroup>
								</Col>
							</Row>

							<FormText color="muted">
								By confirming, you agree the Terms and Conditions
							</FormText>

							<Button color="primary" className="my-4" block>Place Order</Button>

						</Col>

						<Col lg={6}>

							<h2 className="my-3">Cart Summary</h2>

							<CartSummary shipping={shipping} totalBeforeShipping={totalBeforeShipping}/>

						</Col>
					</Row>
				</Form>

			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({
	items: getCartItemsArr(state.cart),
	shipping: state.cart.shipping,
	totalBeforeShipping: getCartPrice(state.cart),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CheckoutPage);
