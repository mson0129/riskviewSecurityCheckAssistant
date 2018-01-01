chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.create({
		url: "http://128.11.1.150:8080/riskview/"
	});
});