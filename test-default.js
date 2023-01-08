/* Version: A_01 - 08.01. 2023 - 13:18:34 */


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
div.setAttribute("id", "crt-1406725-test");
div.setAttribute("style", "height: auto; width: 300px;");
document.querySelector("test").insertAdjacentElement("afterend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406725,"containerid": "crt-1406725-test","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
                
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);


//}, 100);

