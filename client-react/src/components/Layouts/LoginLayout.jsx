import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./LoginLayout.css";

class LoginLayout extends Component {
	render() {
		const { children } = this.props;

		return (
			<Container className="h-100">
				<div className="d-flex justify-content-center h-100">

					<div className="form-content">
						<div className="text-center my-5">
							<NavLink to="/"  >
								<img src="asos-logo-95x28.png" alt="asos logo" />
							</NavLink>
						</div>

						{children}
					</div>
				</div>
			</Container>
		);
	}
}

export default LoginLayout;
