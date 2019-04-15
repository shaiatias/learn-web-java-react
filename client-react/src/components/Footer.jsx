import React from "react";
import Container from "reactstrap/es/Container";
import { Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import "./Footer.css";

export default () => (
	<div className={"bg-dark footer"}>
		<Container className={"py-5 px-4"}>
			<Row>
				<Col md={4}>Icon</Col>
				<Col md={4}>
					<Nav horizontal>
						<NavItem>
							<NavLink to="/category/new" tag={RouterNavLink}>
								New
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={RouterNavLink} to="/category/sale">
								Sale
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/category/women" tag={RouterNavLink}>
								Women
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/category/men" tag={RouterNavLink}>
								Men
							</NavLink>
						</NavItem>
					</Nav>
				</Col>
				{/* <Col md={3}>
					<Nav vertical>
						<NavItem>
							<NavLink href="#">My Orders</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Billing</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">My Profile</NavLink>
						</NavItem>
					</Nav>
				</Col> */}
				<Col md={4}>
					<Nav horizontal>
						<NavItem>
							<NavLink href="#">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Contact Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Support</NavLink>
						</NavItem>
					</Nav>
				</Col>
			</Row>
		</Container>
	</div>
);
