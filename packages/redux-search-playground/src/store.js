import data from "./test-data/data.json";
import { createStore, applyMiddleware } from "redux";

const initialState = data;

const TestReducer = function (state = initialState, action) {
	return state;
};

export default createStore(
	TestReducer,
	applyMiddleware(
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		window.__REDUX_SEARCH_EXTENSION__ && window.__REDUX_SEARCH_EXTENSION__()
	)
);
