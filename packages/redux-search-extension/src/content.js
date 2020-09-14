var port = chrome.runtime.connect();

window.addEventListener(
	"message",
	function (event) {
		// We only accept messages from ourselves
		if (event.source != window) return;

		if (event.data.type && event.data.type == "REDUX_SEARCH_SYNC") {
			console.log("Content script received: " + event.data.state);
			port.postMessage(event.data.state);
			chrome.runtime.sendMessage(event.data, function (response) {
				console.log(response);
			});
		}
	},
	false
);
