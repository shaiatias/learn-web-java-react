import React from "react";
import Container from "reactstrap/es/Container";
import {Col, Nav, NavItem, NavLink, Row} from "reactstrap";

export default () => (
	<div className={"bg-dark"}>
		<Container className={"py-5 px-4"}>
			<Row>
				<Col md={3}>
					Icon
				</Col>
				<Col md={3}>
					<Nav vertical>
						<NavItem>
							<NavLink href="#">New</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Sale</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Woman</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Man</NavLink>
						</NavItem>
					</Nav>
				</Col>
				<Col md={3}>
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
				</Col>
				<Col md={3}>
					<Nav vertical>
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
)
