/* Version: A_01 - 23.01. 2023 - 09:28:39 */


var imms = document.createElement("script");
imms.src = "https://cdn.jsdelivr.net/gh/impression-media/js/impublishertag.repeater.log.js";
imms.type = "text/javascript";
imms.async = true;
document.getElementsByTagName("head")[0].appendChild(imms);

window.Impressionmedia = window.Impressionmedia || {};
window.Impressionmedia.events = window.Impressionmedia.events || [];

 
//targeting definitions

//setTimeout(function(){

var selection = document.querySelector("#vosveteit_desktop_clanok_leaderboard1") !== null;
if (selection) {
var div = document.createElement("div");
div.setAttribute("id", "crt-1406729-vosveteitsk");
div.setAttribute("style", "height:300px; width:300px; margin:auto;");
document.querySelector("#vosveteit_desktop_clanok_leaderboard1").insertAdjacentElement("afterend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406729,"containerid": "crt-1406729-vosveteitsk","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
        
        
        
        
        
        
        
        
        
        
                
            
            
            
            
            
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);
}

//}, 100);

