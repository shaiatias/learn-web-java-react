import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
	Col,
	Card,
	CardDeck,
	CardBody,
	CardImg,
	CardTitle,
	CardSubtitle,
	Row
} from "reactstrap";

import HomepageLayout from "../Layouts/HomepageLayout";
import {
	loadProduct,
	loadProductByCategories
} from "../../redux/actions/product";
import { addItemToCart } from "../../redux/actions/cart";
import { getProductByCategory } from "../../redux/reducers/ProductReducer";

import "./ProductFilterPage.css";

class ProductFilterPage extends Component {

	category = null;

	componentDidMount() {
		const { category } = this.props;
		this.category = category;

		this.props.loadProductByCategories([category]);
	}

	componentWillReceiveProps(props, context) {
		const { category } = props;

		if (this.category !== category) {
			this.category = category;
			this.props.loadProductByCategories([category]);
		}
	}

	render() {
		const { category } = this.props;

		const {
			products: productsReducerState,
			navigateToProduct
		} = this.props;

		const products = getProductByCategory(productsReducerState, category);

		const ProductEl = products ? (
			<ProductList
				products={products}
				navigateToProduct={navigateToProduct}
			/>
		) : (
				<div>loading</div>
			);

		return (
			<HomepageLayout>
				<h1 className="text-capitalize">{category}</h1>
				{ProductEl}
			</HomepageLayout>
		);
	}
}

const ProductList = props => {
	return (
		<CardDeck className="products-rows">
			<Row>
				{props.products.map(product => (
					<Col md={3} sm={6} xs={12}>
						{/* <Row> */}
							<Card
								key={product.id}
								className="product-card p-0 mt-2 mb-4 mx-0 cursor-pointer"
								onClick={() => props.navigateToProduct(product.id)}
							>
								<CardImg
									top
									width="100%"
									src={product.imageUrl}
									alt={product.description}
								/>
								<CardBody>
									<CardTitle className="text-nowrap overflow-hidden ">
										{product.name}
									</CardTitle>
									<CardSubtitle>{product.price}$</CardSubtitle>
								</CardBody>
							</Card>
						{/* </Row> */}
					</Col>
				))}
			</Row>
		</CardDeck>
	);
};

const mapStateToProps = state => ({
	products: state.products
});

const mapDispatchToProps = dispatch => ({
	loadProduct: id => dispatch(loadProduct(id)),
	loadProductByCategories: query => dispatch(loadProductByCategories(query)),
	addItemToCart: (id, size) => dispatch(addItemToCart(id, size)),
	navigateToProduct: id => dispatch(push(`/products/${id}`))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductFilterPage);
