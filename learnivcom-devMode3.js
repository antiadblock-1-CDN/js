/* Version: A_01 - 08.01. 2023 - 11:59:16 */
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
div.setAttribute("id", "crt-1406721-learnivcom");
div.setAttribute("style", "height: 210px; width: 100%; text-align:center");
document.querySelector("#nobranding").insertAdjacentElement("beforebegin", div);
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406721,"containerid": "crt-1406721-learnivcom","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        document.querySelector("#nobranding").style.minHeight = "0px"; /* https://en.learniv.com/conjugation/baste/ */
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);
//}, 100);