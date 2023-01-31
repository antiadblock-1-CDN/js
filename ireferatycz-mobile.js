/* Version: A_01 - 31.01. 2023 - 20:35:09 */


var imms = document.createElement("script");
imms.src = "https://cdn.jsdelivr.net/gh/impression-media/js/impublishertag.repeater.log.js";
imms.type = "text/javascript";
imms.async = true;
document.getElementsByTagName("head")[0].appendChild(imms);

window.Impressionmedia = window.Impressionmedia || {};
window.Impressionmedia.events = window.Impressionmedia.events || [];

 
//targeting definitions

//setTimeout(function(){

var selection = document.querySelector("#hlavicka") !== null;
if (selection) {
var div = document.createElement("div");
div.setAttribute("id", "crt-1406724-ireferatycz");
div.setAttribute("style", "height: auto; width: 300px; margin: auto;");
document.querySelector("#hlavicka").insertAdjacentElement("afterend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406724,"containerid": "crt-1406724-ireferatycz","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
        
        
        
        
        
        document.querySelector('#crt-1406724-ireferatycz').style.height = "250px";
            
            
            
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);
}

//}, 100);

