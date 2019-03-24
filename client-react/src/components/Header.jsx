import React, {Component, Fragment} from "react";
// import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
	UncontrolledDropdown
} from "reactstrap";

import {requestLogout} from "../redux/actions/authentication";
import {getCartItemCount} from "../redux/reducers/CartReducer";
import * as PropTypes from "prop-types";

class Header extends Component {

	static propTypes = {
		loggedIn: PropTypes.any,
		requestLogout: PropTypes.any,
		cartCount: PropTypes.any
	}

	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({isOpen: !this.state.isOpen});
	};

	render() {
		const {loggedIn, requestLogout, cartCount} = this.props;
		return (
			<div>
				<Navbar color="light" light expand="sm">
					<NavbarBrand href="/">The Old Asos</NavbarBrand>
					<NavbarToggler onClick={this.toggle}/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/category/new">New</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/sale">Sale</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/category/woman">Women</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/category/man">Men</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/cart">
									Cart ({cartCount})
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									{!loggedIn && (
										<Fragment>
											<NavLink to={"/login"}>Login</NavLink>
											<NavLink to={"/signup"}>Signup</NavLink>
										</Fragment>
									)}
									<DropdownItem>
										Option 1
									</DropdownItem>
									{loggedIn &&
									<Fragment>
										<DropdownItem divider/>
										<DropdownItem>
											logout
										</DropdownItem>
									</Fragment>
									}
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

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
