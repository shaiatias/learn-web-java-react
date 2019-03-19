import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SingleItemPage from "./components/pages/SingleItemPage";
import SignupPage from "./components/pages/SignupPage";

const routes = (auth) => (
    <div>
        <Switch>

            <Route exact path="/" component={HomePage}/>
            <Route exact path="/item/:itemId?" component={SingleItemPage}/>

            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignupPage}/>

        </Switch>
    </div>
);

export default routes;
