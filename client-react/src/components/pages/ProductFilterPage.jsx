import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
	Card,
	CardDeck,
	CardBody,
	CardImg,
	CardTitle,
	CardSubtitle
} from "reactstrap";

import HomepageLayout from "../Layouts/HomepageLayout";
import {
	loadProduct,
	loadProductByCategories
} from "../../redux/actions/product";
import { addItemToCart } from "../../redux/actions/cart";
import { getProductByCategory } from "../../redux/reducers/ProductReducer";

class ProductFilterPage extends Component {
	componentDidMount() {
		const { category } = this.props;
		this.props.loadProductByCategories([category]);
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
		<CardDeck>
			{props.products.map(product => (
				<Card
					key={product.id}
					className="col-md-3 p-0"
					onClick={() => props.navigateToProduct(product.id)}
				>
					<CardImg
						top
						width="100%"
						src={product.imageUrl}
						alt={product.description}
					/>
					<CardBody>
						<CardTitle>{product.name}</CardTitle>
						<CardSubtitle>{product.price}$</CardSubtitle>
					</CardBody>
				</Card>
			))}
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
