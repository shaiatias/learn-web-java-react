import React, { Component, Fragment, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Label, Input, Form, Button } from "reactstrap";

import HomepageLayout from "../Layouts/HomepageLayout";
import { loadProduct } from "../../redux/actions/product";
import { getProductById } from "../../redux/reducers/ProductReducer";
import { addItemToCart } from "../../redux/actions/cart";

class ViewProductPage extends Component {
	componentDidMount() {
		const { productId } = this.props.match.params;
		setTimeout(() => {
			this.props.loadProduct(productId);
		}, 0);
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
	const [size, setSize] = useState("");

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
			<Row>
				<Col>
					<img src={product.imageUrl} alt={product.description} />
				</Col>
				<Col>
					<Row>
						<Col>{product.name}</Col>
					</Row>
					<Row>
						<Col>{product.price}$</Col>
					</Row>
					<Form onSubmit={e => handleSubmit(e)}>
						<FormGroup block>
							<Label>Size:</Label>
							<Input
								type="select"
								onChange={e => handleMultiSelectChange(e)}
							>
								{product.availableSizes.map(size => (
									<option key={size}>{size}</option>
								))}
							</Input>
						</FormGroup>
						<Button block>Add To Cart</Button>
					</Form>
				</Col>
			</Row>
			<Row>
				<Col>
					<h5>Product Details</h5>
					<p>{product.description}</p>
				</Col>
				<Col>TBD</Col>
				<Col>TBD</Col>
			</Row>
			<Row>
				<RecentlyViewed />
			</Row>
		</Fragment>
	);
};

const RecentlyViewed = () => <div>TBD</div>;

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
