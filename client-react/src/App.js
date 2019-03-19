import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ConnectedRouter} from "connected-react-router";

import routes from "./routes";
import './App.css';

class App extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    };

    render() {
        const {history, auth} = this.props;

        return (
            <ConnectedRouter history={history}>
                {routes(auth)}
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    auth: {}
});

export default connect(
    mapStateToProps
)(App);
