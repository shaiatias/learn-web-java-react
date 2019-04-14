import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, FormText, Label, Row} from "reactstrap";
import {AvForm, AvGroup, AvInput} from "availity-reactstrap-validation";

import HomepageLayout from "../Layouts/HomepageLayout";
import CartSummary from "../CartSummary";

import {confirmPayment} from "../../redux/actions/cart";


class CheckoutPage extends Component {

	handleValidSubmit = (event, values) => {
		const {name, email, country, state, zip, cc, expYear, expMonth, cvv} = values;
		this.props.confirmPayment(name, email, country, state, zip, cc, expYear, expMonth, cvv);
	};

	render() {

		const defaultValues = {
			name: "shai atias",
			email: "shai@shai.com",
			country: "israel",
			state: "il",
			zip: "1234",
			cc: "123456789456789",
			expYear: 2019,
			expMonth: 1,
			cvv: "123"
		};

		return (
			<HomepageLayout className="py-3">

				<h1>Checkout</h1>

				<AvForm onValidSubmit={this.handleValidSubmit} model={defaultValues}>

					<Row>
						<Col sm={6}>

							<h2 className="my-3">Billing Details</h2>

							<AvGroup>
								<Label>Name</Label>
								<AvInput type="text" name="name" required/>
							</AvGroup>

							<AvGroup>
								<Label>Email Address</Label>
								<AvInput type="email" name="email" required/>
							</AvGroup>

							<AvGroup>
								<Label>Country</Label>
								<AvInput type="text" name="country" required/>
							</AvGroup>

							<Row>
								<Col md={6}>
									<AvGroup>
										<Label>State</Label>
										<AvInput type="text" name="state" required/>
									</AvGroup>
								</Col>
								<Col md={6}>
									<AvGroup>
										<Label>Zip Code</Label>
										<AvInput type="text" name="zip" required/>
									</AvGroup>
								</Col>
							</Row>

							<h2 className="mt-4">Payment Method</h2>

							<AvGroup>
								<Label>Card Number</Label>
								<AvInput type="text"
										 name="cc"
										 placeholder="0123 4567 8901 2345"
										 validate={{
											 pattern: {value: '^[0-9]+$'},
											 minLength: {value: 8},
											 maxLength: {value: 21}
										 }}
										 required
								/>
							</AvGroup>

							<Row>
								<Col md={4}>
									<AvGroup>
										<Label>Exp YYYY</Label>
										<AvInput type="year"
												 name="expYear"
												 min={2000}
												 max={2100}
												 placeholder={2018}
												 required
										/>
									</AvGroup>
								</Col>
								<Col md={4}>
									<AvGroup>
										<Label>Exp MM</Label>
										<AvInput type="number"
												 name="expMonth"
												 min={1}
												 max={12}
												 placeholder={1}
												 required
										/>
									</AvGroup>
								</Col>
								<Col md={4}>
									<AvGroup>
										<Label>Security Code</Label>
										<AvInput type="text"
												 name="cvv"
												 placeholder="123"
												 validate={{
													 pattern: {value: '^[0-9]+$'},
													 minLength: {value: 3},
													 maxLength: {value: 4}
												 }}
												 required
										/>
									</AvGroup>
								</Col>
							</Row>

							<FormText color="muted">
								By confirming, you agree the Terms and Conditions
							</FormText>

							<Button color="primary" className="my-4" block>Place Order</Button>

						</Col>

						<Col lg={6}>

							<h2 className="my-3">Cart Summary</h2>

							<CartSummary/>

						</Col>
					</Row>
				</AvForm>

			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	confirmPayment
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CheckoutPage);
