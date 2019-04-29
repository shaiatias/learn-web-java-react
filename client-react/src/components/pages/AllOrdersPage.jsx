import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { Table } from "reactstrap";

import { getOrdersArr } from "../../redux/reducers/OrdersReducer";
import { loadAllOrders } from "../../redux/actions/orders";
import HomepageLayout from "../Layouts/HomepageLayout";

class AllOrdersPage extends Component {

	componentDidMount() {
		this.props.loadAllOrders();
	}

	render() {
		const { orders } = this.props;

		return (
			<HomepageLayout className="py-3">
				<h1>All Orders</h1>

				<Table bordered>
					<thead>
						<tr>
							<th>Order #</th>
							<th>User #</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => 
						<tr key={order.id} onClick={() => this.props.goToOrder(order.id)}>
							<th scope="row">{order.id}</th>
							<td>{order.userId}</td>
							<td>{order.totalPrice}</td>
						</tr>
						)}
					</tbody>
				</Table>

			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({
	orders: getOrdersArr(state.orders)
});

const mapDispatchToProps = dispatch => ({
	loadAllOrders: () => dispatch(loadAllOrders()),
	goToOrder: (id) => dispatch(push(`/order/${id}`)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllOrdersPage);
