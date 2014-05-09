
chrome.browserAction.onClicked.addListener(function(activeTab) {
    start(activeTab);
});

function start(tab) {
    var url = tab.url;
    if (url.indexOf("mail.google.com") > -1 && url.indexOf("compose") > -1) {
        try {
            chrome.tabs.sendMessage(tab.id, {message: "getSource"}, function() {
            });
        } catch (ex) {
            alert(ex);
        }
    } else {
        alert("You are not on Gmail or nothing is being composed");
    }
}
