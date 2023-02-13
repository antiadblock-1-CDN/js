/* Version: A_01 - 13.02. 2023 - 17:51:09 */


var imms = document.createElement("script");
imms.src = "https://cdn.jsdelivr.net/gh/impression-media/js/impublishertag.repeater.log.js";
imms.type = "text/javascript";
imms.async = true;
document.getElementsByTagName("head")[0].appendChild(imms);

window.Impressionmedia = window.Impressionmedia || {};
window.Impressionmedia.events = window.Impressionmedia.events || [];

 
//targeting definitions

//setTimeout(function(){

var selection = document.querySelector("#start-of-content") !== null;
if (selection) {
var div = document.createElement("div");
div.setAttribute("id", "crt-1403237-in-pocasicz");
div.setAttribute("style", "height:auto; width:300px; margin:auto;");
document.querySelector("#start-of-content").insertAdjacentElement("beforebegin", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1403237,"containerid": "crt-1403237-in-pocasicz","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
        
        
        
        
        
        
        
        
        
        document.querySelector('#crt-1403237-in-pocasicz').style.height = "310px";
            
            
            
            
            
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);
}

//}, 100);

