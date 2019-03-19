import React, { Component } from "react";
import { connect } from "react-redux";
import HomepageLayout from "../Layouts/HomepageLayout";
import { addItemToCart } from "../../redux/actions/cart";

class HomePage extends Component {
	addItem = () => {
		this.props.addItemToCart({
			id: 1,
			name: "t shirt",
			quantity: 3
		});
	};

	render() {
		return (
			<HomepageLayout>
				click here to add item to cart
				<button onClick={this.addItem}>add</button>
			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage);
