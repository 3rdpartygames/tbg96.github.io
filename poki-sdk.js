var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(()=>{var e=function(e){var n=RegExp("[?&]"+e+"=([^&]*)").exec(window.location.search);return n&&decodeURIComponent(n[1].replace(/\+/g," "))},n="kids"===e("tag"),t=!!window.adBridge,o="yes"===e("gdhoist"),i=new(function(){function e(){var e=this;this.queue=[],this.init=function(n,t){return void 0===n&&(n={}),void 0===t&&(t={}),new Promise((function(o,i){e.enqueue("init",[n,t],o,i)}))},this.rewardedBreak=function(){return new Promise((function(e){e(!1)}))},this.commercialBreak=function(n){return new Promise((function(t,o){e.enqueue("commercialBreak",[n],t,o)}))},this.displayAd=function(e,n,t,o){o&&o(!0),t&&t()},this.withArguments=function(n){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];e.enqueue(n,t)}},this.handleAutoResolvePromise=function(){return new Promise((function(e){e()}))},this.throwNotLoaded=function(){console.debug("PokiSDK is not loaded yet. Not all methods are available.")},this.doNothing=function(){}}return e.prototype.enqueue=function(e,t,o,i){var r={fn:e,args:t||[],resolveFn:o,rejectFn:i};n?o&&o(!0):this.queue.push(r)},e.prototype.dequeue=function(){for(var e=this,n=function(){var n,o,i=t.queue.shift(),r=i,a=r.fn,u=r.args;if("function"==typeof window.PokiSDK[a])if((null==i?void 0:i.resolveFn)||(null==i?void 0:i.rejectFn)){var s="init"===a;if((n=window.PokiSDK)[a].apply(n,u).catch((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];"function"==typeof i.rejectFn&&i.rejectFn.apply(i,n),s&&setTimeout((function(){e.dequeue()}),0)})).then((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];"function"==typeof i.resolveFn&&i.resolveFn.apply(i,n),s&&setTimeout((function(){e.dequeue()}),0)})),s)return"break"}else(o=window.PokiSDK)[a].apply(o,u);else console.error("Cannot execute "+a)},t=this;this.queue.length>0;){if("break"===n())break}},e}());window.PokiSDK={init:i.init,initWithVideoHB:i.init,commercialBreak:i.commercialBreak,rewardedBreak:i.rewardedBreak,displayAd:i.displayAd,destroyAd:i.doNothing,getLeaderboard:i.handleAutoResolvePromise,shareableURL:function(){return new Promise((function(e,n){return n()}))},getURLParam:function(n){return e("gd"+n)||e(n)||""},getLanguage:function(){return navigator.language.toLowerCase().split("-")[0]},isAdBlocked:function(){}},["captureError","customEvent","gameInteractive","gameLoadingFinished","gameLoadingProgress","gameLoadingStart","gameplayStart","gameplayStop","happyTime","logError","muteAd","roundEnd","roundStart","sendHighscore","setDebug","setDebugTouchOverlayController","setLogging","setPlayerAge","setPlaytestCanvas","enableEventTracking"].forEach((function(e){window.PokiSDK[e]=i.withArguments(e)}));var r,a,u=(r=window.pokiSDKVersion||e("ab")||"v2.313.0",a="poki-sdk-core-"+r+".js",n&&(a="poki-sdk-kids-"+r+".js"),t&&(a="poki-sdk-playground-"+r+".js"),o&&(a="poki-sdk-hoist-"+r+".js"),"http://web.archive.org/web/20221021115805/https://game-cdn.poki.com/scripts/"+r+"/"+a),s=document.createElement("script");s.setAttribute("src",u),s.setAttribute("type","text/javascript"),s.setAttribute("crossOrigin","anonymous"),s.onload=function(){return i.dequeue()},document.head.appendChild(s)})();

}
/*
     FILE ARCHIVED ON 11:58:05 Oct 21, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:05:39 Oct 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 101.167
  exclusion.robots: 0.222
  exclusion.robots.policy: 0.214
  RedisCDXSource: 5.588
  esindex: 0.008
  LoadShardBlock: 57.488 (3)
  PetaboxLoader3.datanode: 87.112 (5)
  CDXLines.iter: 23.662 (3)
  load_resource: 128.33 (2)
  PetaboxLoader3.resolve: 50.995 (2)
*/
