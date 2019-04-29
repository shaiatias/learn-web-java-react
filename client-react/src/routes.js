import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import ViewProductPage from "./components/pages/ViewProductPage";
import RegisterPage from "./components/pages/RegisterPage";
import CartPage from "./components/pages/CartPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import CreateProductPage from "./components/pages/CreateProductPage";
import ProductFilterPage from "./components/pages/ProductFilterPage";
import AnonymousRoute from "./components/Guards/AnonymousRoute";
import AuthenticatedRoute from "./components/Guards/AuthenticatedRoute";
import ManagementRoute from "./components/Guards/ManagementRoute";
import OrderDetailsPage from "./components/pages/OrderDetailsPage";
import OrdersPage from "./components/pages/OrdersPage";
import ProfilePage from "./components/pages/ProfilePage";
import AllOrdersPage from "./components/pages/AllOrdersPage";

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

			<AnonymousRoute exact path="/login" component={LoginPage} />
			<AnonymousRoute exact path="/register" component={RegisterPage} />

			<Route exact path="/cart" component={CartPage} />
			<AuthenticatedRoute
				exact
				path="/checkout"
				anonymousPath="/login"
				component={CheckoutPage}
			/>

			<AuthenticatedRoute exact path="/profile" component={ProfilePage} />

			<AuthenticatedRoute exact path="/orders" component={OrdersPage} />
			<AuthenticatedRoute
				exact
				path="/order/:id"
				component={OrderDetailsPage}
			/>

			<ManagementRoute
				exact
				requiredRole={"ROLE_SELLER"}
				path="/manage/product/:itemId?"
				component={CreateProductPage}
			/>
			
			<ManagementRoute
				exact
				requiredRole={"ROLE_ADMIN"}
				path="/manage/orders"
				component={AllOrdersPage}
			/>
		</Switch>
	</Fragment>
);

export default routes;
