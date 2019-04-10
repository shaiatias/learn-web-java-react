import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import ViewProductPage from "./components/pages/ViewProductPage";
import RegisterPage from "./components/pages/RegisterPage";
import CartPage from "./components/pages/CartPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import CreateProductPage from "./components/pages/CreateProductPage";
import ProductFilterPage from "./components/pages/ProductFilterPage";

const routes = auth => (
	<Fragment>
		<Switch>
			<Route
				exact
				path="/"
				render={() => <ProductFilterPage category={"new"} />}
			/>
			<Route
				exact
				path="/category/:category?"
				render={props => {
					const { category } = props.match.params;
					return <ProductFilterPage category={category} />;
				}}
			/>
			<Route
				exact
				path="/products/:productId?"
				component={ViewProductPage}
			/>

			<Route exact path="/login" component={LoginPage} />
			<Route exact path="/register" component={RegisterPage} />
			<Route exact path="/cart" component={CartPage} />
			<Route exact path="/checkout" component={CheckoutPage} />

			<Route
				exact
				path="/manage/product/:itemId?"
				component={CreateProductPage}
			/>
		</Switch>
	</Fragment>
);

export default routes;
