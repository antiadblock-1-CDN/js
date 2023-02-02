/* Version: A_01 - 02.02. 2023 - 15:22:26 */


var imms = document.createElement("script");
imms.src = "https://cdn.jsdelivr.net/gh/impression-media/js/impublishertag.repeater.log.js";
imms.type = "text/javascript";
imms.async = true;
document.getElementsByTagName("head")[0].appendChild(imms);

window.Impressionmedia = window.Impressionmedia || {};
window.Impressionmedia.events = window.Impressionmedia.events || [];

 
//targeting definitions

//setTimeout(function(){

var selection = document.querySelector("#obsahClanekMinHeight") !== null;
if (selection) {
var div = document.createElement("div");
div.setAttribute("id", "crt-1406721-ireferatycz");
div.setAttribute("style", "height: 210px; width: 760px;margin: auto; text-align:center");
document.querySelector("#obsahClanekMinHeight").insertAdjacentElement("beforeend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406721,"containerid": "crt-1406721-ireferatycz","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
        
        document.querySelector('#crt-1406721-ireferatycz').style.height = "210px";
            
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);
}

var selection = document.querySelector("#hlavicka") !== null;
if (selection) {
var div = document.createElement("div");
div.setAttribute("id", "crt-1403238-ireferatycz");
div.setAttribute("style", "height: 260px; width: 980px; margin: auto; text-align:center");
document.querySelector("#hlavicka").insertAdjacentElement("afterend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1403238,"containerid": "crt-1403238-ireferatycz","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
        
        
        
        
        
        document.querySelector('#crt-1403238-ireferatycz').style.height = "260px";
            
            
            
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);
}

//}, 100);

