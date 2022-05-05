chrome.action.onClicked.addListener((tab :chrome.tabs.Tab)=>{
    console.log("tabs opening from: \n" + JSON.stringify(tab, null, 2));
    chrome.tabs.create({
        url: chrome.runtime.getURL('extensionPage/extensionPage.html'),
        pinned: true
    }, ()=>{});
});
