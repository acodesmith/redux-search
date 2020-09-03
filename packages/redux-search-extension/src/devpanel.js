import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

document.addEventListener("DOMContentLoaded", (event) => {
	ReactDOM.render(<App />, document.querySelector("#redux-search-root"));
});
