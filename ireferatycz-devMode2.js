/* Version: A_01 - 08.01. 2023 - 13:26:19 */


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
div.setAttribute("id", "crt-1406721-ireferatycz");
div.setAttribute("style", "height: 210px; width: 980px; text-align:center");
document.querySelector("#regexDivId").insertAdjacentElement("afterend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406721,"containerid": "crt-1406721-ireferatycz","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);


//}, 100);

