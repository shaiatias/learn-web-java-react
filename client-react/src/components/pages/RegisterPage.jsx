import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginLayout from "../Layouts/LoginLayout";

import { requestRegister } from "../../redux/actions/authentication";

class RegisterPage extends Component {
	state = {
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
		submitted: false
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { name, email, password, passwordConfirm } = this.state;

		this.props.requestRegister(name, email, password, passwordConfirm);
	};

	render() {
		const {
			name,
			email,
			password,
			passwordConfirm,
			submitted
		} = this.state;
		return (
			<LoginLayout>
				<form name="form" onSubmit={this.handleSubmit}>
					<div
						className={
							"form-group" +
							(submitted && !name ? " has-error" : "")
						}
					>
						<label htmlFor="name">Name</label>
						<input
							autoFocus="true"
							type="text"
							className="form-control"
							name="name"
							value={name}
							onChange={this.handleChange}
						/>
						{submitted && !name && (
							<div className="help-block">Name is required</div>
						)}
					</div>
					<div
						className={
							"form-group" +
							(submitted && !email ? " has-error" : "")
						}
					>
						<label htmlFor="email">Email</label>
						<input
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
					<div
						className={
							"form-group" +
							(submitted && !passwordConfirm ? " has-error" : "")
						}
					>
						<label htmlFor="passwordConfirm">
							Confirm Password
						</label>
						<input
							type="passwordConfirm"
							className="form-control"
							name="passwordConfirm"
							value={passwordConfirm}
							onChange={this.handleChange}
						/>
						{submitted && !passwordConfirm && (
							<div className="help-block">
								Confirm Password is required
							</div>
						)}
					</div>
					<div className="form-group">
						<button className="btn btn-primary">Register</button>
						<Link to="/login" className="btn btn-link">
							Login
						</Link>
					</div>
				</form>
			</LoginLayout>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	requestRegister: (name, email, password, passwordConfirm) =>
		dispatch(requestRegister(name, email, password, passwordConfirm))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterPage);
