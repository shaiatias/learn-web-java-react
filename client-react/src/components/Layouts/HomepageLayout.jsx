import React, {Component, Fragment} from "react";

import "./HomepageLayout.css";

import Header from "../Header";
import Footer from "../Footer";
import {Container} from "reactstrap";

class HomepageLayout extends Component {

	render() {

		const {children} = this.props;

		return (
			<div>
				<Header/>
				<Container className={"content-min-height"}>
					{children}
				</Container>
				<Footer/>
			</div>
		)
	}

}

export default HomepageLayout;
