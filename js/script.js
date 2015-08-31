window.onload = function(){ initialize();}
$.ready(function () { initialize(); });

function initialize(){
    setleftads();
}

function setleftads(){
    var testxs = $("#test-xs").css("display");
    //console.log(testxs);
    //if (!(navigator.userAgent.match(/BlackBerry|iPhone|iPod|Opera Mini|IEMobile/i))) {
    if (testxs == "none") {
        console.log("hset");
        $("#leftbarads").height($("#maincontent").height());
    }
    else{
        console.log("hauto");
        $("#leftbarads").height("auto");
    }
}