/* Version: A_01 - 13.01. 2023 - 09:57:51 */


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
div.setAttribute("id", "crt-1406726-ireferatycz");
div.setAttribute("style", "height: 210px; width: 980px; text-align:center");
document.querySelector("#regexDivId").insertAdjacentElement("afterend", div);
    
//setTimeout(function(){
console.log("call Impressionmedia push");
Impressionmedia.events.push(function() {Impressionmedia.DisplayAcceptableAdIfAdblocked({"zoneid": 1406726,"containerid": "crt-1406726-ireferatycz","overrideZoneFloor": false,"callbacksuccess": function(){console.log("antiAdBlock callbacksuccess");
        
        
        /* https://ireferaty.cz/test_hb_6_antiAdBlock_1.php */
            
    ;},"callIfNotAdBlocked":function(){console.log("antiAdBlock callIfNotAdBlocked")}, });});;
//}, 5000);


//}, 100);

