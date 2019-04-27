import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";
import * as PropTypes from "prop-types";
import {
	Badge,
	Button,
	Collapse,
	Container,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { requestLogout } from "../redux/actions/authentication";
import { getCartItemCount } from "../redux/reducers/CartReducer";
import { loadCart } from "../redux/actions/cart";

class Header extends Component {
	static propTypes = {
		loggedIn: PropTypes.any,
		requestLogout: PropTypes.any,
		cartCount: PropTypes.any
	};

	state = {
		isOpen: false
	};

	componentDidMount() {
		this.props.loadCart();
	}

	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		const { loggedIn, requestLogout, cartCount } = this.props;
		return (
			<div className="bg-light">
				<Container fluid>
					<Navbar
						color="light"
						light
						expand="sm"
						className={"px-4 py-3"}
					>
						<NavbarBrand to="/" tag={RouterNavLink}>
							asos
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav navbar className="mr-auto">
								<NavItem>
									<NavLink
										to="/category/women"
										tag={RouterNavLink}
									>
										Women
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										to="/category/men"
										tag={RouterNavLink}
									>
										Men
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										to="/category/new"
										tag={RouterNavLink}
									>
										New
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										tag={RouterNavLink}
										to="/category/sale"
									>
										Sale
									</NavLink>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									<NavLink to="/cart" tag={RouterNavLink}>
										<Button color={"link"}>
											<FontAwesomeIcon icon="shopping-cart" />
											<Badge pill className="ml-2">
												({cartCount})
											</Badge>
										</Button>
									</NavLink>
								</NavItem>
								<UncontrolledDropdown
									nav
									inNavbar
									className="d-flex align-items-center"
								>
									<DropdownToggle nav>
										<FontAwesomeIcon icon="user" />
									</DropdownToggle>
									<DropdownMenu right>
										{!loggedIn && (
											<Fragment>
												<NavLink
													to={"/login"}
													tag={RouterNavLink}
												>
													Login
												</NavLink>
												<NavLink
													to={"/signup"}
													tag={RouterNavLink}
												>
													Signup
												</NavLink>
											</Fragment>
										)}
										{loggedIn && (
											<Fragment>
												<DropdownItem>
													<NavLink
														to={"/profile"}
														tag={RouterNavLink}
													>
														Profile
													</NavLink>
												</DropdownItem>
												<DropdownItem>
													<NavLink
														to={"/orders"}
														tag={RouterNavLink}
													>
														My orders
													</NavLink>
												</DropdownItem>
												<DropdownItem divider />
												<DropdownItem
													onClick={requestLogout}
												>
													Logout
												</DropdownItem>
											</Fragment>
										)}
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					</Navbar>
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.authentication.loggedIn,
	cartCount: getCartItemCount(state.cart)
});

const mapDispatchToProps = dispatch => ({
	requestLogout: () => dispatch(requestLogout()),
	loadCart: () => dispatch(loadCart({ includeProducts: false }))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
