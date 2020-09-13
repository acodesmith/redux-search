chrome.devtools.panels.create(
	"Redux Search",
	"img/logo/redux-search-logo-color.png",
	"devpanel.html",
	function (extensionPanel) {
		var _window; // Going to hold the reference to devpanel.html's `window`
		var data = [];
		var port = chrome.runtime.connect({ name: "devtools" });
		port.onMessage.addListener(function (msg) {
			// Write information to the panel, if exists.
			// If we don't have a panel reference (yet), queue the data.
			if (_window) {
				_window.syncState(msg);
			} else {
				data.push(msg);
			}
		});

		port.postMessage("test");

		extensionPanel.onShown.addListener(function tmp(panelWindow) {
			extensionPanel.onShown.removeListener(tmp); // Run once only
			_window = panelWindow;

			panelWindow.testPort = port;
			// Release queued data
			var msg;
			// Need to pull only the last message, only care about latest state
			_window.syncState(data.pop());
			// Just to show that it's easy to talk to pass a message back:
			// _window.respond = function (msg) {
			// 	console.log("respond in devtools msg:", msg);
			// 	port.postMessage(msg);
			// };
		});
	}
);
