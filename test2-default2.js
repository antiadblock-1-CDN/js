/* Version: A_01 - 08.01. 2023 - 13:22:17 */


var imms = document.createElement("script");
imms.src = "https://cdn.jsdelivr.net/gh/impression-media/js/impublishertag.repeater.log.js";
imms.type = "text/javascript";
imms.async = true;
document.getElementsByTagName("head")[0].appendChild(imms);

window.Impressionmedia = window.Impressionmedia || {};
window.Impressionmedia.events = window.Impressionmedia.events || [];

 
//targeting definitions

//setTimeout(function(){

var div = document.createElement("div");
div.setAttribute("id", "crt-1406725-test2");
div.setAttribute("style", "height: auto; width: 300px;");
document.querySelector("newRegex").insertAdjacentElement("afterend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406725,"containerid": "crt-1406725-test2","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
                
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);


//}, 100);

