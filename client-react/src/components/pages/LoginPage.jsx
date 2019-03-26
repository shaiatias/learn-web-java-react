import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginLayout from "../Layouts/LoginLayout";

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			submitted: false
		};
	}

	handleChange(e) {}

	handleSubmit(e) {}

	render() {
		const { username, password, submitted } = this.state;
		return (
			<LoginLayout>
				<form name="form" onSubmit={this.handleSubmit}>
					<div
						className={
							"form-group" +
							(submitted && !username ? " has-error" : "")
						}
					>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							className="form-control"
							name="username"
							value={username}
							onChange={this.handleChange}
						/>
						{submitted && !username && (
							<div className="help-block">
								Username is required
							</div>
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

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPage);
