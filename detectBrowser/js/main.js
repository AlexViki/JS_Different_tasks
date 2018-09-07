document.getElementById('btn-check').onclick = function() {
    manualDetectBrowserVersion();
    document.getElementById('result').innerHTML = autoDetectBrowserVersion(); 
};

function manualDetectBrowserVersion() {
    let list = document.getElementById('list').value;
    //console.log(list);
    if (list === "IE"){
        console.log("You use " + list);
    } else if (
                list === "Chrome" ||
                list === "Firefox" ||
                list === "Safari"
            ) {
        console.log("Thise browser we sapport too. " + list);
    } else {
        console.log("We do not such browser!!! Sorry!");
    };
};

function autoDetectBrowserVersion() {
    let versionOfBrowser = navigator.userAgent;
    console.log("All data: " + versionOfBrowser);
    if(versionOfBrowser.search(/MSIE/) > 0) return "IE";
    if(versionOfBrowser.search(/Firefox/) > 0) return "Firefox";
    if(versionOfBrowser.search(/Chrome/) > 0) return "Chrome";
    if(versionOfBrowser.search(/Safari/) > 0) return "Safari";
    if(versionOfBrowser.search(/Opera/) > 0) return "Opera";
    return "Do not such browser!!! Sorry!";
};
