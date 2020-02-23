chrome.contextMenus.create({
    "title": "Look up IP Address '%s'",
    "contexts": ["selection"],
    "onclick" : function(ipAddress) {
      chrome.tabs.create(
        {"url" : "https://whatismyipaddress.com/ip/" + ipAddress.selectionText });
      }
    });
