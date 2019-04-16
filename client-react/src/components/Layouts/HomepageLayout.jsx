import React, { Component } from "react";
import { Container } from "reactstrap";

import "./HomepageLayout.css";

import Header from "../Header";
import Footer from "../Footer";

class HomepageLayout extends Component {
	render() {
		const { children } = this.props;

		const pageName =
			(children && children.type && children.type.name) || "";

		const className = this.props.className || "";

		return (
			<div className={"page-wrapper"}>
				<Header />
				<Container
					className={`content-min-height py-4 ${pageName} ${className}`}
				>
					{children}
				</Container>
				<Footer />
			</div>
		);
	}
}

export default HomepageLayout;
