import React, {Component} from "react";
import {connect} from "react-redux";

import HomepageLayout from "../Layouts/HomepageLayout";

class OrderDetailsPage extends Component {

	componentDidMount() {
	}

	render() {

		return (
			<HomepageLayout className="py-3">
				<h1>Order Details</h1>
			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderDetailsPage);
