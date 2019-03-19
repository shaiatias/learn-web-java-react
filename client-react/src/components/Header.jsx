import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { requestLogout } from "../redux/actions/authentication";
import { getCartItemCount } from "../redux/reducers/CartReducer";

const Header = ({ loggedIn, requestLogout, cartCount }) => (
	<div>
		<NavLink to={"/"}>Homepage</NavLink>

		{loggedIn && <button onClick={requestLogout}>logout</button>}

		{!loggedIn && (
			<Fragment>
				<NavLink to={"/login"}>Login</NavLink>
				<NavLink to={"/signup"}>Signup</NavLink>
			</Fragment>
		)}

		<p>
			cart count { cartCount }
		</p>

	</div>
);

const mapStateToProps = state => ({
	loggedIn: state.authentication.loggedIn,
	cartCount: getCartItemCount(state.cart)
});

const mapDispatchToProps = dispatch => ({
	requestLogout: () => dispatch(requestLogout())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
