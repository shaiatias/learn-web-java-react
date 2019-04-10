import React, { Component } from "react";
import { connect } from "react-redux";

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

		const { products: productsReducerState } = this.props;
		const products = getProductByCategory(productsReducerState, category);

		const ProductEl = products ? (
			<ProductList products={products} />
		) : (
			<div>loading</div>
		);

		return <HomepageLayout>{ProductEl}</HomepageLayout>;
	}
}

const ProductList = props => (
	<ul>
		{props.products.map(product => (
			<li key={product.id}>{product.name}</li>
		))}
	</ul>
);

const mapStateToProps = state => ({
	products: state.products
});

// const mapDispatchToProps = dispatch => ({
// 	loadProduct: id => dispatch(loadProduct(id)),
// 	loadProductByCategories: query => dispatch(loadProductByCategories(query)),
// 	addItemToCart: (id, size) => dispatch(addItemToCart(id, size))
// });

const mapDispatchToProps = {
	loadProduct,
	loadProductByCategories,
	addItemToCart
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductFilterPage);
