/* Version: A_01 - 07.06. 2024 - 13:38:13 */


var sasImHbMbIsMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (sasImHbMbIsMobile.Android() || sasImHbMbIsMobile.BlackBerry() || sasImHbMbIsMobile.iOS() || sasImHbMbIsMobile.Opera() || sasImHbMbIsMobile.Windows());
    }
};

//tdef

//var pbjs = pbjs || {};
var sasVirtBids = [];

var imHbGs12 = 'CP_r3oAP_r3oAAHABBENA3EgAAAAAAAAAAAAAAAAAADBIAMAAQUcHQAYAAgo4QgAwABBRwlABgACCjhSADAAEFHCwAGAAIKOAAAA.YAAAAAAAAAAA';
var imHbGs14 = 'noconsent';
var imHbsOne = 0;
var imHbJedenAdformProTest = 0;
        
function imWaitForOnEvent(){
  if(typeof pbjs.onEvent === 'function'){
         


        pbjs.onEvent('bidRequested', function(data){
                //console.log('bidRequested^^');
                //console.log(data);
                
                imHbsOne++;
                if(imHbsOne == 1){
                    console.log('sOne bidRequested^^');
                    console.log(data);
                    if (typeof data.gdprConsent.vendorData.tcString !== 'undefined'){
                        imHbGs12 = data.gdprConsent.vendorData.tcString;
                        imHbGs14 = 'consent';
                        console.log('imHbGs12^^');
                        console.log(data);
                        console.log('imHbGs12: '+imHbGs12);
                    }else{
                        console.log('object without tcString - error (Cannot read properties of undefined)');
                    }
                }
                //console.log('imHbGs12^^');
                //console.log(data);
                //console.log('imHbGs12: '+imHbGs12);


                if(data.bidderCode == 'adform'){
                    console.log('data.bids^^ ');
                    console.log(data.bids);
                    for (var i in data.bids) {
                        if(i == 'removeDuplicates'){
                            console.log('i == removeDuplicates');
                            console.log(i + '. bidderRequestId: '+ data.bids[i].bidderRequestId);
                        }else if(i == 'empty'){
                            console.log('i == empty');
                            console.log(i + '. bidderRequestId: '+ data.bids[i].bidderRequestId);
                        }else{
                            console.log(i + '. bidderRequestId: '+ data.bids[i].bidderRequestId);
                            if(data.bids[i].params.mid == '1828120'){
                                console.log('if MID 1828120 bidID:'+data.bids[i].bidId + '  [' + data.bids[i].adUnitCode+']' );
                                sasVirtBids.push(data.bids[i].bidId);
                            }else{
                                if(data.bids[i].params.mid == '1898175'){
                                    console.log('if MID 1898175 bidID:'+data.bids[i].bidId + '  [' + data.bids[i].adUnitCode+']' );
                                    sasVirtBids.push(data.bids[i].bidId);
                                }else{
                                    console.log('else MID 1828120 OR 1898175: MID::'+data.bids[i].params.mid + '  [' + data.bids[i].adUnitCode+']' );
 
                                }
                            }
                        }
                    }
                }
        })


        pbjs.onEvent('bidAdjustment', function(data){
        


            if((sasVirtBids.includes(data.requestId))&&(data.bidderCode == 'adform')&&(data.adUnitCode == 'adform_leaderboard')){

              console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));

              var checkId60 = true;
              if(1 == 0){
                  var selection = document.querySelector('#adform_leaderboard') !== null;
                  console.log('adform_leaderboard: '+selection);
                  if(selection){console.log('check DIV ID OK');
                  }else{
                      console.log('check DIV ID KO');
                      console.log('checkDivId: 0');
                      var checkId60 = false;
                  }
              }else{
                  console.log('pocition adform_leaderboard without check DIV ID');
              }
              console.log('checkDivId adform_leaderboard: '+checkId60);
              if(checkId60){


                
                console.log('if bidAdjustment data.requestId: '+data.requestId+ ' data.adUnitCode: '+data.adUnitCode);
                console.log('sasVirtBids^^');
                console.log(sasVirtBids);
                console.log('bidAdjustment data^^');
                console.log(data);
                var sasAllAd = sasRequest('pc', '/site=IMM_Zakruta', '/area=leaderboad-1', '/size=728x90,970x210,960x200,960x210,970x90,998x200');
                if(sasAllAd.includes('empty-ads')||
                   sasAllAd.includes('no_content')||
                   sasAllAd.includes('xmlns:vmap')||
                   sasAllAd.includes('geo_ip')||
                   sasAllAd.includes('Empty')||
                   sasAllAd.includes('SAS empty')){

                   data.cpm = 0;
                   data.originalCpm = 0;

                }else{

                    //dotaz na cenu
                    data.ad = JSON.parse(sasAllAd).toString();
                    data.cpm = 1.09;
                    data.originalCpm = 1.09;
                    console.log('adform-sas bidAdjustment adform_leaderboard^^');
                    console.log(data);
                    


                }
                
              }; //konec check DIV ID (checkId60)

            } //konec check MID resp. sasVirtBids
            else{
                //console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));
            }
            
        


            if((sasVirtBids.includes(data.requestId))&&(data.bidderCode == 'adform')&&(data.adUnitCode == 'adform_leaderboard')){

              console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));

              var checkId61 = true;
              if(1 == 0){
                  var selection = document.querySelector('#adform_leaderboard') !== null;
                  console.log('adform_leaderboard: '+selection);
                  if(selection){console.log('check DIV ID OK');
                  }else{
                      console.log('check DIV ID KO');
                      console.log('checkDivId: 0');
                      var checkId61 = false;
                  }
              }else{
                  console.log('pocition adform_leaderboard without check DIV ID');
              }
              console.log('checkDivId adform_leaderboard: '+checkId61);
              if(checkId61){


                
                console.log('if bidAdjustment data.requestId: '+data.requestId+ ' data.adUnitCode: '+data.adUnitCode);
                console.log('sasVirtBids^^');
                console.log(sasVirtBids);
                console.log('bidAdjustment data^^');
                console.log(data);
                var sasAllAd = sasRequest('pc', '/site=IMM_Zakruta', '/area=leaderboad-1', '/size=2000x1400,branding');
                if(sasAllAd.includes('empty-ads')||
                   sasAllAd.includes('no_content')||
                   sasAllAd.includes('xmlns:vmap')||
                   sasAllAd.includes('geo_ip')||
                   sasAllAd.includes('Empty')||
                   sasAllAd.includes('SAS empty')){

                   data.cpm = 0;
                   data.originalCpm = 0;

                }else{

                    //dotaz na cenu
                    data.ad = JSON.parse(sasAllAd).toString();
                    data.cpm = 3.26;
                    data.originalCpm = 3.26;
                    console.log('adform-sas bidAdjustment adform_leaderboard^^');
                    console.log(data);
                    


    console.log('branding: adUnitCode:: adform_leaderboard ');
    data.ad= '<scr' + 'ipt>' + 'top.document.querySelector(\'body\').classList.add(\'sasHbBranding\');' + '</scr' + 'ipt>' 
   
    + '<!-- imHb production version -->'        
   
    + JSON.parse(sasAllAd).toString(); 

    var pcBrandingStyleDefault = document.createElement("style");
    pcBrandingStyleDefault.type = "text/css";
    pcBrandingStyleDefault.id = "imHbPcBrandingStyleDefault";
    if(!!(window.attachEvent && !window.opera)) {
        pcBrandingStyleDefault.styleSheet.cssText = ".sasHbBranding #adform_leaderboard iframe{margin-top: 0px;width: 2000px;height: 1400px;overflow: visible;top: 0px;position: fixed;z-index: 0;left: 50%;margin-left: -1000px;display: block;max-width: 2000px;pointer-events: auto !important;}.nor2b2branding{margin-top: 210px;}.sasHbBranding #adform_leaderboard{margin-top: 210px;}";
    } else {
        var styleTextPcBrandingStyleDefault = document.createTextNode(".sasHbBranding #adform_leaderboard iframe{margin-top: 0px;width: 2000px;height: 1400px;overflow: visible;top: 0px;position: fixed;z-index: 0;left: 50%;margin-left: -1000px;display: block;max-width: 2000px;pointer-events: auto !important;}.nor2b2branding{margin-top: 210px;}.sasHbBranding #adform_leaderboard{margin-top: 210px;}");
        pcBrandingStyleDefault.appendChild(styleTextPcBrandingStyleDefault);
    }
    document.getElementsByTagName("head")[0].appendChild(pcBrandingStyleDefault);




                }
                
              }; //konec check DIV ID (checkId61)

            } //konec check MID resp. sasVirtBids
            else{
                //console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));
            }
            
        


            if((sasVirtBids.includes(data.requestId))&&(data.bidderCode == 'adform')&&(data.adUnitCode == 'adform_square')){

              console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));

              var checkId62 = true;
              if(1 == 0){
                  var selection = document.querySelector('#adform_square') !== null;
                  console.log('adform_square: '+selection);
                  if(selection){console.log('check DIV ID OK');
                  }else{
                      console.log('check DIV ID KO');
                      console.log('checkDivId: 0');
                      var checkId62 = false;
                  }
              }else{
                  console.log('pocition adform_square without check DIV ID');
              }
              console.log('checkDivId adform_square: '+checkId62);
              if(checkId62){


                
                console.log('if bidAdjustment data.requestId: '+data.requestId+ ' data.adUnitCode: '+data.adUnitCode);
                console.log('sasVirtBids^^');
                console.log(sasVirtBids);
                console.log('bidAdjustment data^^');
                console.log(data);
                var sasAllAd = sasRequest('all', '/site=IMM_Zakruta', '/area=halfpagead-1', '/size=300x600,300x300,300x250,120x600,160x600');
                if(sasAllAd.includes('empty-ads')||
                   sasAllAd.includes('no_content')||
                   sasAllAd.includes('xmlns:vmap')||
                   sasAllAd.includes('geo_ip')||
                   sasAllAd.includes('Empty')||
                   sasAllAd.includes('SAS empty')){

                   data.cpm = 0;
                   data.originalCpm = 0;

                }else{

                    //dotaz na cenu
                    data.ad = JSON.parse(sasAllAd).toString();
                    data.cpm = 1.09;
                    data.originalCpm = 1.09;
                    console.log('adform-sas bidAdjustment adform_square^^');
                    console.log(data);
                    


                }
                
              }; //konec check DIV ID (checkId62)

            } //konec check MID resp. sasVirtBids
            else{
                //console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));
            }
            
        


            if((sasVirtBids.includes(data.requestId))&&(data.bidderCode == 'adform')&&(data.adUnitCode == 'adform_rectangle')){

              console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));

              var checkId63 = true;
              if(1 == 0){
                  var selection = document.querySelector('#adform_rectangle') !== null;
                  console.log('adform_rectangle: '+selection);
                  if(selection){console.log('check DIV ID OK');
                  }else{
                      console.log('check DIV ID KO');
                      console.log('checkDivId: 0');
                      var checkId63 = false;
                  }
              }else{
                  console.log('pocition adform_rectangle without check DIV ID');
              }
              console.log('checkDivId adform_rectangle: '+checkId63);
              if(checkId63){


                
                console.log('if bidAdjustment data.requestId: '+data.requestId+ ' data.adUnitCode: '+data.adUnitCode);
                console.log('sasVirtBids^^');
                console.log(sasVirtBids);
                console.log('bidAdjustment data^^');
                console.log(data);
                var sasAllAd = sasRequest('pc', '/site=IMM_Zakruta', '/area=wallpaper-1', '/size=300x300,300x250,480x300,250x250,480x480');
                if(sasAllAd.includes('empty-ads')||
                   sasAllAd.includes('no_content')||
                   sasAllAd.includes('xmlns:vmap')||
                   sasAllAd.includes('geo_ip')||
                   sasAllAd.includes('Empty')||
                   sasAllAd.includes('SAS empty')){

                   data.cpm = 0;
                   data.originalCpm = 0;

                }else{

                    //dotaz na cenu
                    data.ad = JSON.parse(sasAllAd).toString();
                    data.cpm = 1.09;
                    data.originalCpm = 1.09;
                    console.log('adform-sas bidAdjustment adform_rectangle^^');
                    console.log(data);
                    


                }
                
              }; //konec check DIV ID (checkId63)

            } //konec check MID resp. sasVirtBids
            else{
                //console.log('data.bidderCode: '+data.bidderCode+' - sasVirtBids: '+sasVirtBids.includes(data.requestId));
            }
            
        

        }); //konec onEvent bidAdjustment  
    
  }else{
      setTimeout(imWaitForOnEvent, 100);
      console.log('pbjs.onEvent >> imWaitForOnEvent 100ms');
  }
}

function imWaitForPbjs(){
    if(typeof pbjs === 'object'){
        imWaitForOnEvent();
    }else{
        setTimeout(imWaitForPbjs, 50);
        console.log('pbjs.object >> imWaitForPbjs 50ms');
    }
}imWaitForPbjs();



function sasRequest(device, s1, s3, s4){

    console.log('start fc sasRequest for sasXhr.responseText: '+device);
//    return 'device empty-ads DEV TEST';
    
    var sasDevice = 'web_desktop';
    if(sasImHbMbIsMobile.any()){
        if(device == 'pc'){
            return 'device empty-ads device';
        }
        sasDevice = 'web_mobile';
    }else{
        if(device == 'mobile'){
            return 'device empty-ads device';
        }
    }
    var s0 = 'https://a.iprima.cz/iprima/lserver/bserverj/ball';
    var s2 = sasDevice;
    var s5 = Math.floor(Math.random() * 1000000);
    var s6 = Math.floor(Math.random() * 1000000);
    var s7 =  window.innerWidth;
    var s8 = window.innerHeight;
    var s9 =  screen.width;
    var s10 = screen.height;
    var s11 = 'prebid';
    //var s12 = 'CPzHq4APzHq4AAHABBENDbCgAP_AAEPAAAAAI2IBJC5kBSFCAGJgYtkQIAAGxxAAICACABAAAAAAABoAIAgAAAAwAAQABAAAABAAIEIAAABACEBAAAAAQAAAAQAAAAAQAAAAAQIAAAAAAiBACAAAAABAAAAAAABAQAAAgAAAAAIAQAAAAAEAgAAAAAAAAAAAABAAAQgAAAAAAAAAAAAAAAAAAAAAAAAAABBA1OBGABUAC4AHAAQAAyABoAEQAJgAVQAuABiADMAH4AQkAiACJAEcAKUAWIAy4B3AHeAP0Ag4BFgCSgF1ANYAbQA6gCQQE2gKkAWoAtwBkgDUwCQkAG';
//    var s12 = 'CP_r3oAP_r3oAAHABBENA3EgAAAAAAAAAAAAAAAAAADBIAMAAQUcHQAYAAgo4QgAwABBRwlABgACCjhSADAAEFHCwAGAAIKOAAAA.YAAAAAAAAAAA';
//    if (typeof __tcfapi === 'function') { 
//        __tcfapi('getTCData', 2, function(tcdata,success) {
//            console.log('retrieving TCDATA:', tcdata);
//            console.log('tcdata.tcString: '+tcdata.tcString);
//            s12 = tcdata.tcString; 
//        });
//    } 
    var s13 = 1;
    
    
    var url = 
    s0+
    s1+
    '/section='+s2+
    s3+
    s4+
    '/random='+s5+
    '/viewid='+s6+
    '/dev_display_width='+s7+
    '/dev_display_height='+s8+
    '/devwidth='+s9+
    '/devheight='+s10+
    '/keyword='+s11+
    '/consent='+imHbGs12+
    '/gdpr='+s13+
    '/showname='+imHbGs14;
    
    console.log('sasRequest:'+url);
    //1. OK
    // https://a.iprima.cz/iprima/lserver/bserverj/ball/
    // site=IMM_Femina/
    // section=web_desktop/
    // area=leaderboard-1/
    // size=970x90,728x90/
    // random=675378/
    // viewid=872461/
    // dev_display_width=1366/
    // dev_display_height=305/
    // devwidth=1366/
    // devheight=768/
    // keyword=prebid/
    // consent=CP2QlRgP2QlRgAcABBENAdEsAP_gAEPgAChQg1NX_D5ebWtj8XJVIftkaYwP55izomQxBhaIEe4FwAOG7BgGB2EwNAW4JiACGBAEkiIBAQFlHBBUARAAAIgRiSCMYkGMhTNKJKBAgFMRI0NYCBxmmIFDWQCY50ouM3fxmDeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACADB-uft87_XU-9_cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQaoOYACIAFAAXAA4ADwAKgAXAA4AB4AEAAJAAXwAxADKAGgAagA8AB-AEQAJgAUIApACmAFWALgAugBiADQAG8APwAhIBEAESAI4ASwAmgBSgDAAGGAMsAZoA2QByAD4gH2AfsA_wEAAIOARGAiwCMAEagI4AjoBIgCSgE7AJ-AVAAuYBeQC-gGKAM-AaIA14BtADcAHSAO2AfYA_4CJgEXgI9ASIAlQBKwCYoEyATKAmcBOwCh4FIAUiApMBTYCpAFVAKsAV3AsQCxQFlALRAWwAt0BcgC6AF2gLvgXkBeYC-gGCQSQBJSCTAJMgSjglQCVIEsIJZglpBLcEuIJdAl2BL6CYAJggTDAmKBMcCZMEzATOAmkBNQCbEE2wTcgm8Cb4E4QgoBBqABCQAQF5gAAA.f_wACHwAAAAA/
    // gdpr=1
    
//    sasUnitCustomIDsAds[aliasDivID] = 'Default for: '+aliasDivID+' :: empty-ads ';
//    console.log('Default for: sasUnitCustomIDsAds^');
//    console.log(sasUnitCustomIDsAds);

    var sasXhr = new XMLHttpRequest();
    var sasAsync = false;
    sasXhr.open('GET', url, sasAsync);
    //sasXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    


    sasXhr.send();
    console.log('no async sasXhr.responseText^');          
    console.log(sasXhr.responseText);
//    console.log('aliasDivID: '+aliasDivID);
//    if(aliasDivID == 'returnAd'){
//        console.log(sasUnitCustomIDsAds);
        return sasXhr.responseText;
//    }else{
//        sasUnitCustomIDsAds[aliasDivID] = sasXhr.responseText;
//        console.log(sasUnitCustomIDsAds)
//    }
        


//    sasXhr.onload = function () {
//        if(sasXhr.status === 201) {
//            console.log('sasXhr.status: 201 - Post successfully created!'); 
//        }else{
//            console.log('sasXhr.status: '+sasXhr.status); 
//        }
//    }

}

