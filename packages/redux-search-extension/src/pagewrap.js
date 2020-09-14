if (!window.__REDUX_SEARCH_ID__) {
	let s = document.createElement("script");
	s.type = "text/javascript";
	s.src = chrome.extension.getURL("/inject.bundle.js");

	let sid = document.createElement("script");
	sid.type = "text/javascript";
	sid.innerHTML = `window.__REDUX_SEARCH_ID__ = '${chrome.runtime.id}'`;
	(document.head || document.documentElement).appendChild(s);
	(document.head || document.documentElement).appendChild(sid);
}
