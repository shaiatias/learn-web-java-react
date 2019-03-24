import React, {Component, Fragment} from "react";

import "./HomepageLayout.css";

import Header from "../Header";
import Footer from "../Footer";

class HomepageLayout extends Component {

	render() {

		const {children} = this.props;

		return (
			<div>

				<Header/>
				<div className={"content-min-height p-4"}>
					{children}
				</div>
				<Footer/>
			</div>
		)
	}

}

export default HomepageLayout;
