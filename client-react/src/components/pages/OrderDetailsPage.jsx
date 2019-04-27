import React, {Component} from "react";
import {connect} from "react-redux";

import {loadOrder} from "../../redux/actions/orders";
import {getOrderById} from "../../redux/reducers/OrdersReducer";
import HomepageLayout from "../Layouts/HomepageLayout";

class OrderDetailsPage extends Component {

	componentDidMount() {
		const {id: orderId} = this.props.match.params;
		this.props.loadOrder(orderId);
	}

	render() {

		return (
			<HomepageLayout className="py-3">
				<h1>Order Details</h1>
			</HomepageLayout>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	order: getOrderById(state.orders, ownProps.match.params.id)
});

const mapDispatchToProps = {
	loadOrder
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderDetailsPage);
