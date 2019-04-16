import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

class ManagementRoute extends Component {
	static propTypes = {
		component: (props, propName, componentName) => {
			if (!props.component && !props.render) {
				return new Error(
					`One of props 'component' or 'render' was not specified in '${componentName}'.`
				);
			}
		},
		render: (props, propName, componentName) => {
			if (!props.component && !props.render) {
				return new Error(
					`One of props 'component' or 'render' was not specified in '${componentName}'.`
				);
			}
		},
		requiredRole: PropTypes.string.isRequired
	};

	render() {
		const { loggingIn, loggedIn, roles, requiredRole } = this.props;

		if (loggingIn) {
			return <div>loading</div>;
		}

		const isAllowed = new Set(roles).has(requiredRole);

		if (!loggedIn || !isAllowed) {
			return (
				<Route
					render={props => (
						<Redirect
							to={{
								pathname: "/",
								state: { from: this.props.location }
							}}
						/>
					)}
				/>
			);
		}

		const {
			component: WrappedComponent,
			render: ComponentRenderFn,
			...rest
		} = this.props;

		if (ComponentRenderFn) {
			return <Route {...rest} render={ComponentRenderFn} />;
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
	roles: (state.authentication.user && state.authentication.user.roles) || []
});

export default connect(mapStateToProps)(ManagementRoute);
