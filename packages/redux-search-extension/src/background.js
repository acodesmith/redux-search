var ports = [];
chrome.runtime.onConnect.addListener(function (port) {
	console.log({ port });
	if (port.name !== "devtools") return;

	ports.push(port);

	// Remove port when destroyed (eg when devtools instance is closed)
	port.onDisconnect.addListener(function () {
		var i = ports.indexOf(port);
		if (i !== -1) ports.splice(i, 1);
	});

	// Not sure if this is needed
	// port.onMessage.addListener(function (msg) {
	// 	// Received message from devtools. Do something:
	// 	console.log("Received message from devtools page", msg);
	// });

	notifyDevtools("message from the background");
});

// Function to send a message to all devtools.html views:
function notifyDevtools(msg) {
	ports.forEach(function (port) {
		port.postMessage(msg);
	});
}

chrome.runtime.onMessageExternal.addListener(function (
	request,
	sender,
	sendResponse
) {
	// if (sender.url == blocklistedWebsite) return; // don't allow this web page access
	// if (request.openUrlInEditor) openUrl(request.openUrlInEditor);
	console.log({
		request,
		sender,
		sendResponse,
	});
	notifyDevtools(request);
});

// Message from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(
		sender.tab
			? "from a content script:" + sender.tab.url
			: "from the extension"
	);
	notifyDevtools(request);
});
