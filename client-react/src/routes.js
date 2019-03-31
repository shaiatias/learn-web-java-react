import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SingleItemPage from "./components/pages/SingleItemPage";
import RegisterPage from "./components/pages/RegisterPage";
import CartPage from "./components/pages/CartPage";

const routes = auth => (
	<Fragment>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/item/:itemId?" component={SingleItemPage} />

			<Route exact path="/login" component={LoginPage} />
			<Route exact path="/register" component={RegisterPage} />
			<Route exact path="/cart" component={CartPage} />
		</Switch>
	</Fragment>
);

export default routes;
