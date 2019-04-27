import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

class AuthenticatedRoute extends Component {

	static propTypes = {
		component: (props, propName, componentName) => {
			if (!props.component && !props.render) {
				return new Error(`One of props 'component' or 'render' was not specified in '${componentName}'.`);
			}
		},
		render: (props, propName, componentName) => {
			if (!props.component && !props.render) {
				return new Error(`One of props 'component' or 'render' was not specified in '${componentName}'.`);
			}
		},
		anonymousPath: PropTypes.string.isRequired
	};

	static defaultProps = {
		anonymousPath: "/"
	};

	render() {

		const { loggingIn, loggedIn, anonymousPath } = this.props;

		if (loggingIn) {
			return <div>loading</div>;
		}

		if (!loggedIn) {

			return (
				<Route
					render={props =>
						<Redirect
							to={{
								pathname: anonymousPath,
								state: { from: this.props.location }
							}}
						/>
					}
				/>
			);
		}

		const { component: WrappedComponent, render: ComponentRenderFn, ...rest } = this.props;

		if (ComponentRenderFn) {

			return (
				<Route
					{...rest}
					render={ComponentRenderFn}
				/>
			);

		} else {
			return (
				<Route
					{...rest}
					render={props => <WrappedComponent {...props} />}
				/>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => ({
	loggedIn: state.authentication.loggedIn,
	loggingIn: state.authentication.loggingIn,
});

export default connect(
	mapStateToProps
)(AuthenticatedRoute);
