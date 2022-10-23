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

/// Poki Iron Snout

function poki_loading_finished() {
	poki_log("Loading finished");
	sdk.gameLoadingFinished();
}

function poki_loading_update(percents) {
	sdk.gameLoadingProgress({percentageDone: percents});
}

function poki_gameplay_start(reason) {
	poki_log("Gameplay Start: " + reason);
	sdk.gameplayStart(reason);		
}

function poki_gameplay_stop(reason) {
	poki_log("Gameplay Stop: " + reason);
	sdk.gameplayStop(reason);
}

function poki_happy(value) {
	console.log("Happy: " + value);
	sdk.happyTime(value);
}

function poki_break(tag) {
	poki_callback("poki.break.started", tag);
	sdk.commercialBreak().then(function(){
		poki_callback("poki.break.completed", tag);
	});
}

function poki_rewarded_break(tag) {
	poki_callback("poki.rewarded.started", tag);
    
	sdk.rewardedBreak().then(
		(withReward) => {
			if (withReward) {
				poki_callback("poki.rewarded.completed", tag);
			} else {
				poki_callback("poki.rewarded.failed", tag);		
			}
		}
	);
}


function poki_callback(event, args) {
	gmCallback.game_callback(event, args);	
}


}
/*
     FILE ARCHIVED ON 20:35:21 Sep 21, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:31:02 Oct 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 178.912
  exclusion.robots: 0.143
  exclusion.robots.policy: 0.129
  RedisCDXSource: 2.616
  esindex: 0.011
  LoadShardBlock: 151.921 (3)
  PetaboxLoader3.datanode: 161.408 (4)
  CDXLines.iter: 20.257 (3)
  load_resource: 153.606
  PetaboxLoader3.resolve: 130.22
*/
