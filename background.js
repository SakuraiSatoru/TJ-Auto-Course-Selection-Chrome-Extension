function getDomainFromUrl(url){
     var host = "null";
     if(typeof url == "undefined" || null == url)
          url = window.location.href;
     var regex = /.*\:\/\/([^\/]*).*/;
     var match = url.match(regex);
     if(typeof match != "undefined" && null != match)
          host = match[1];
     return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
     if(getDomainFromUrl(tab.url).toLowerCase()=="4m3.tongji.edu.cn"){
          chrome.pageAction.show(tabId);
     }
};

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.tabs.create({url: "firstRun.html"});
    }
});


chrome.tabs.onUpdated.addListener(checkForValidUrl);