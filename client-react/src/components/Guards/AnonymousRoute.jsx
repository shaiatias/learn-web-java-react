import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

class AnonymousRoute extends Component {

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
		}
	};

	render() {

		const {loggedIn} = this.props;

		if (loggedIn) {

			return (
				<Route
					render={props =>
						<Redirect
							to={{
								pathname: "/",
								state: {from: this.props.location}
							}}
						/>
					}
				/>
			);
		}

		const {component: WrappedComponent, render: ComponentRenderFn, ...rest} = this.props;

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
	loggedIn: state.authentication.loggedIn
});

export default connect(
	mapStateToProps
)(AnonymousRoute);
