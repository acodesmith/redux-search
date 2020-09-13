import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

document.addEventListener("DOMContentLoaded", (event) => {
	ReactDOM.render(<App />, document.querySelector("#redux-search-root"));
});

function syncState(state) {
	console.log("syncState in the devpanel top level. state:", state);
	document.dispatchEvent(new Event("syncState", { state }));
}

window.syncState = syncState;
