import React, { Component, Fragment, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, Input, Form, Button } from "reactstrap";

import HomepageLayout from "../Layouts/HomepageLayout";
import { loadProduct } from "../../redux/actions/product";
import { getProductById } from "../../redux/reducers/ProductReducer";
import { addItemToCart } from "../../redux/actions/cart";

import "./ViewProductPage.css";

class ViewProductPage extends Component {
	componentDidMount() {
		const { productId } = this.props.match.params;
		this.props.loadProduct(productId);
	}

	render() {
		const { productId } = this.props.match.params;
		const { products: productsReducerState, addItemToCart } = this.props;

		const product = getProductById(productsReducerState, productId);

		const ProductEl = product ? (
			<ProductPage product={product} addItemToCart={addItemToCart} />
		) : (
				<div>loading</div>
			);

		return <HomepageLayout>{ProductEl}</HomepageLayout>;
	}
}

const ProductPage = ({ product, addItemToCart }) => {
	const [size, setSize] = useState(product.availableSizes[0]);

	const handleMultiSelectChange = e => {
		const selectedValues = Array.from(e.target.options)
			.filter(option => option.selected)
			.map(option => option.value);

		setSize(selectedValues[0]);
	};

	const handleSubmit = e => {
		e.preventDefault();
		addItemToCart(product.id, size);
	};

	return (
		<Fragment>
			<Row className="my-4">
				<Col md={8} className="text-right">
					<img src={product.imageUrl} alt={product.description} />
				</Col>
				<Col>
					<Row className="my-4">
						<Col className="lead">{product.name}</Col>
					</Row>
					<Row className="my-4">
						<Col tag="strong">{product.price}$</Col>
					</Row>
					<Row className="my-4">
						<Col>
							<Form onSubmit={e => handleSubmit(e)}>
								<FormGroup block>
									<Label>SIZE</Label>
									<Input
										type="select"
										onChange={e =>
											handleMultiSelectChange(e)
										}
									>
										{product.availableSizes.map(size => (
											<option key={size}>{size}</option>
										))}
									</Input>
								</FormGroup>
								<Button
									block
									color={"primary"}
									className="text-uppercase p-2"
								>
									Add To Cart
								</Button>
							</Form>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col>
					<h5>Product Details</h5>
					<p className="lead">{product.description}</p>
				</Col>
			</Row>
			<Row>
				<RecentlyViewed />
			</Row>
		</Fragment>
	);
};

const RecentlyViewed = () => <div />;

const mapStateToProps = state => ({
	products: state.products
});

const mapDispatchToProps = dispatch => ({
	loadProduct: id => dispatch(loadProduct(id)),
	addItemToCart: (id, size) => dispatch(addItemToCart(id, size))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewProductPage);
