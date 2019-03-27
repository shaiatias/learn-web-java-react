import React, { Component } from "react";
import { Container } from "reactstrap";

import "./LoginLayout.css";

class LoginLayout extends Component {
	render() {
		const { children } = this.props;

		return (
			<Container className="h-100">
				<div className="d-flex justify-content-center h-100">
					<div className="form-content">
						{children}
					</div>
				</div>
			</Container>
		);
	}
}

export default LoginLayout;
