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

var gameReady = false;
		
function game_fullscreen() {
	var elem = document.body; // Make the body go full screen.
	requestFullScreen(elem);
}

function game_ready(resize) {
	gameReady = true;
	
	if (resize) {
		var nw = window.innerWidth;
		var nh = window.innerHeight;
		
		if( typeof( window.innerWidth ) == 'number' ) {
			//Non-IE
			nw = window.innerWidth;
			nh = window.innerHeight;
		} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			//IE 6+ in 'standards compliant mode'
			nw = document.documentElement.clientWidth;
			nh = document.documentElement.clientHeight;
		}		
		
		document.getElementById("canvas").width 	= nw;
		document.getElementById("canvas").height 	= nh;
		
		game_resize(nw, nh);
	}
}

function game_resize(w, h) {
	var arg = { width: w, height: h};
	gmCallback.game_callback("resize", JSON.stringify(arg));
}

function web_audio_resume() {
	if (g_WebAudioContext != undefined) {
		g_WebAudioContext.resume();
	}
}

function requestFullScreen(element) {
	var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

	if (requestMethod) { // Native full screen.
		requestMethod.call(element);
	} else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
}

}
/*
     FILE ARCHIVED ON 20:35:21 Sep 21, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:31:28 Oct 23, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 95.487
  exclusion.robots: 0.093
  exclusion.robots.policy: 0.083
  RedisCDXSource: 1.177
  esindex: 0.01
  LoadShardBlock: 73.724 (3)
  PetaboxLoader3.datanode: 127.214 (4)
  CDXLines.iter: 16.752 (3)
  load_resource: 207.042
  PetaboxLoader3.resolve: 133.7
*/
