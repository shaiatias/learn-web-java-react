import React, {Component} from "react";
import {connect} from "react-redux";

import HomepageLayout from "../Layouts/HomepageLayout";

class ProfilePage extends Component {


	render() {

		return (
			<HomepageLayout className="py-3">
				<h1>My Profile</h1>


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
)(ProfilePage);
