import {createBrowserHistory} from "history";
import {applyMiddleware, compose, createStore} from "redux";
import {routerMiddleware} from "connected-react-router";
import loggerMiddleware from "redux-logger";
import createSagaMiddleware from 'redux-saga'

import rootReducer from "../reducers";
import sagas from '../sagas';

const history = createBrowserHistory();

const composeEnhancer = process.env.NODE_ENV === "production" ?
	compose :
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	...(process.env.NODE_ENV === "production" ? [] : [loggerMiddleware]),
	routerMiddleware(history),
	sagaMiddleware
];

const createInitialStore = (initialState) => {
	return createStore(
		rootReducer(history),
		initialState,
		composeEnhancer(
			applyMiddleware(
				...middlewares
			)
		)
	);
};


const store = createInitialStore();

sagaMiddleware.run(sagas);

export { store, history, createInitialStore };
