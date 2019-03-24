import React from "react";
import Container from "reactstrap/es/Container";
import {Col, Nav, NavItem, NavLink, Row} from "reactstrap";

export default () => (
    <Container className={"p-3"}>

		<Row>

			<Col>
				Icon
			</Col>

			<Col>
				<Nav vertical>
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Another Link</NavLink>
					</NavItem>
					<NavItem>
						<NavLink disabled href="#">Disabled Link</NavLink>
					</NavItem>
				</Nav>
			</Col>

			<Col>
				<Row>Link 1</Row>
				<Row>Link 1</Row>
				<Row>Link 1</Row>
			</Col>

			<Col>
				<Row>Link 1</Row>
				<Row>Link 1</Row>
				<Row>Link 1</Row>
			</Col>

		</Row>

    </Container>
)
