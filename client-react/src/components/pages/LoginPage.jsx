import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginLayout from "../Layouts/LoginLayout";

import { requestLogin } from "../../redux/actions/authentication";

class LoginPage extends Component {
	state = {
		email: "",
		password: "",
		submitted: false
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ ...this.state, submitted: true });
		const { email, password } = this.state;
		this.props.requestLogin(email, password);
	};

	render() {
		const { email, password, submitted } = this.state;
		return (
			<LoginLayout>
				<form name="form" onSubmit={this.handleSubmit}>
					<div
						className={
							"form-group" +
							(submitted && !email ? " has-error" : "")
						}
					>
						<label htmlFor="email">Email</label>
						<input
							autoFocus="true"
							type="text"
							className="form-control"
							name="email"
							value={email}
							onChange={this.handleChange}
						/>
						{submitted && !email && (
							<div className="help-block">Email is required</div>
						)}
					</div>
					<div
						className={
							"form-group" +
							(submitted && !password ? " has-error" : "")
						}
					>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
						{submitted && !password && (
							<div className="help-block">
								Password is required
							</div>
						)}
					</div>
					<div className="form-group">
						<button className="btn btn-primary">Login</button>
						<Link to="/register" className="btn btn-link">
							Register
						</Link>
					</div>
				</form>
			</LoginLayout>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	requestLogin: (email, password) => dispatch(requestLogin(email, password))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage);
